import type { Metadata } from "next";
import { Montserrat, Merriweather } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kanpai Sushi",
  description: "A autêntica experiência do Japão na sua mesa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${merriweather.variable} antialiased bg-kanpai-charcoal text-kanpai-parchment selection:bg-kanpai-crimson selection:text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
