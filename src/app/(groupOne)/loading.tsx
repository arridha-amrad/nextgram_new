import { Spinner } from '@nextui-org/react';

export default function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Spinner />
    </div>
  );
}
