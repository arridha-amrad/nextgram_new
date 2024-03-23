'use client';

import HomeModernIcon from '@heroicons/react/24/outline/HomeIcon';
import HomeModernFilled from '@heroicons/react/24/solid/HomeIcon';
import SearchIcon from '@heroicons/react/24/outline/MagnifyingGlassIcon';
import SearchFilled from '@heroicons/react/24/solid/MagnifyingGlassCircleIcon';
import ExploreIcon from '@heroicons/react/24/outline/RocketLaunchIcon';
import ExploreIconFilled from '@heroicons/react/24/solid/RocketLaunchIcon';
import PlayCircleIcon from '@heroicons/react/24/outline/PlayCircleIcon';
import PlayCircleIconFilled from '@heroicons/react/24/solid/PlayCircleIcon';
import MessageIcon from '@heroicons/react/24/outline/ChatBubbleLeftRightIcon';
import MessageIconFilled from '@heroicons/react/24/solid/ChatBubbleLeftRightIcon';
import NotificationIcon from '@heroicons/react/24/outline/BellIcon';
import NotificationIconFilled from '@heroicons/react/24/solid/BellIcon';
import PlusIcon from '@heroicons/react/24/outline/PlusCircleIcon';
import PlusIconFilled from '@heroicons/react/24/solid/PlusCircleIcon';

import { usePathname } from 'next/navigation';
import { Button, Tooltip } from '@nextui-org/react';
import SearchButton from '../button/SearchBtn';
import Link from 'next/link';

const links = [
  {
    name: 'Home',
    link: '/',
    icon: <HomeModernIcon className="w-7 h-7" />,
    filledIcon: <HomeModernFilled className="w-7 h-7" />
  },
  {
    name: 'Search',
    link: '/search',
    icon: <SearchIcon className="w-7 h-7" />,
    filledIcon: <SearchFilled className="w-7 h-7" />
  },
  {
    name: 'Explore',
    link: '/explore',
    icon: <ExploreIcon className="w-7 h-7" />,
    filledIcon: <ExploreIconFilled className="w-7 h-7" />
  },
  {
    name: 'Reels',
    link: '/reels',
    icon: <PlayCircleIcon className="w-7 h-7" />,
    filledIcon: <PlayCircleIconFilled className="w-7 h-7" />
  },
  {
    name: 'Messages',
    link: '/messages',
    icon: <MessageIcon className="w-7 h-7" />,
    filledIcon: <MessageIconFilled className="w-7 h-7" />
  },
  {
    name: 'Notifications',
    link: '/notifications',
    icon: <NotificationIcon className="w-7 h-7" />,
    filledIcon: <NotificationIconFilled className="w-7 h-7" />
  },
  {
    name: 'Create New Post',
    link: '/create',
    icon: <PlusIcon className="w-7 h-7" />,
    filledIcon: <PlusIconFilled className="w-7 h-7" />
  }
];

export default function SidebarLinks() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-full">
      {links.map(({ icon, link, name, filledIcon }) =>
        name === 'Search' ? (
          <SearchButton key={name} />
        ) : (
          <Tooltip
            className="xl:opacity-0 opacity-100"
            content={name}
            key={name}
          >
            <Button
              as={Link}
              href={link}
              isIconOnly
              radius="full"
              variant="light"
              className="text-lg xl:self-start xl:w-max w-12 self-center xl:h-12 h-12 flex items-center xl:gap-5 xl:px-4"
            >
              {link === pathname ? filledIcon : icon}
              <span
                className={`xl:block pl-4 hidden ${
                  link === pathname ? 'font-bold' : 'font-normal'
                }`}
              >
                {name}
              </span>
            </Button>
          </Tooltip>
        )
      )}
    </div>
  );
}
