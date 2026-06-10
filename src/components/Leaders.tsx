import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Leaders = () => {
  const t = useTranslations('forLedare');

  return (
    <section className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-14 my-5 sm:my-10 md:my-20">
      <div className="flex flex-col justify-start flex-1/2 order-2 px-4 md:px-0 lg:order-1">
        <h1 className=" text-xl sm:text-2xl md:text-3xl">{t('title')}</h1>
        <div className="my-5 space-y-3">
          <p className="sm:text-lg/relaxed">
            {t('title_one_paragraph_one')}
            <br />
            {t('title_one_paragraph_two')}
          </p>
          <p className="sm:text-lg/relaxed">{t('title_one_paragraph_three')}</p>
        </div>
      </div>
      <Image
        src="/img/intro-section/for_ledare.png"
        alt="Image Scout Leader"
        width={350}
        height={270}
        className="w-full h-auto flex-1/2 order-1 lg:order-2 rounded-sm"
      />
    </section>
  );
};

export default Leaders;
