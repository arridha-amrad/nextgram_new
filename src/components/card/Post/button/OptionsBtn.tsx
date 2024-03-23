'use client';

import {
  Listbox,
  ListboxItem,
  ListboxSection,
  Modal,
  ModalContent,
  useDisclosure
} from '@nextui-org/react';

const OptionsButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const menu = [
    { key: 'report', callback: () => {}, name: 'Report' },
    { key: 'unfollow', callback: () => {}, name: 'Unfollow' },
    { key: 'addToFavorites', callback: () => {}, name: 'Add to favorites' },
    { key: 'goToPost', callback: () => {}, name: 'Go to post' },
    { key: 'shareTo', name: 'Share to...', callback: () => {} },
    { key: 'copyLink', name: 'Copy Link', callback: () => {} },
    { key: 'embed', name: 'Embed', callback: () => {} },
    { key: 'aboutThisAccount', name: 'About this account', callback: () => {} },
    { key: 'cancel', name: 'Cancel', callback: () => {} }
  ];

  return (
    <>
      <button title="Other options" className="group" onClick={onOpen}>
        <svg
          aria-label="Other options"
          className="group-hover:text-gray-500"
          fill="currentColor"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <title>Other options</title>
          <circle cx="12" cy="12" r="1.5"></circle>
          <circle cx="6" cy="12" r="1.5"></circle>
          <circle cx="18" cy="12" r="1.5"></circle>
        </svg>
      </button>

      <Modal
        backdrop="blur"
        size="xs"
        isOpen={isOpen}
        hideCloseButton
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <Listbox
                variant="light"
                className="text-center"
                aria-label="Actions"
                onAction={(key) => {
                  if (key !== 'cancel') {
                    alert(key);
                  }
                  onClose();
                }}
              >
                {menu.map(({ key, name }, i) => (
                  <ListboxSection key={key} showDivider={i + 1 !== menu.length}>
                    <ListboxItem
                      key={key}
                      className={`${i === 0 || i === 1 ? 'text-red-500' : ''}`}
                    >
                      {name}
                    </ListboxItem>
                  </ListboxSection>
                ))}
              </Listbox>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default OptionsButton;
