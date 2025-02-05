import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  const faqItems = [
    {
      question: "Does Shadcn UI Pro Affiliated with Shadcn or Shadcn/ui?",
      answer: "No. Shadcn UI Pro is a professional template that integrates many sass services and can quickly build entrepreneurial projects."
    },
    {
      question: "What is Shadcn UI Pro?",
      answer: "Shadcn UI Pro is a premium UI framework designed for modern web development projects, offering a comprehensive suite of components and tools to build professional applications efficiently."
    },
    {
      question: "What are the key features of Shadcn UI Pro?",
      answer: "Shadcn UI Pro offers a responsive design, extensive component library, customizable styles, accessibility support, cross-browser compatibility, optimized performance, and developer-friendly code."
    },
    {
      question: "Can Shadcn UI Pro be used for different screen sizes and devices?",
      answer: "Yes, Shadcn UI Pro is fully responsive and works seamlessly across all screen sizes and devices, from mobile phones to desktop computers."
    },
    {
      question: "Is it easy to customize the styles of Shadcn UI Pro?",
      answer: "Absolutely! Shadcn UI Pro provides flexible styling options through Tailwind CSS, allowing you to easily customize colors, typography, spacing, and other design elements."
    },
    {
      question: "Does Shadcn UI Pro support accessibility?",
      answer: "Yes, accessibility is a core feature of Shadcn UI Pro. All components are built with ARIA attributes and follow web accessibility guidelines (WCAG)."
    },
    {
      question: "Will my application built with Shadcn UI Pro work on different browsers?",
      answer: "Yes, Shadcn UI Pro is thoroughly tested and compatible with all modern browsers including Chrome, Firefox, Safari, and Edge."
    },
    {
      question: "Does Shadcn UI Pro prioritize performance?",
      answer: "Yes, performance is a top priority. Components are optimized for fast loading times and smooth interactions, with careful attention to bundle size and runtime efficiency."
    },
    {
      question: "Is Shadcn UI Pro suitable for beginners?",
      answer: "While Shadcn UI Pro is feature-rich, it's designed with developer experience in mind and includes comprehensive documentation to help developers of all skill levels."
    },
    {
      question: "What kind of support is available for Shadcn UI Pro?",
      answer: "We offer comprehensive documentation, regular updates, and community support through our Discord channel and GitHub discussions."
    },
    {
      question: "Can I join a community of developers using Shadcn UI Pro?",
      answer: "Yes! We have an active community of developers who share knowledge, best practices, and help each other through our Discord server and GitHub discussions."
    }
  ]

  return (
    <section className="mx-auto max-w-[1440px] py-24 sm:py-32 px-4">
      <h2 className="text-center text-2xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1] mb-12">
        FAQ
      </h2>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger className="text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
} 