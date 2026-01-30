"use client";

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-accent">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-foreground/60 text-sm">
          © {new Date().getFullYear()} Dawite Ewnetu. All rights reserved.
        </p>
        <p className="text-foreground/40 text-xs mt-2">
          Built with Next.js, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
