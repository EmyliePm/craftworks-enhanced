import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Craftworkz | Property Maintenance & Improvements",
  description:
    "Professional property maintenance, repairs and improvements from Craftworkz.",
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
