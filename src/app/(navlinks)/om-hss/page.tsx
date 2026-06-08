import OurCommitments from '@/sections/OurCommitments';
import History from '@/sections/History';

const OmHSSPage = () => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center my-5 md:my-10">
      <OurCommitments />
      <History />
    </div>
  );
};

export default OmHSSPage;
