'use client';

import { Button } from '@nextui-org/react';
import { useSidebarContext } from './SidebarContext';
import { createPortal } from 'react-dom';

export default function NotificationBtn() {
  const {
    isNotification,
    setIsNotification,
    setPopperElement,
    attributes,
    styles,
    isDenseSidebar,
    setIsSearch
  } = useSidebarContext();

  return (
    <>
      <Button
        onClick={() => {
          setIsNotification((val) => !val);
          setIsSearch(false);
        }}
        variant="light"
        size="lg"
        className={`flex ${
          isDenseSidebar
            ? 'justify-center'
            : 'xl:justify-start justify-center xl:pl-4 xl:w-[200px] w-max'
        } `}
        startContent={isNotification ? <ActiveIcon /> : <InActiveIcon />}
        isIconOnly
      >
        {!isDenseSidebar && (
          <span className="font-normal  xl:block hidden pl-3">
            Notifications
          </span>
        )}
      </Button>
      {isNotification &&
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
              <div className="absolute -z-10 inset-y-0 left-10 right-0 bg-default blur-lg" />
              <div className="py-2 px-4">
                <h1 className="font-bold text-2xl">Notification</h1>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

const InActiveIcon = () => {
  return (
    <svg
      aria-label="Notification"
      className="x1lliihq x1n2onr6 x5n08af"
      fill="currentColor"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <title>Notification</title>
      <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
    </svg>
  );
};

const ActiveIcon = () => {
  return (
    <svg
      aria-label="Notification"
      className="x1lliihq x1n2onr6 x5n08af"
      fill="currentColor"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <title>Notification</title>
      <path d="M17.075 1.987a5.852 5.852 0 0 0-5.07 2.66l-.008.012-.01-.014a5.878 5.878 0 0 0-5.062-2.658A6.719 6.719 0 0 0 .5 8.952c0 3.514 2.581 5.757 5.077 7.927.302.262.607.527.91.797l1.089.973c2.112 1.89 3.149 2.813 3.642 3.133a1.438 1.438 0 0 0 1.564 0c.472-.306 1.334-1.07 3.755-3.234l.978-.874c.314-.28.631-.555.945-.827 2.478-2.15 5.04-4.372 5.04-7.895a6.719 6.719 0 0 0-6.425-6.965Z"></path>
    </svg>
  );
};
