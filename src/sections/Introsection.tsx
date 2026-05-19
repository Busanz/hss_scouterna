import { introLinks } from '@/data/data';
import Image from 'next/image';
import LinkedCard from '@/components/ui/LinkedCard';

const Introsection = () => {
  return (
    <section className="flex flex-col w-full h-full items-center justify-center my-20">
      <div className="grid grid-cols-3 grid-rows-3 w-full max-w-360 bg-primary text-text-primary px-4 md:px-6 lg:px-10 py-20 rounded-sm place-items-center">
        {introLinks.slice(0, 3).map((item, index) => (
          <LinkedCard
            key={index}
            href={item.href}
            label={item.label}
            url={item.url}
          />
        ))}

        <div className="col-span-3 relative w-48 sm:w-64 md:w-96 lg:w-105 h-28 mx-auto">
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
