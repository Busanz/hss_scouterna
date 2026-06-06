import Lager from '@/components/Lager';

const LagerSection = () => {
  return (
    <section className="flex flex-col w-full h-full items-center">
      <div className="flex flex-col w-full max-w-360 rounded-sm">
        <Lager />
      </div>
    </section>
  );
};

export default LagerSection;
