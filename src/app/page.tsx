import Headersection from '@/sections/Headersection';
import Footersection from '@/sections/Footersection';
import Introsection from '@/sections/Introsection';
export default function Home() {
  return (
    <div className="flex flex-col w-full h-full justify-center">
      <Headersection />
      <Introsection />
      <Footersection />
    </div>
  );
}
