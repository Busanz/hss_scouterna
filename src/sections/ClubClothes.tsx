import Link from 'next/link';
import Image from 'next/image';
import clothes from '@/data/clothes';

// import { H2Icon } from '@heroicons/react/16/solid';
import { useTranslations } from 'next-intl';

const ClubClothes = () => {
  const t = useTranslations('clubClothes');
  return (
    <section className="flex flex-col w-full h-full items-center my-5 sm:my-10 md:my-20">
      <div className="flex flex-col w-full max-w-360 rounded-sm pb-10 bg-primary text-text-primary px-4 md:px-6 lg:px-10">
        <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl pt-5 pb-3 md:pt-8 md:pb-3">
        {t('pageTitle')}
        </h1>

        <hr className="mx-auto h-px w-full bg-text-subtitle" />

        <div className="my-6 text-sm text-text-subtitle sm:text-lg">
          <h4 className="mt-2 sm:mt-3">
            {t('subHeader1')}
          </h4>
          <h4 className="mt-2 sm:mt-3">
            {t('subHeader2')}
          </h4>
        </div>

        <p className="mb-10 text-sm sm:mb-12 sm:text-base ">
          {t('description1')}
          <br />
          {t('description2')}
        </p>

        <div className="mb-12 grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-7">
          {clothes.map((product) => (
            <div key={product.id} className="flex flex-col">
              <div className="overflow-hidden rounded-sm bg-background">
                <Image
                  src={product.image}
                  alt={t(`products.${product.id}.name`)}
                  className="h-full w-full object-cover"
                  width={200}
                  height={250}
                />
              </div>
              <p className="mt-2 text-right text-sm  sm:text-base">
                {product.price}
              </p>
              <p className="mt-1 text-sm  sm:text-lg">{t(`products.${product.id}.name`)}</p>
              <p className="mt-1 text-sm text-text-primary sm:text-base">
              {t(`products.${product.id}.description`)}
              </p>
            </div>
          ))}
        </div>

        <div className="text-sm sm:text-base">
          <p className="mb-6 sm:mb-7">
            {t('timeDetails')}
            <br />
            {t('contactTxt')}{' '}
            <Link
              href="mailto:hsstrojan@hss-scout.org"
              className="font-bold text-text-primary hover:underline"
            >
              hsstrojan@hss-scout.org
            </Link>
          </p>
          <p>
            <span className="font-bold">{t('note')}</span>
            {t('noteTxt1')}
            <br />
            {t('noteTxt2')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClubClothes;
