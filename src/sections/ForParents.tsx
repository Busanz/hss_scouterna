'use client';

import Family from '@/components/Family';
import Safety from '@/components/Safety';
import TryggaMoten from '@/components/TryggaMoten';

const ForParents = () => {
  return (
    <main className="flex flex-col w-full h-full max-w-360 rounded-sm items-center">
      <TryggaMoten />
      <Family />
      <Safety />
    </main>
  );
};

export default ForParents;
