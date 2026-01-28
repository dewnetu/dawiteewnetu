import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dawite Ewnetu | Senior Software Engineer",
  description: "Senior Software Engineer specializing in Cloud, AI/ML, and Full Stack development. Building scalable cloud systems and intelligent applications.",
  keywords: ["Software Engineer", "Cloud", "AI/ML", "Full Stack", "AWS", "Kubernetes", "Python", "Java"],
  authors: [{ name: "Dawite Ewnetu" }],
  openGraph: {
    title: "Dawite Ewnetu | Senior Software Engineer",
    description: "Senior Software Engineer specializing in Cloud, AI/ML, and Full Stack development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
