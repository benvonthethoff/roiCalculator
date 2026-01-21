import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ROI Calculator",
  description: "Calculate your return on investment for employee assistance programs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
