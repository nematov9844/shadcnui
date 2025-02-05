import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FeaturesIntegration } from "@/components/features-integration"
import { Stats } from "@/components/stats"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { LogoIcon } from "./components/icons/logo"
import { TwitterIcon } from "./components/icons/twitter"
import { ThemeToggle } from "@/components/theme-toggle"
import { GithubIcon } from "lucide-react"
import { FeaturesList } from "@/components/features-list"
import { ThemeButtons } from "@/components/theme-buttons"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-[1440px] flex h-14 items-center px-4">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <LogoIcon />
              <span className="hidden font-bold sm:inline-block">
                Shadcn UI Pro
              </span>
            </Link>
            <nav className="flex items-center gap-4 text-sm lg:gap-6">
              <Link
                href="https://shadcn.net/en/"
                target="__blank"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Docs
              </Link>
              <Link
                href="https://shadcn.net/en/docs/components"
                target="__blank"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Components
              </Link>
              <Link
                href="https://shadcn.net/en/themes"
                target="__blank"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Themes
              </Link>
              <Link
                href="https://shadcn.net/en/examples"
                target="__blank"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Examples
              </Link>
              <Link
                href="https://shadcn.net/en/blocks"
                target="__blank"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Blocks
              </Link>
              <Link
                href="https://github.com/shadcn-ui/ui"
                target="__blank"
                className="hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
              >
                GitHub
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center">
              <Link href="https://github.com/shadcn-ui/ui" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon">
                  <GithubIcon />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://twitter.com/shadcn" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon">
                  <TwitterIcon />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-[1440px] flex flex-col items-center justify-center gap-4 pb-8 pt-6 md:py-10 px-4">
          <div className="flex max-w-[980px] flex-col items-center gap-2 text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
              <span className="relative">
                <svg
                  style={{ fill: 'hsl(var(--primary))' }}
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute left-0 top-2/3 h-[0.58em] w-full opacity-70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="relative">Shadcn UI Pro</span>
              </span>
              <br />
              Ship your startup rapidly
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Elegant, Simple, and Powerful NextJS boilerplate
              <br />
              with all you need to build your SaaS.
            </p>
          </div>

          <div className="flex gap-4">
            <ThemeButtons />
            <Link href="https://forms.gle/guGfPLDGrsWoF8uw9" target="__blank">
              <Button>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M8.69667 0.0403541C8.90859 0.131038 9.03106 0.354857 8.99316 0.582235L8.0902 6.00001H12.5C12.6893 6.00001 12.8625 6.10701 12.9472 6.27641C13.0319 6.4458 13.0136 6.6485 12.8999 6.80001L6.89997 14.8C6.76167 14.9844 6.51521 15.0503 6.30328 14.9597C6.09135 14.869 5.96888 14.6452 6.00678 14.4178L6.90974 9H2.49999C2.31061 9 2.13748 8.893 2.05278 8.72361C1.96809 8.55422 1.98636 8.35151 2.09999 8.2L8.09997 0.200038C8.23828 0.0156255 8.48474 -0.0503301 8.69667 0.0403541ZM3.49999 8.00001H7.49997C7.64695 8.00001 7.78648 8.06467 7.88148 8.17682C7.97648 8.28896 8.01733 8.43723 7.99317 8.5822L7.33027 12.5596L11.5 7.00001H7.49997C7.353 7.00001 7.21347 6.93534 7.11846 6.8232C7.02346 6.71105 6.98261 6.56279 7.00678 6.41781L7.66968 2.44042L3.49999 8.00001Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                </svg>
                Get Started
              </Button>
            </Link>
            <Link href="https://forms.gle/guGfPLDGrsWoF8uw9" target="__blank">
              <Button variant="outline">$ git clone shadcn-ui-pro</Button>
            </Link>
          </div>
        </section>

        <FeaturesIntegration />
        <Stats />
        <FeaturesList />
        <FAQ />
      </main>

      <Footer />
    </div>
  )
}

