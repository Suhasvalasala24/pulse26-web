import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Pulse'26 | Feel The Beat | GRIET",
  description: "The ultimate cultural fest of GRIET. April 4, 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-base text-white antialiased selection:bg-fire selection:text-white">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}