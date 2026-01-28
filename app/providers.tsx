"use client";

import React from 'react';
import { ThemeProvider } from "next-themes";
import Amplify from 'aws-amplify';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}
