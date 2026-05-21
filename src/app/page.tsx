import Headersection from '@/sections/Headersection';
import Footersection from '@/sections/Footersection';
import History from '@/sections/History';
import OurCommitments from '@/sections/OurCommitments';
import Introsection from '@/sections/Introsection';

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full justify-center">
      <Headersection />
      <Introsection />
      <OurCommitments />
      <History />
      <Footersection />
      <p>Test develop branch</p>
    </div>
  );
}
