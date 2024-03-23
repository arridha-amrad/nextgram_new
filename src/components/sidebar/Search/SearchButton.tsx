'use client';

import { Button } from '@nextui-org/react';
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
      <Button
        onClick={() => {
          setIsSearch((val) => !val);
          setIsNotification(false);
        }}
        variant="light"
        size="lg"
        className={`flex ${
          isDenseSidebar
            ? 'justify-center'
            : 'xl:justify-start justify-center xl:pl-4 xl:w-[200px] w-max'
        } `}
        startContent={isSearch ? <ActiveIcon /> : <InActiveIcon />}
        isIconOnly={true}
      >
        {!isDenseSidebar && (
          <span className="xl:block pl-3 hidden">Search</span>
        )}
      </Button>
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
      className="x1lliihq x1n2onr6 x5n08af"
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
      className="x1lliihq x1n2onr6 x5n08af"
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
