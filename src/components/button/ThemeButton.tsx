'use client';

import { switchTheme } from '@/utils/switch-theme';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { Button, Tooltip } from '@nextui-org/react';
import { useTheme } from 'next-themes';

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <Tooltip
      color="default"
      placement="bottom"
      content="Change Theme"
      showArrow
      delay={1000}
    >
      <Button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        isIconOnly
        variant="light"
        startContent={
          <>
            <MoonIcon className="w-6 h-6 dark:hidden block stroke-neutral-500" />
            <SunIcon className="w-6 h-6 dark:block hidden stroke-neutral-500" />
          </>
        }
      />
    </Tooltip>
  );
}
