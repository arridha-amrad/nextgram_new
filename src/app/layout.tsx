import BottomBar from '@/components/bottom-bar/BottomBar';
import Sidebar from '@/components/sidebar';
import AuthProvider from '@/providers/AuthProvider';
import UiProvider from '@/providers/UiProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';
import { getServerSession } from 'next-auth/next';
import dbConnect from '@/lib/mongoose/init';
import { ReactNode } from 'react';
import getCurrentSession from '@/utils/getCurrentSession';

export const metadata: Metadata = {
  title: 'Nextgram',
  description: 'Instagram Future'
};

const inter = Inter({
  subsets: ['latin']
});

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  await dbConnect();

  const session = await getCurrentSession();

  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${inter.className} w-full container mx-auto`}>
        <AuthProvider>
          <NextTopLoader showSpinner={false} color="#0095F6" />
          <UiProvider>
            {session ? (
              <div className="flex w-full">
                <BottomBar />
                <div className="sticky h-screen inset-y-0 left-0">
                  <Sidebar />
                </div>
                <div className="">{children}</div>
              </div>
            ) : (
              children
            )}
          </UiProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
