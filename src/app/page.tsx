import Headersection from '@/sections/Headersection';
import Footersection from '@/sections/Footersection';
import History from '@/sections/History';
export default function Home() {
  return (
    <div className="flex flex-col">
      <Headersection />
      <History />
      <Footersection />
      <p>Test develop branch</p>
    </div>
  );
}
