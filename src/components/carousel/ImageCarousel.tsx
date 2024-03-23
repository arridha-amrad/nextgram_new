'use client';

import ChevronRightIcon from '@heroicons/react/24/solid/ChevronRightIcon';
import { useState } from 'react';
import Image from 'next/image';
import ChevronLeftIcon from '@heroicons/react/24/solid/ChevronLeftIcon';
import { twMerge } from 'tailwind-merge';

type Props = {
  urls: string[];
};

const className = {
  button:
    'absolute w-7 h-7 flex items-center justify-center rounded-full bg-neutral-300 top-1/2 -translate-y-1/2',
  icon: 'w-1/2 h-auto stroke-[3px] stroke-neutral-700'
};

export default function ImageCarousel({ urls }: Props) {
  const total = urls.length;
  const [previewIndex, setPreviewIndex] = useState(0);

  const nextPreview = () => {
    setPreviewIndex((val) => {
      if (val === total - 1) {
        return 0;
      }
      return (val += 1);
    });
  };

  const prevPreview = () => {
    setPreviewIndex((val) => {
      if (val === 0) {
        return total - 1;
      }
      return (val -= 1);
    });
  };

  return (
    <div className="relative group overflow-y-hidden w-full h-full rounded">
      {total > 1 && previewIndex !== 0 && (
        <button
          title="Previous"
          onClick={prevPreview}
          className={twMerge(className.button, 'left-3')}
        >
          <ChevronLeftIcon className={twMerge(className.icon)} />
        </button>
      )}
      <Image
        alt="preview"
        src={urls[previewIndex]}
        height={500}
        width={500}
        priority
        className="object-cover overflow-hidden h-full w-full"
      />
      {total > 1 && previewIndex !== total - 1 && (
        <button
          title="Next"
          onClick={nextPreview}
          className={twMerge(className.button, 'right-3')}
        >
          <ChevronRightIcon className={twMerge(className.icon)} />
        </button>
      )}
      {total > 1 && (
        <div
          className={`absolute flex rounded-full gap-1 items-center bottom-3 left-1/2 -translate-x-1/2`}
        >
          {Array(total)
            .fill('')
            .map((_, i) => (
              <div
                key={i}
                onClick={() => setPreviewIndex(i)}
                className={`w-2 h-2 shadow rounded-full cursor-pointer ${
                  i === previewIndex ? 'bg-blue-500' : 'bg-slate-300'
                }`}
              />
            ))}
        </div>
      )}
    </div>
  );
}
