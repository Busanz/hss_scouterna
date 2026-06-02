import Story from '@/components/Story';
import OldBoats from '@/components/OldBoats';
import OmHSSsection from './OmHSSsection';

const History = () => {
  return (
    <section className="flex flex-col w-full h-full items-center">
      <div className="flex flex-col w-full max-w-360">
        <OmHSSsection />
        <div className="pb-5 md:pb-10">
          <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl  text-text-secondary py-5 md:py-10">
            Historia
          </h1>
          <hr className="mb-5 md:mb-10 border-primary" />
          <Story />
        </div>

        <OldBoats />
      </div>
    </section>
  );
};

export default History;
