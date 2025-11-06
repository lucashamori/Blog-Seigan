import type { Metadata } from "next";
import { Geist, Geist_Mono, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import  Provider  from "../utils/Provider";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fira-code",
});



export const metadata: Metadata = {
  title: "Seigan",
  description: "Nam Myoho Renge Kyo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${firaCode.variable} ${firaCode.variable} h-full bg-neutral-100 text-neutral-950 dark:bg-neutral-800 dark:text-neutral-50 dark:selection:bg-purple-500`}>
        <Provider>
          <Navbar/>
            <main className="mx-auto max-w-5xl px-6">
              {children}
            </main>
        </Provider>
      </body>
    </html>
  );
}
