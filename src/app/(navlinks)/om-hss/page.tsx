import OurCommitments from "@/sections/OurCommitments";
import History from "@/sections/History";

const OmHSSPage = () => {

  return (
    <main className="flex flex-col max-w-360 w-full h-full justify-center items-center my-5 md:my-10">
      <OurCommitments />
      <History />
    </main>
  );
};

export default OmHSSPage;