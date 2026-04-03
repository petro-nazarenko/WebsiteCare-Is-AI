
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-gradient-to-br from-zinc-50 to-blue-50 dark:from-zinc-900 dark:to-blue-950 font-sans">
      <main className="flex flex-col items-center text-center gap-12 px-6 py-24 max-w-4xl">
        {/* Hero */}
        <div className="flex flex-col items-center gap-4">
          <span className="rounded-full bg-blue-100 dark:bg-blue-900 px-4 py-1 text-sm font-medium text-blue-700 dark:text-blue-300">
            AI-Powered Platform
          </span>
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
            Website<span className="text-blue-600 dark:text-blue-400">Care</span>
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            AI-driven website maintenance and optimization services — keeping
            your site accurate, functional, and user-friendly around the clock.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 w-full">
          {[
            {
              icon: "🤖",
              title: "AI Monitoring",
              description:
                "Continuously scans your website for errors, broken links, and performance issues.",
            },
            {
              icon: "⚡",
              title: "Auto-Optimization",
              description:
                "Automatically suggests and applies improvements to speed, SEO, and accessibility.",
            },
            {
              icon: "🛡️",
              title: "Security Checks",
              description:
                "Proactively detects vulnerabilities and keeps your site safe and up to date.",
            },
          ].map(({ icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 text-left shadow-sm"
            >
              <div className="text-3xl mb-3">{icon}</div>
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
                {title}
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 text-sm font-semibold text-white shadow hover:bg-blue-500 transition-colors"
          >
            Get Started
          </a>
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 px-8 text-sm font-semibold text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Learn More
          </a>
        </div>
      </main>
    </div>
  );
}
