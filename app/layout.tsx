import type { Metadata } from "next";
import "./css/globals.css";

export const metadata: Metadata = {
  title: "Silicon",
  description: "Inlämningsuppgift - ECU - WIN23 - JavaScript Backend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* RESET STYLESHEET */}
        <link rel="stylesheet" href="~/css/reset.css" asp-append-version="true" />

        {/* FONTAWESOME */}
        <script defer src="https://kit.fontawesome.com/41c8b474e2.js" crossOrigin="anonymous"></script>
      </head>
      <header className="header"></header>
      <body className="">{children}</body>
      <footer className="footer"></footer>
    </html>
  );
}
