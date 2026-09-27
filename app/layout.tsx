import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aabhesh Singh Shekhawat — Software Developer',
  description: 'Portfolio of Aabhesh Singh Shekhawat, a Software Developer focused on software and full-stack web development.',
  keywords: ['Aabhesh Singh Shekhawat', 'Software Developer', 'Full-Stack Developer', 'React', 'Next.js', 'Python', 'FastAPI'],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
