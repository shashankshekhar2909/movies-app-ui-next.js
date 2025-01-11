// src/app/layout.tsx
import React from 'react';
import './globals.css';  // Your global styles (if any)
import Header from './header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Search Movies</title>
      </head>
      <body>
        <Header />
        {/* You can include a Navbar or any layout component here */}
        {children}
      </body>
    </html>
  );
}
