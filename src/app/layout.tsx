import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Valentines: A Romantic Card Game with a Surprise Proposal",
  description:
    "Play a unique Valentine's card game. Complete the collection to reveal a romantic proposal!",
  keywords: [
    "Valentine's card game",
    "romantic proposal game",
    "photo card challenge",
    "Valentine's Day surprise",
    "couples game",
    "valentine's day game",
    "proposal game",
  ],
};

const isProd = process.env.NODE_ENV === "production";
const baseUrl = "https://johnandrex1.github.io/drex-kar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {isProd && <base href={`${baseUrl}/`} />}
      </head>
      <body>{children}</body>
    </html>
  );
}
