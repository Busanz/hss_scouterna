import Headersection from '@/sections/Headersection';
import Footersection from '@/sections/Footersection';
import Introsection from '@/sections/Introsection';

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center px-1 sm:px-2 md:px-4 lg:px-6">
      <Headersection />
      <Introsection />
      <Footersection />
    </div>
  );
}
