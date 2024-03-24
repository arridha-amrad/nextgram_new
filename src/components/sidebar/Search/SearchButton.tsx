'use client';

import { Tooltip } from '@nextui-org/react';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useSidebarContext } from '../SidebarContext';

type Props = {
  children: ReactNode;
};

export default function SearchButton({ children }: Props) {
  const {
    isDenseSidebar,
    attributes,
    setPopperElement,
    styles,
    isSearch,
    setIsSearch,
    setIsNotification
  } = useSidebarContext();

  return (
    <>
      <Tooltip
        content="Search"
        placement="right"
        showArrow
        classNames={{ base: isDenseSidebar ? 'xl:block' : 'xl:hidden' }}
      >
        <button
          onClick={() => {
            setIsSearch((val) => !val);
            setIsNotification(false);
          }}
          className={`flex h-12 rounded-lg hover:bg-neutral-200 hover:dark:bg-neutral-600 hover:bg-opacity-50 items-center group ${
            isDenseSidebar
              ? 'justify-center aspect-square'
              : 'xl:justify-start justify-center xl:pl-4 xl:w-[200px] aspect-square'
          } `}
        >
          {isSearch ? <ActiveIcon /> : <InActiveIcon />}
          {!isDenseSidebar && (
            <span className="xl:block pl-3 hidden">Search</span>
          )}
        </button>
      </Tooltip>
      {isSearch &&
        createPortal(
          <div
            {...attributes.popper}
            style={styles.popper}
            ref={setPopperElement}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="h-screen relative rounded-xl rounded-br bg-background w-[350px]"
            >
              <div className="absolute -z-10 inset-y-0 left-20 right-0 bg-default blur-xl" />
              {children}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

const ActiveIcon = () => {
  return (
    <svg
      aria-label="Search"
      className="group-hover:scale-110 transition-transform duration-250 ease-linear"
      fill="currentColor"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <title>Search</title>
      <path
        d="M18.5 10.5a8 8 0 1 1-8-8 8 8 0 0 1 8 8Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      ></path>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        x1="16.511"
        x2="21.643"
        y1="16.511"
        y2="21.643"
      ></line>
    </svg>
  );
};

const InActiveIcon = () => {
  return (
    <svg
      aria-label="Search"
      className="group-hover:scale-110 transition-transform duration-250 ease-linear"
      fill="currentColor"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <title>Search</title>
      <path
        d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="16.511"
        x2="22"
        y1="16.511"
        y2="22"
      ></line>
    </svg>
  );
};
