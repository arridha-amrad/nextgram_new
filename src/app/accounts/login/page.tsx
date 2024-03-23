import FacebookButton from '@/components/button/FacebookButton';
import NavbarAuth from '@/components/button/ThemeButton';
import LoginForm from '@/components/form/LoginForm';
import getServerSideSession from '@/utils/getServerSideSession';
import { Divider, Spacer } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await getServerSideSession();
  if (session) {
    redirect('/');
  }
  return (
    <div className="min-h-screen flex items-center justify-center py-8 px-4">
      <div className="fixed bottom-5 right-5">
        <NavbarAuth />
      </div>
      <div className="w-full flex">
        <div className="flex-1">
          <div className="max-w-sm mx-auto">
            <div className="border border-skin-base rounded-lg px-4">
              <Spacer y={9} />
              <h1 className="text-5xl text-center font-display">nextgram</h1>
              <Spacer y={9} />
              <LoginForm />
              <div className="my-6 relative">
                <Divider />
                <p className="absolute bg-background px-4 py-1 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-bold text-skin-accent">
                  OR
                </p>
              </div>
              <FacebookButton type="light" />
              <Spacer y={2} />
              <div className="w-full text-center">
                <Link
                  href="/accounts/password/reset"
                  className="text-small text-blue-500 hover:underline"
                >
                  forgot password?
                </Link>
              </div>
              <Spacer y={4} />
            </div>
            <Spacer y={4} />
            <div className="max-w-sm border border-skin-base rounded-lg py-6">
              <p className="text-center text-small">
                Don&apos;t have an account?{' '}
                <Link
                  className="font-bold text-primary"
                  href="/accounts/emailsignup"
                >
                  Create
                </Link>
              </p>
            </div>
            <Spacer y={4} />
            <div className="max-w-sm">
              <p className="text-center">Get the app</p>
              <Spacer y={4} />
              <div className="flex items-center gap-4 justify-center">
                <Image
                  src="https://static.cdninstagram.com/rsrc.php/v3/y1/r/mgodbVDc7bL.png"
                  alt="App Store"
                  width={136}
                  height={40}
                />
                <Image
                  src="https://static.cdninstagram.com/rsrc.php/v3/yT/r/wA97xtdkY1T.png"
                  alt="App Store"
                  width={136}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
