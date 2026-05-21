import Headersection from '@/sections/Headersection';
import Footersection from '@/sections/Footersection';
import OurCommitments from '@/sections/OurCommitments';
export default function Home() {
  return (
    <div className="flex flex-col">
      <Headersection />
      <OurCommitments />
      <Footersection />
    </div>
  );
}
