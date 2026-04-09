import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 py-32 text-center">
      <h1 className="text-6xl font-bold tracking-tight text-black dark:text-white">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-300">
        Page not found
      </h2>
      <p className="max-w-md text-zinc-500 dark:text-zinc-400">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
      >
        Go home
      </Link>
    </div>
  );
}
