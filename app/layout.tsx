import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Ship your startup rapidly | Shadcn UI Pro",
  description: "Elegant, Simple, and Powerful NextJS boilerplate with all you need to build your SaaS. Ship your startup rapidly。",
  authors: [{ name: "shadcn", url: "https://shadcn.com" }],
  creator: "shadcn",
  manifest: "https://pro.shadcn.net/site.webmanifest",
  keywords: [
    "Shadcn UI Pro",
    "Shadcn UI boilerplate",
    "Shadcn UI template",
    "Shadcn UI starter",
    "ShipFast",
    "NextJS boilerplate",
    "NextJS starter",
    "NextJS template",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
    "shadcn ui"
  ],
  openGraph: {
    title: "Shadcn UI Pro",
    description: "Elegant, Simple, and Powerful NextJS boilerplate with all you need to build your SaaS. Ship your startup rapidly。",
    url: "https://pro.shadcn.net",
    siteName: "Shadcn UI Pro",
    locale: "en_US",
    type: "website",
    images: [{
      url: "https://www.shadcn.net/og.jpg",
      width: 1200,
      height: 630,
      alt: "Shadcn UI Pro"
    }]
  },
  twitter: {
    card: "summary_large_image",
    creator: "@shadcn",
    title: "Shadcn UI Pro",
    description: "Elegant, Simple, and Powerful NextJS boilerplate with all you need to build your SaaS. Ship your startup rapidly。",
    images: ["https://www.shadcn.net/og.jpg"]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
