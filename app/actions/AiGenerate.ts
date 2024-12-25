'use server'

import { z } from 'zod';
import { contentTemplates } from '@/lib/Inputs';
import { generateContent } from '@/lib/AiModel';

export async function AiGenerate(data:any, slug:string,aiPrompt:string) {
  const filtered = contentTemplates.filter((item) => item.slug === slug);

  if (filtered.length === 0) {
    throw new Error('Content not found');
  }

  const formInputs = filtered[0].formInputs;

  // Dynamically create Zod schema based on formInputs
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


  // Validate the data using the dynamically generated schema
  const result = schema.safeParse(data);

  if (!result.success) {
    // If validation fails, return the error
    return { success: false, error: result.error.issues[0].message };
  }
  const pumpt = aiPrompt.replace(/{(\w+)}/g, (_, key) => {
    return data[key] !== undefined ? data[key] : `{${key}}`;
  });
//   console.log(pumpt)
  // Here you would typically save the data to a database
  // For this example, we'll just simulate a successful save
  const content = await generateContent(pumpt)
//   console.log(content)


  // Return success
  return { success: true ,content};
}