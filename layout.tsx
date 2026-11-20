import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'African Renaissance 2027 | AU6RG',
  description: 'A gathering of Africa and its global diaspora for unity, identity, partnership and shared advancement.',
  openGraph: { title: 'African Renaissance 2027 | AU6RG', description: 'One people. Shared heritage. A future of collective advancement.' }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
