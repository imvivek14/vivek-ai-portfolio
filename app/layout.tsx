import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Vivek Surati — AI / Generative AI Engineer",
  description: "Portfolio of Vivek Ashwinkumar Surati — AI, Generative AI and Machine Learning Engineer building RAG systems, multi-agent workflows and data-driven applications.",
  openGraph: { title: "Vivek Surati — AI / Generative AI Engineer", description: "Building intelligent systems, from retrieval pipelines to multi-agent applications.", type: "website" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
