import Headersection from '@/sections/Headersection';
import Footersection from '@/sections/Footersection';
import History from '@/sections/History';
export default function Home() {
return (
    <div className="flex flex-col w-full h-full justify-center">
      <Headersection />
      <Introsection />
      <OurCommitments />
      <Footersection />
    </div>
  );
}
