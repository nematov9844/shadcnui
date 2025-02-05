import Link from 'next/link'
import { GitHubIcon } from './icons/github'
import { TwitterIcon } from './icons/twitter'
import { ThemeIcon } from './icons/theme'
import { LogoIcon } from './icons/logo'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <LogoIcon />
            <span className="hidden font-bold sm:inline-block">Shadcn UI Pro</span>
          </Link>
          <nav className="flex items-center gap-4 text-sm lg:gap-6">
            <a target="__blank" className="transition-colors hover:text-foreground/80 text-foreground/60" href="https://shadcn.net/en/">Docs</a>
            <a target="__blank" className="transition-colors hover:text-foreground/80 text-foreground/60" href="https://shadcn.net/en/docs/components">Components</a>
            <a target="__blank" className="transition-colors hover:text-foreground/80 text-foreground/60" href="https://shadcn.net/en/themes">Themes</a>
            <a target="__blank" className="transition-colors hover:text-foreground/80 text-foreground/60" href="https://shadcn.net/en/examples">Examples</a>
            <a target="__blank" className="transition-colors hover:text-foreground/80 text-foreground/60" href="https://shadcn.net/en/blocks">Blocks</a>
            <a target="__blank" className="hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block" href="https://github.com/shadcn-ui/ui">GitHub</a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <a target="_blank" rel="noreferrer" href="https://github.com/shadcn-ui/ui">
              <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 py-2 w-9 px-0">
                <GitHubIcon />
                <span className="sr-only">GitHub</span>
              </div>
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/QuXiaoMing">
              <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 py-2 w-9 px-0">
                <TwitterIcon />
                <span className="sr-only">Twitter</span>
              </div>
            </a>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 py-2 w-9 px-0">
              <ThemeIcon />
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
} 