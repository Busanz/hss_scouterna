import LinkedCard from '@/components/ui/LinkedCard';
import { omHSSLinks } from '@/data/data';

const OmHSSsection = () => {
  return (
    <section className="flex flex-col w-full h-fit items-center justify-center my-10">
      <div className="flex flex-col items-center w-full h-full rounded-sm text-text-primary bg-primary">
        <h1>Hässelby Strands Sjöscoutkår (HSS)</h1>
        <div className="grid grid-cols-3 w-full max-w-360 text-text-primary px-4 md:px-6 lg:px-10 py-10 place-items-center">
          {omHSSLinks.map((item, index) => (
            <LinkedCard
              key={index}
              href={item.href}
              label={item.label}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OmHSSsection;
