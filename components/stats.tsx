import { LineChartComponent } from "./ui/line-chart"

export function Stats() {
  return (
    <section className="mx-auto max-w-[1440px] py-24 sm:py-32 px-4">
      <h2 className="text-center text-2xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
        <div className="text-6xl">700+</div>
        Tailwind CSS <span className="text-primary">Components</span>
      </h2>
      <div className="opacity-70 max-w-2xl mx-auto mt-2 text-gray-500 dark:text-neutral-400">
        Based on the Tailwind CSS utility classes, Preline UI&apos;s prebuilt components and UI elements help you quickly design and customize responsive mobile-first websites.
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="tracking-tight text-base font-normal">Total Revenue</h3>
          <div className="text-2xl font-bold">$15,231.89</div>
          <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          <div className="h-[80px]">
            <LineChartComponent />
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="tracking-tight text-base font-normal">Subscriptions</h3>
          <div className="text-2xl font-bold">+2350</div>
          <p className="text-xs text-muted-foreground">+180.1% from last month</p>
        </div>
      </div>
    </section>
  )
} 