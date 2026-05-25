import { introLinks } from '@/data/data';
import Image from 'next/image';
import LinkedCard from '@/components/ui/LinkedCard';

const Introsection = () => {
  return (
    <section className="flex flex-col w-full h-full items-center justify-center my-5 md:my-10">
      <div className="relative grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 w-full max-w-360 bg-bg-light text-text-primary px-4 md:px-6 lg:px-10 py-10 lg:py-20 rounded-sm place-items-center gap-2 md:gap-6 lg:gap-0">
        {introLinks.slice(0, 3).map((item, index) => (
          <LinkedCard
            key={index}
            href={item.href}
            label={item.label}
            url={item.url}
          />
        ))}

        <div className="col-span-3 relative w-full sm:w-64 md:w-96 lg:w-105 h-28 mx-auto bg-primary px-10 hidden lg:block">
          <Image
            src="/img/header-section/hss_logo_vit.png"
            alt="Souterna logga"
            width={480}
            height={140}
            className="w-auto h-full object-contain"
          />
        </div>

        {introLinks.slice(3, 6).map((item, index) => (
          <LinkedCard
            key={index}
            href={item.href}
            label={item.label}
            url={item.url}
          />
        ))}
      </div>
    </section>
  );
};

export default Introsection;
