import type { Metadata } from "next";
import "./globals.css";

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Pokemon",
  description: "Pokemon app created using NextJs",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
