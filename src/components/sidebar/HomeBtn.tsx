'use client';

import { Button, Tooltip } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSidebarContext } from './SidebarContext';

export default function HomeBtn() {
  const pathname = usePathname();
  const isActive = pathname === '/';
  const { isDenseSidebar } = useSidebarContext();

  return (
    <Tooltip
      showArrow={true}
      placement="right"
      classNames={{ base: 'xl:hidden' }}
      content="Home"
    >
      <Button
        variant="light"
        size="lg"
        as={Link}
        href="/"
        className={`flex group ${
          isDenseSidebar
            ? 'justify-center'
            : 'xl:justify-start justify-center xl:pl-4 xl:w-[200px] w-max'
        } `}
        startContent={
          isActive && !isDenseSidebar ? <ActiveIcon /> : <InActiveIcon />
        }
        isIconOnly
      >
        {!isDenseSidebar && (
          <span
            className={`${
              isActive ? 'font-bold' : 'font-normal'
            } xl:block hidden pl-3`}
          >
            Home
          </span>
        )}
      </Button>
    </Tooltip>
  );
}

const InActiveIcon = () => {
  return (
    <svg
      aria-label="Home"
      className="group-hover:scale-110 transition-transform duration-250 ease-linear"
      fill="currentColor"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <title>Home</title>
      <path
        d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
    </svg>
  );
};

const ActiveIcon = () => {
  return (
    <svg
      aria-label="Home"
      className="group-hover:scale-110 transition-transform duration-250 ease-linear"
      fill="currentColor"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <title>Home</title>
      <path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"></path>
    </svg>
  );
};
