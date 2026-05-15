import Headersection from '@/sections/Headersection';
import Footersection from '@/sections/Footersection';
export default function Home() {
  return (
    <div className="flex flex-col bg-blue-400">
      <Headersection />
      <Footersection />
      <p>Test develop branch</p>
    </div>
  );
}
