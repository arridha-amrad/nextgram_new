'use client';

import { HomeIcon } from '@heroicons/react/24/outline';
import { HomeIcon as FilledIcon } from '@heroicons/react/24/solid';
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
        className={`flex ${
          isDenseSidebar
            ? 'justify-center'
            : 'xl:justify-start justify-center xl:pl-4 xl:w-[200px] w-max'
        } `}
        startContent={
          isActive && !isDenseSidebar ? (
            <FilledIcon className="w-7 h-7" />
          ) : (
            <HomeIcon className="w-7 h-7" />
          )
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
