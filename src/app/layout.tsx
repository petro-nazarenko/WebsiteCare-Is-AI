import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebsiteCare | AI-Powered Website Maintenance",
  description:
    "WebsiteCare is a platform that utilizes AI-driven technology to provide website maintenance and optimization services, ensuring accuracy, functionality, and user-friendliness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
