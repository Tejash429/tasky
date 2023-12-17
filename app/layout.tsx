import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tasky',
  description:
    'Effortless Task Management: Keeping Tabs on Your Productivity Journey!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' data-theme='night'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
