import BoatsSection from '@/sections/BoatsSection';

const BoatsPage = () => {
  return (
    <section className="flex flex-col w-full h-full items-center">
      <div className="flex flex-col w-full max-w-360 rounded-sm">
        <BoatsSection />
      </div>
    </section>
  );
};

export default BoatsPage;
