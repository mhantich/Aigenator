import { ContentTemplate } from "@/app/dashboard/_components/Display";
export const contentTemplates: ContentTemplate[] = [
  {
    title: "Historical Summer Event Spotlight",
    "description": "Generate engaging content about significant historical events that occurred during summer months, perfect for seasonal blog posts, social media content, or educational materials.",
    "formInputs": [
      {
        "name": "eventType",
        "type": "select",
        "options": ["Political", "Cultural", "Scientific", "Sports", "Natural Disaster", "Technological"],
        "placeholder": "Select the type of historical event",
        "required": true,
      },
      {
        "name": "century",
        "type": "select",
        "options": ["Ancient History", "Middle Ages", "Renaissance", "17th Century", "18th Century", "19th Century", "20th Century", "21st Century"],
        "placeholder": "Select the time period of the event",
        "required": true,
      },
      {
        "name": "specificDate",
        "type": "text",
        "placeholder": "Enter the specific date if known (e.g., July 20, 1969)",
        "required": false,
      },
      {
        "name": "location",
        "type": "text",
        "placeholder": "Where did the event take place?",
        "required": true,
      },
      {
        "name": "keyFigures",
        "type": "textarea",
        "placeholder": "List any key historical figures involved (one per line)",
        "required": false,
      },
      {
        "name": "significance",
        "type": "textarea",
        "placeholder": "Briefly describe the event's historical significance",
        "required": true,
      },
      {
        "name": "contentLength",
        "type": "select",
        "options": ["Short (300-500 words)", "Medium (500-800 words)", "Long (800-1200 words)"],
        "placeholder": "Select desired content length",
        "required": true,
      },
      {
        "name": "contentFormat",
        "type": "select",
        "options": ["Blog Post", "Social Media Post", "Newsletter", "Podcast Script", "Video Script"],
        "placeholder": "Choose the format for your content",
        "required": true,
      }
    ],
    "slug": "SUMMER-HISTORY",
    "image": "/images/summer-history-icon.png",
    "aiPrompt": "Create a {contentLength} {contentFormat} about a {eventType} event that occurred in the {century} during summer in {location}. The event took place on {specificDate} (if provided). Focus on its historical significance: {significance}. Include information about these key figures if relevant: {keyFigures}. Structure the content with an engaging introduction, main body with key details and historical context, and a conclusion that reflects on the event's lasting impact. If creating a blog post, use appropriate headings and subheadings. For social media, include relevant hashtags. For a podcast or video script, ensure a conversational tone. Incorporate summer themes or imagery where appropriate to tie the historical event to the season."
  },
  {
    title: "SEO-Optimized Twitter Post",
    description:
      "Create highly engaging and impactful tweets optimized for SEO, tailored to boost visibility on both Twitter and Google search results.",
    formInputs: [
      {
        name: "topic",
        type: "textarea",
        placeholder: "What's the main topic or keyword for your tweet?",
        required: true,
      },
      {
        name: "tone",
        type: "select",
        options: [
          "Informative",
          "Engaging",
          "Authoritative",
          "Trending",
          "Conversational",
        ],
        placeholder: "Choose the desired tone for your tweet",
        required: true,
      },
      {
        name: "characterCount",
        type: "text",
        placeholder: "Preferred character count ",
        required: true,
      },
      {
        name: "hashtags",
        type: "text",
        placeholder:
          "Add relevant, trending hashtags (e.g., #SEO, #DigitalMarketing)",
        required: true,
      },
      {
        name: "callToAction",
        type: "text",
        placeholder: "What action do you want readers to take?",
        required: true,
      },
      {
        name: "keywordPlacement",
        type: "select",
        options: ["Beginning", "Middle", "End"],
        placeholder: "Where to place the main keyword in the tweet?",
        required: true,
      },

      {
        name: "trendJacking",
        type: "text",
        placeholder: "Any current trends or events to reference?",
        required: false,
      },
    ],
    slug: "SEO-TWITTER",
    image: "/images/seo-twitter-icon.png",
    aiPrompt:
      "Generate a {characterCount}-character SEO-optimized tweet about {topic} in a {tone} tone. Place the main keyword in the {keywordPlacement}. Include these hashtags: {hashtags}. Incorporate a clear call-to-action: {callToAction}. If applicable, reference this trend: {trendJacking}.  Ensure the tweet is well-formatted, engaging, and optimized for both Twitter visibility and Google search ranking.",
  },
  {
    "title": "SEO-Optimized Website Landing Page",
    "description": "Design a powerful landing page optimized for search engines, aimed at converting visitors and enhancing online visibility.",
    "formInputs": [
      {
        "name": "pagePurpose",
        "type": "text",
        "placeholder": "What is the primary purpose of the landing page?",
        "required": true
      },
      {
        "name": "targetKeywords",
        "type": "textarea",
        "placeholder": "List the main SEO keywords to focus on (one per line)",
        "required": true
      },
      {
        "name": "targetAudience",
        "type": "text",
        "placeholder": "Who is the target audience for this page?",
        "required": true
      },
      {
        "name": "headline",
        "type": "text",
        "placeholder": "What is the main headline for the page?",
        "required": true
      },
      {
        "name": "cta",
        "type": "text",
        "placeholder": "What is the call-to-action for this page?",
        "required": true
      },
      {
        "name": "keyBenefits",
        "type": "textarea",
        "placeholder": "Highlight the key benefits or features of your product/service",
        "required": true
      },
      {
        "name": "contentLength",
        "type": "select",
        "options": ["Short (300-500 words)", "Medium (500-800 words)", "Long (800-1200 words)"],
        "placeholder": "Select desired content length",
        "required": true
      }
    ],
    "slug": "SEO-LANDING-PAGE",
    "image": "/images/seo-landing-page-icon.png",
    "aiPrompt": "Create a {contentLength} SEO-optimized landing page focused on {pagePurpose}. Use the following target keywords: {targetKeywords}. Tailor the content for {targetAudience}. Start with a strong headline: {headline}. Highlight these key benefits: {keyBenefits}. Include a clear call-to-action: {cta}. Ensure the content is engaging, well-structured, and optimized for both conversion and search engine visibility."
  }
,  
  {
    title: "SEO-Optimized Blog Article",
    description:
      "Generate comprehensive, SEO-friendly blog posts designed to rank well in search engines and engage your target audience",
    formInputs: [
      {
        name: "mainKeyword",
        type: "text",
        placeholder: "Enter your primary target keyword or phrase",
        required: true,
      },
      {
        name: "secondaryKeywords",
        type: "textarea",
        placeholder: "Enter 3-5 secondary keywords (one per line)",
        required: true,
      },
      {
        name: "wordCount",
        type: "text",
        placeholder: "Desired word count (recommended: 1500-2500)",
        required: true,
      },
      {
        name: "audience",
        type: "select",
        options: ["Beginners", "Intermediate", "Advanced", "General"],
        placeholder: "Select your target audience",
        required: true,
      },
      {
        name: "contentType",
        type: "select",
        options: [
          "How-to Guide",
          "Listicle",
          "Ultimate Guide",
          "Case Study",
          "Industry News",
          "Opinion Piece",
        ],
        placeholder: "Choose the type of content",
        required: true,
      },
      {
        name: "metaDescription",
        type: "textarea",
        placeholder: "Enter a compelling meta description (150-160 characters)",
        required: true,
      },
      {
        name: "internalLinkingTopics",
        type: "text",
        placeholder: "Topics to internally link (comma-separated)",
        required: false,
      },
      {
        name: "callToAction",
        type: "text",
        placeholder: "What action should readers take after reading?",
        required: true,
      },
    ],
    slug: "SEO-BLOG",
    image: "/images/seo-blog-icon.png",
    aiPrompt:
      "Write a {wordCount}-word SEO-optimized blog post structured as a {contentType} about {mainKeyword} for a {audience} audience. Incorporate these secondary keywords: {secondaryKeywords}. Structure the post with an SEO-friendly title, meta description: '{metaDescription}', introduction, main points with appropriate H2 and H3 headings, and a conclusion. Include internal links to these topics if relevant: {internalLinkingTopics}. End with this call to action: {callToAction}. Format the content for easy reading with short paragraphs, bullet points, and relevant subheadings. Optimize for featured snippets where appropriate. Output in a text editor format ",
  },
  {
    title: "Marketing Ad Copy",
    description: "Craft persuasive ad copy for various marketing channels",
    formInputs: [
      {
        name: "product",
        type: "text",
        placeholder: "What product or service are you advertising?",
        required: true,
      },
      {
        name: "wordCount",
        type: "text",
        placeholder: "Desired word count",
        required: true,
      },
      {
        name: "platform",
        type: "select",
        options: ["Facebook", "Google Ads", "Instagram", "LinkedIn"],
        placeholder: "Select the advertising platform",
        required: true,
      },
      {
        name: "uniqueSellingPoint",
        type: "textarea",
        placeholder: "What makes your product/service unique?",
        required: true,
      },
      {
        name: "callToAction",
        type: "text",
        placeholder: "What action do you want the reader to take?",
        required: true,
      },
    ],
    slug: "AD_COPY",
    image: "/images/ad-copy-icon.png",
    aiPrompt:
      "Create a compelling ad copy for {product} to be used on {platform}. Highlight this unique selling point: {uniqueSellingPoint}. Include this call to action: {callToAction}. Ensure the copy is concise and platform-appropriate. with  {wordCount}-word  on text editor format",
  },
  {
    title: "Product Description",
    description: "Generate detailed and persuasive product descriptions",
    formInputs: [
      {
        name: "productName",
        type: "text",
        placeholder: "Enter the product name",
        required: true,
      },
      {
        name: "features",
        type: "textarea",
        placeholder: "List key product features (one per line)",
        required: true,
      },
      {
        name: "targetAudience",
        type: "text",
        placeholder: "Who is this product for?",
        required: true,
      },
      {
        name: "wordCount",
        type: "text",
        placeholder: "Desired word count",
        required: true,
      },
      {
        name: "tone",
        type: "select",
        options: ["Professional", "Casual", "Luxury", "Technical"],
        placeholder: "Select the tone for the description",
        required: true,
      },
    ],
    slug: "PRODUCT_DESC",
    image: "/images/product-icon.png",
    aiPrompt:
      "Write a compelling product description for {productName}. Target audience: {targetAudience}. Tone: {tone}. Highlight these key features: {features}. Focus on benefits and create desire for the product.with  {wordCount}-word  on text editor format",
  },
  {
    title: "Email Newsletter",
    description:
      "Create engaging email newsletters to keep your audience informed",
    formInputs: [
      {
        name: "subject",
        type: "text",
        placeholder: "Enter the email subject line",
        required: true,
      },
      {
        name: "wordCount",
        type: "text",
        placeholder: "Desired word count",
        required: true,
      },
      {
        name: "mainTopic",
        type: "textarea",
        placeholder: "What is the main topic or news you want to share?",
        required: true,
      },
      {
        name: "additionalSections",
        type: "textarea",
        placeholder:
          "List additional sections or points to cover (one per line)",
        required: false,
      },
      {
        name: "callToAction",
        type: "text",
        placeholder: "What action do you want readers to take?",
        required: true,
      },
    ],
    slug: "EMAIL_NEWSLETTER",
    image: "/images/email-icon.png",
    aiPrompt:
      "Create an engaging email newsletter with the subject line: {subject}. Main topic: {mainTopic}. Include these additional sections: {additionalSections}. End with this call to action: {callToAction}. Keep the tone friendly and informative. with  {wordCount}-word  on text editor format",
  },
  {
    title: "LinkedIn Post",
    description: "Craft professional and engaging LinkedIn posts",
    formInputs: [
      {
        name: "topic",
        type: "textarea",

        placeholder: "What do you want to post about on LinkedIn?",
        required: true,
      },
      {
        name: "wordCount",
        type: "text",
        placeholder: "Desired word count",
        required: true,
      },
      {
        name: "industryFocus",
        type: "text",

        placeholder: "Specify the industry or professional field",
        required: true,
      },
      {
        type: "select",
        name: "contentType",
        options: [
          "Thought Leadership",
          "Company Update",
          "Industry Insight",
          "Career Advice",
        ],

        placeholder: "Select the type of content",
        required: true,
      },
      {
        name: "callToAction",
        type: "text",

        placeholder: "What action do you want readers to take?",
        required: false,
      },
    ],
    slug: "LINKEDIN",
    image: "/images/linkedin-icon.png",
    aiPrompt:
      "Create a professional LinkedIn post about {topic} focused on the {industryFocus} industry. The post should be in the style of {contentType}. If provided, include this call to action: {callToAction}. Keep the tone professional and insightful.with  {wordCount}-word  on text editor format",
  },
  {
    title: "Instagram Caption",
    description: "Generate engaging captions for Instagram posts",
    formInputs: [
      {
        name: "imageDescription",
        type: "textarea",

        placeholder: "Describe the image youre posting",
        required: true,
      },
      {
        name: "wordCount",
        type: "text",
        placeholder: "Desired word count",
        required: true,
      },
      {
        type: "select",
        name: "mood",
        options: ["Inspirational", "Funny", "Informative", "Promotional"],
        placeholder: "Select the mood of your post",
        required: true,
      },
      {
        name: "hashtags",
        type: "text",

        placeholder: "Enter relevant hashtags (comma-separated)",
        required: false,
      },
      {
        name: "mentionAccounts",
        type: "text",

        placeholder: "Any accounts to mention? (comma-separated)",
        required: false,
      },
    ],
    slug: "INSTAGRAM",
    image: "/images/instagram-icon.png",
    aiPrompt:
      "Create an engaging Instagram caption for an image of {imageDescription}. The caption should have a {mood} mood. Include these hashtags: {hashtags}. Mention these accounts if provided: {mentionAccounts}. Keep it concise and appealing.with  {wordCount}-word  on text editor format",
  },
  {
    title: "YouTube Video Script",
    description: "Create structured scripts for YouTube videos",
    formInputs: [
      {
        name: "videoTitle",
        type: "text",

        placeholder: "Enter the title of your video",
        required: true,
      },
      {
        name: "wordCount",
        type: "text",
        placeholder: "Desired word count",
        required: true,
      },
      {
        name: "topic",
        type: "textarea",

        placeholder: "What is your video about?",
        required: true,
      },
      {
        name: "targetDuration",
        type: "text",

        placeholder: "Target video duration (in minutes)",
        required: true,
      },
      {
        name: "keyPoints",
        type: "textarea",

        placeholder: "List key points to cover (one per line)",
        required: true,
      },
      {
        name: "callToAction",
        type: "text",

        placeholder: "What should viewers do after watching?",
        required: true,
      },
    ],
    slug: "YOUTUBE_SCRIPT",
    image: "/images/youtube-icon.png",
    aiPrompt:
      'Create a script for a {targetDuration}-minute YouTube video titled "{videoTitle}" about {topic}. Cover these key points: {keyPoints}. Include an engaging introduction, main content, and a conclusion with this call to action: {callToAction}.with  {wordCount}-word  on text editor format',
  },
  {
    title: "Podcast Episode Outline",
    description: "Structure comprehensive outlines for podcast episodes",
    formInputs: [
      {
        name: "episodeTitle",
        type: "text",

        placeholder: "Enter the title of your podcast episode",
        required: true,
      },
      {
        name: "wordCount",
        type: "text",
        placeholder: "Desired word count",
        required: true,
      },
      {
        name: "topic",
        type: "textarea",

        placeholder: "What is this episode about?",
        required: true,
      },
      {
        name: "guestInfo",
        type: "textarea",

        placeholder: "Information about the guest (if any)",
        required: false,
      },
      {
        name: "keySegments",
        type: "textarea",

        placeholder: "List main segments or talking points (one per line)",
        required: true,
      },
      {
        name: "duration",
        type: "text",

        placeholder: "Planned episode duration (in minutes)",
        required: true,
      },
    ],
    slug: "PODCAST_OUTLINE",
    image: "/images/podcast-icon.png",
    aiPrompt:
      'Create a detailed outline for a {duration}-minute podcast episode titled "{episodeTitle}" about {topic}. Include an introduction, these key segments: {keySegments}, and a conclusion. If applicable, incorporate information about the guest: {guestInfo}.with  {wordCount}-word  on text editor format',
  },
  {
    title: "Press Release",
    description: "Craft professional press releases for various announcements",
    formInputs: [
      {
        name: "headline",
        type: "text",

        placeholder: "Enter the main headline",
        required: true,
      },
      {
        name: "wordCount",
        type: "text",
        placeholder: "Desired word count",
        required: true,
      },
      {
        name: "announcement",
        type: "textarea",

        placeholder: "What are you announcing?",
        required: true,
      },
      {
        name: "companyInfo",
        type: "textarea",

        placeholder: "Brief company description",
        required: true,
      },
      {
        name: "quotes",
        type: "textarea",

        placeholder: "Any quotes from company representatives? (optional)",
        required: false,
      },
      {
        name: "contactInfo",
        type: "textarea",

        placeholder: "Contact information for media inquiries",
        required: true,
      },
    ],
    slug: "PRESS_RELEASE",
    image: "/images/press-release-icon.png",
    aiPrompt:
      'Write a professional press release with the headline: "{headline}". The main announcement is: {announcement}. Include this company information: {companyInfo}. Incorporate these quotes if provided: {quotes}. End with the following contact information: {contactInfo}.with  {wordCount}-word  on text editor format',
  },
  {
    title: "Company Bio",
    description:
      "Generate compelling company biographies for various platforms",
    formInputs: [
      {
        name: "companyName",
        type: "text",

        placeholder: "Enter your company name",
        required: true,
      },
      {
        name: "wordCount",
        type: "text",
        placeholder: "Desired word count",
        required: true,
      },
      {
        name: "industry",
        type: "text",

        placeholder: "What industry are you in?",
        required: true,
      },
      {
        name: "missionStatement",
        type: "textarea",

        placeholder: "What is your companys mission?",
        required: true,
      },
      {
        name: "keyAchievements",
        type: "textarea",

        placeholder: "List key company achievements (one per line)",
        required: false,
      },
      {
        type: "select",
        name: "tone",
        options: ["Professional", "Friendly", "Innovative", "Traditional"],
        placeholder: "Select the tone for the bio",
        required: true,
      },
    ],
    slug: "COMPANY_BIO",
    image: "/images/company-icon.png",
    aiPrompt:
      "Create a compelling company bio for {companyName} in the {industry} industry. Incorporate this mission statement: {missionStatement}. Highlight these achievements if provided: {keyAchievements}. Use a {tone} tone throughout the bio.with  {wordCount}-word  on text editor format",
  },
  {
    title: "Job Description",
    description: "Create comprehensive and attractive job descriptions",
    formInputs: [
      {
        name: "jobTitle",
        type: "text",

        placeholder: "Enter the job title",
        required: true,
      },
      {
        name: "wordCount",
        type: "text",
        placeholder: "Desired word count",
        required: true,
      },
      {
        name: "department",
        type: "text",

        placeholder: "Which department is this role in?",
        required: true,
      },
      {
        name: "responsibilities",
        type: "textarea",

        placeholder: "List main job responsibilities (one per line)",
        required: true,
      },
      {
        name: "qualifications",
        type: "textarea",

        placeholder: "List required qualifications (one per line)",
        required: true,
      },
      {
        name: "benefits",
        type: "textarea",

        placeholder: "List key benefits and perks (one per line)",
        required: true,
      },
      {
        name: "companyDescription",
        type: "textarea",

        placeholder: "Brief description of the company",
        required: true,
      },
    ],
    slug: "JOB_DESCRIPTION",
    image: "/images/job-icon.png",
    aiPrompt:
      "Create an attractive job description for the position of {jobTitle} in the {department} department. Include these main responsibilities: {responsibilities}. List these required qualifications: {qualifications}. Highlight these benefits: {benefits}. Incorporate this company description: {companyDescription}.with  {wordCount}-word  on text editor format",
  },
  {
    title: "FAQ Page",
    description: "Generate comprehensive FAQ pages for websites or products",
    formInputs: [
      {
        name: "topic",
        type: "text",

        placeholder:
          "What is this FAQ about? (e.g., product, service, company)",
        required: true,
      },
      {
        name: "questions",
        type: "textarea",

        placeholder: "List potential questions (one per line)",
        required: true,
      },
      {
        name: "wordCount",
        type: "text",
        placeholder: "Desired word count",
        required: true,
      },
      {
        type: "select",
        name: "tone",
        options: ["Friendly", "Professional", "Technical", "Simplified"],

        placeholder: "Select the tone for answers",
        required: true,
      },
      {
        name: "additionalInfo",
        type: "textarea",

        placeholder: "Any additional information to include?",
        required: false,
      },
    ],
    slug: "FAQ",
    image: "/images/faq-icon.png",
    aiPrompt:
      "Create a comprehensive FAQ page about {topic}. Answer these questions: {questions}. Use a {tone} tone in the answers. Include this additional information if provided: {additionalInfo}. Organize the FAQ in a logical order.with  {wordCount}-word  on text editor format",
  },
];
