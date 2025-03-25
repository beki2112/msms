import { Inter } from 'next/font/google';
import './globals.css';
    import { Toaster } from 'sonner'; // Import Toaster

    const inter = Inter({ subsets: ['latin'] });

    export const metadata = {
      title: 'Student Management System',
      description: 'A system to manage students.',
    };

    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return (
        <html lang="en">
          <body className={inter.className}>
            {children}
            <Toaster richColors /> {/* Add Toaster here, usually outside of main */}
          </body>
        </html>
      );
    }
