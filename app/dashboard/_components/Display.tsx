import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

import Link from 'next/link';
import Image from 'next/image';

// Base interface for form inputs
interface BaseFormInput {
    name: string;
    type: string;
    placeholder: string;
    required: boolean;
  }
  

  interface TextFormInput extends BaseFormInput {
    type: 'text' | 'textarea' | 'number';
  }
  
  // Interface for select-based form inputs
  interface SelectFormInput extends BaseFormInput {
    type: 'select';
    options: string[];
  }
  
  // Union type to cover all form input types
  type FormInput = TextFormInput | SelectFormInput;
  
  // ContentTemplate interface
  export interface ContentTemplate {
    title: string;
    description: string;
    formInputs: FormInput[];
    slug: string;
    image: string;
    aiPrompt: string;
  }
  
  

interface ContentTemplateCardsProps {
  contentTemplates: ContentTemplate[];
}

const Display: React.FC<ContentTemplateCardsProps> = ({ contentTemplates }) => {
  return (
<>
{contentTemplates.map((template) => (
      <Link key={template.slug} href={`/dashboard/contentTemplates/${template.slug}`} passHref>
  <Card  className="overflow-hidden">
    <CardContent className="p-0">
       <Image
        src='/promemberscall.png'
        width={400}
        height={225}
        alt={template.title}
        className="object-cover aspect-video"
      /> 
    </CardContent>
    <CardFooter className="p-4">
      <div className="flex items-center justify-between w-full">
        <div className="space-y-1">
          <h4 className="text-lg font-bold">{template.title}</h4>
          <p className="text-sm text-muted-foreground">{template.description}</p>
        </div>
       
      </div>
    </CardFooter>
  </Card>
        </Link>
))}
</>

  );
};

export default Display;
