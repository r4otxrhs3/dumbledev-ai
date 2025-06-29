import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/app/components/theme-provider"
import Header from "./components/Header";
import React from "react";
import { ConvexClientProvider } from "./components/ConvexClientProvider";

export const metadata: Metadata = {
  title: "DumbleDev AI",
  description: "Create Fullstack apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="dumbledev/public/dumbledev.jpg" type="image/jpg" />
      </head>
      <body >
      <ConvexClientProvider>

        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange >
              <Header/>
            {children}
          </ThemeProvider>
      </ConvexClientProvider>
      </body>
    </html>
  );
}
