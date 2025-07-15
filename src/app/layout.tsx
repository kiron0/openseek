import { Config } from "@/config";
import { cn } from "@/lib/utils";
import Providers from "@/providers";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    template: `%s | ${Config.title} - ${Config.slogan}`,
    absolute: `${Config.title} - ${Config.slogan}`,
  },
  description: Config.description,
  keywords: Config.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased", jetBrainsMono.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
