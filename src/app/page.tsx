import Headersection from '@/sections/Headersection';
import Footersection from '@/sections/Footersection';
import History from '@/sections/History';
import Introsection from '@/sections/Introsection';
import OurCommitments from '@/sections/OurCommitments';
export default function Home() {
  return (
    <div className="flex flex-col w-full h-full justify-center">
      <Headersection />
      <Introsection />
      <History />
      <OurCommitments />
      <Footersection />
    </div>
  );
}
