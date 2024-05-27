import type { Metadata } from "next";
import "./css/reset.css";
import "./css/globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { GlobalProvider } from "./context/GlobalContext";

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
    <html className="html" lang="en">
      <head>
        {/* FONTAWESOME */}
        <script defer src="https://kit.fontawesome.com/41c8b474e2.js" crossOrigin="anonymous"></script>
      </head>
      <body className="body-wrapper">
          <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
