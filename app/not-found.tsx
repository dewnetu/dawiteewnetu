import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-foreground mb-2">Page not found</h1>
      <p className="text-foreground/60 mb-8">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-accent border border-accent text-foreground font-semibold rounded-lg hover:border-accent-hover transition-[border-color] duration-200"
      >
        Back to home
      </Link>
    </div>
  );
}
