// app/layout.tsx
import React from 'react';

import { suit } from './fonts';
import './globals.css';

export const metadata = {
  title: "Korean Story Studio ✏️",
  description: "Generate TTMIK-style Korean short stories with AI.",
  icons: {
    icon: "/favicon.ico"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={suit.className}>
        {children}
      </body>
    </html>
  );
}
