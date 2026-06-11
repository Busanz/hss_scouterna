import { useTranslations } from "next-intl";

const Family = () => {
  const t = useTranslations('forParents')
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-14 mt-5">
      <div className="w-full order-2 lg:order-1 px-4 md:px-0">
        <h2 className=" text-xl sm:text-2xl md:text-3xl">
          {t('titleGrowth')}
        </h2>
        <div className="my-5 space-y-3">
          <p className="sm:text-lg/relaxed">
            {t('growthParagraph1')}
          </p>
          <p className="sm:text-lg/relaxed">
            {t('growthParagraph2')}
          </p>
          <p className="sm:text-lg/relaxed">
            {t('growthParagraph3')}
          </p>
        </div>
      </div>
      <div className="w-full order-2 md:px-0 lg:order-1">
        <div className="px-4 md:px-0 order-2 lg:order-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl">
            {t('titleFamily')}
          </h2>
          <div className="my-5 space-y-3">
            <p className="sm:text-lg/relaxed">
              {t('familyParagraph1')}
            </p>
            <p className="sm:text-lg/relaxed">
              {t('familyParagraph2')}
            </p>
            <p className="sm:text-lg/relaxed">
              {t('familyParagraph3')}
            </p>
          </div>
        </div>         
      </div>
    </section>
  );
};

export default Family;