
import History from '@/sections/History';
import Introsection from '@/sections/Introsection';
import OurCommitments from '@/sections/OurCommitments';
export default function Home() {
  return (
    <div className="flex flex-col w-full h-full justify-center">
      <Introsection />
      <History />
      <OurCommitments />
    </div>
  );
}
