import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hello World',
  description: 'A minimal Next.js app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}