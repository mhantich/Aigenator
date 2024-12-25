"use client";

import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { contentTemplates } from "@/lib/Inputs";
import { useForm, FieldError, Merge, FieldErrorsImpl } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AiGenerate } from "@/app/actions/AiGenerate";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { marked } from "marked";

const Page = () => {
  const params = useParams<{ slug: string }>();
  const [promted, setPromted] = useState("");
  const [laoding, setlaoding] = useState(false);

  const filtered = contentTemplates.filter((item) => item.slug === params.slug);

  if (filtered.length === 0) {
    return <div>Content not found</div>;
  }

  const formInputs = filtered[0].formInputs;

  const schemaObject = formInputs.reduce((acc, input) => {
    switch (input.type) {
      case "text":
        acc[input.name] = input.required
          ? z.string().min(1, { message: `${input.placeholder} is required` })
          : z.string().optional();
        break;
      case "textarea":
        acc[input.name] = input.required
          ? z.string().min(1, { message: `${input.placeholder} is required` })
          : z.string().optional();
        break;
      case "select":
        acc[input.name] = input.required
          ? z.enum(input.options as [string, ...string[]])
          : z.enum(input.options as [string, ...string[]]).optional();
        break;
      case "number":
        acc[input.name] = input.required
          ? z.number({
              invalid_type_error: `${input.placeholder} must be a number`,
            })
          : z.number().optional();
        break;
    }
    return acc;
  }, {} as Record<string, z.ZodType<any>>);

  const schema = z.object(schemaObject);

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      setlaoding(true);
      const result = await AiGenerate(data, params.slug, filtered[0].aiPrompt);

      if (result.success) {
        toast.success("Success");
        const htmlContent = marked(result.content);
        const content = await Promise.resolve(htmlContent);
        setPromted(content);

        setlaoding(false);
        reset();
      } else {
        toast("Error");
        setlaoding(false);
      }
    } catch (error) {
      toast.error("Error");
      setlaoding(false);
    }
  };

  const renderErrorMessage = (
    error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
  ) => {
    if (!error) return null;

    let errorMessage: string | undefined;

    if (typeof error === "string") {
      errorMessage = error;
    } else if (typeof error.message === "string") {
      errorMessage = error.message;
    } else if (Array.isArray(error.message)) {
      errorMessage = error.message.join(", ");
    }

    return errorMessage ? (
      <p className="text-red-500 text-sm mt-1">
        {errorMessage as React.ReactNode}
      </p>
    ) : null;
  };

  return (
    <div className="container">
      <div className="grid flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 grid-cols-1 lg:grid-cols-3 w-full">
        <div className="bg-gray-100 p-4">
          <div className="text-center mb-1">
            <h1 className="capitalize text-2xl font-medium">
              {filtered[0].title}
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {formInputs.map((input, index) => {
              switch (input.type) {
                case "text":
                  return (
                    <div key={index} className="mb-4">
                      <label
                        htmlFor={input.name}
                        className="block text-sm font-medium"
                      >
                        {input.placeholder}
                      </label>
                      <input
                        type={input.type}
                        id={input.name}
                        {...register(input.name)}
                        placeholder={input.placeholder}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                      />
                      {renderErrorMessage(errors[input.name])}
                    </div>
                  );
                case "textarea":
                  return (
                    <div key={index} className="mb-4">
                      <label
                        htmlFor={input.name}
                        className="block text-sm font-medium"
                      >
                        {input.placeholder}
                      </label>
                      <textarea
                        id={input.name}
                        {...register(input.name)}
                        placeholder={input.placeholder}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                      />
                      {renderErrorMessage(errors[input.name])}
                    </div>
                  );
                case "select":
                  return (
                    <div key={index} className="mb-4">
                      <label
                        htmlFor={input.name}
                        className="block text-sm font-medium"
                      >
                        {input.placeholder}
                      </label>
                      <select
                        id={input.name}
                        {...register(input.name)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                      >
                        {input.options.map((option, optionIndex) => (
                          <option key={optionIndex} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {renderErrorMessage(errors[input.name])}
                    </div>
                  );
                default:
                  return null;
              }
            })}
            <button
              type="submit"
              disabled={laoding}
              className="mt-4 bg-black text-white px-4 py-2 rounded"
            >
              {laoding ? (
                <div
                  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-danger motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                >
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
              ) : (
                <div>submit</div>
              )}
            </button>
          </form>
        </div>
        <div className="col-span-2 ">
          <ReactQuill
            style={{ backgroundColor: "white" }}
            className="sticky top-0 bg-slate-500 max-h-[80vh]  overflow-y-auto"
            theme="snow"
            value={promted}
            modules={{ toolbar: true }}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
