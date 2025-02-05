export function FeaturesList() {
  const features = [
    {
      title: "Responsive Design",
      description: "Create stunning websites that adapt seamlessly to different screen sizes and devices."
    },
    {
      title: "Extensive Component Library",
      description: "Choose from a vast collection of pre-built components to accelerate your application development."
    },
    {
      title: "Customizable Styles",
      description: "Easily customize the look and feel of your application with our flexible styling options."
    },
    {
      title: "Accessibility Ready",
      description: "Ensure your application is accessible to all users, regardless of their abilities or devices."
    },
    {
      title: "Cross-Browser Compatibility",
      description: "Rest assured that your application will work flawlessly across all major browsers."
    },
    {
      title: "Optimized Performance",
      description: "Deliver fast-loading and smooth user experiences with our performance-optimized codebase."
    },
    {
      title: "Regular Updates",
      description: "Stay up-to-date with the latest features and security patches through our regular updates."
    },
    {
      title: "Thriving Community",
      description: "Join our active community of developers to share knowledge and get support."
    },
    {
      title: "Excellent Support",
      description: "Get help when you need it with our responsive support team and comprehensive documentation."
    }
  ]

  return (
    <section className="mx-auto max-w-[1440px] py-24 sm:py-32 px-4">
      <h2 className="text-center text-2xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
        12+
        <br />
        <span className="relative">
          Starter Pages & Examples
          <svg
            style={{ fill: 'hsl(var(--primary))' }}
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-[90%] h-[0.58em] w-full opacity-70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
        </span>
      </h2>
      <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
        Kick start your project with our fully-built range of examples, using pre-built parts.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {features.map((feature) => (
          <div key={feature.title} className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
} 