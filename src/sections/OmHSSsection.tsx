import LinkedCard from '@/components/ui/LinkedCard';
import { omHSSLinks } from '@/data/data';

const OmHSSsection = () => {
  return (
    <div className="flex flex-col w-full h-fit items-center justify-center">
      <div className="flex flex-col items-center w-full h-full rounded-sm text-text-primary bg-bg-light">
        <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl mt-8 text-text-secondary py-5 md:py-10">
          Hässelby Strands Sjöscoutkår (HSS)
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 w-full max-w-360 text-text-primary place-items-center pb-14 gap-2 md:gap-4 lg:gap-10 px-4">
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
    </div>
  );
};

export default OmHSSsection;
