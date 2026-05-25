import Story from '@/components/Story';
import OldBoats from '@/components/OldBoats';
import OmHSSsection from './OmHSSsection';

const History = () => {
  return (
    <section className="flex flex-col w-full h-full items-center">
      <div className="flex flex-col w-full max-w-360 pt-20">
        <OmHSSsection />
        <h1 className="text-center text-3xl mt-8 text-text-secondary">
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
