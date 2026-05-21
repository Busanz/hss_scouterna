import Headersection from '@/sections/Headersection';
import Footersection from '@/sections/Footersection';
import History from '@/sections/History';
import OurCommitments from '@/sections/OurCommitments';
export default function Home() {
  return (
    <div className="flex flex-col">
      <Headersection />
      <History />
      <OurCommitments />
      <Footersection />
      <p>Test develop branch</p>
    </div>
  );
}
