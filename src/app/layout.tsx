import type { Metadata } from "next";
import { inter, jetBrainsMono, spaceGrotesk } from "@/lib/font";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Gabriel Braga · Engenheiro de Software",
  description: "",
};

export default ({ children }: LayoutProps<"/">) => {
  return (
    <html
      lang="pt-br"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#080c10] font-sans text-[#e2e8f0]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};
