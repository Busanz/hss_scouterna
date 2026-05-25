import Story from '@/components/Story';
import OldBoats from '@/components/OldBoats';
import OmHSSsection from './OmHSSsection';

const History = () => {
  return (
    <section className="flex flex-col w-full h-full items-center">
      <div className="flex flex-col w-full max-w-360 pt-5 md:pt-10">
        <OmHSSsection />
        <h1 className="text-center text-text-secondary text-2xl sm:text-3xl lg:text-4xl  pt-10 md:pt-20">
          Historia
        </h1>
        <hr className="my-8 border-primary" />

        <Story />
        <OldBoats />
      </div>
    </section>
  );
};

export default History;
