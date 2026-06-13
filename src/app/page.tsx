import Headersection from '@/sections/Headersection';
import Introsection from '@/sections/Introsection';
import Footersection from '@/sections/Footersection';
import InstagramSection from '@/sections/instagram/InstagramSection.server';

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center px-1 sm:px-2 md:px-4 lg:px-6">
      <Headersection />
      <Introsection />
      <InstagramSection />
      <Footersection />
      <p>Testing staging branch</p>
    </div>
  );
}
