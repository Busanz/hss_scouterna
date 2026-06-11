import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const Lager = () => {
  const t = useTranslations('lager')
  return (
    <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-14 my-5 sm:my-10 md:my-20">
      <div className="flex flex-col justify-start flex-1/2 order-2 px-4 md:px-0 lg:order-1">
        <h1 className=" text-xl sm:text-2xl md:text-3xl">{t('title')}</h1>
        <p className="my-5 sm:text-lg leading-relaxed">
          {t('intro1')}        
        </p>

        <p className="mb-5 sm:text-lg leading-relaxed">
          {t('intro2')}
        </p>

        <Link
          className="my-5 px-4 py-2 w-fit rounded-sm text-white bg-primary hover:bg-secondary hover:text-primary"
          href="/#instagram"
        >
          {t('buttonText')}
        </Link>
      </div>

      <div className="basis-1/2 order-1 lg:order-2">
        <Image
          src="/img/intro-section/lager.png"
          alt={t('imageAlt')}
          width={350}
          height={270}
          className="w-full h-auto rounded-sm"
        />
      </div>
    </div>
  );
};

export default Lager;
