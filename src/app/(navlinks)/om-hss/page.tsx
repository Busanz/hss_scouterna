import OurCommitments from '@/sections/OurCommitments';
import History from '@/sections/History';

const OmHSSPage = () => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center px-1 sm:px-2 md:px-4 lg:px-6">
      <History />
      <OurCommitments />
    </div>
  );
};

export default OmHSSPage;
