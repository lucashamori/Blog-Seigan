"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  return (
    <ThemeProvider
      attribute="class"       // adiciona .dark ou .light no <html>
      defaultTheme="system"   // usa o tema do sistema por padrão
      enableSystem            // sincroniza com preferências do sistema
    >
      {children}
    </ThemeProvider>
  );
};

export default Provider;
