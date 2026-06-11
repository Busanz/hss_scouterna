import { useTranslations } from "next-intl";

const PolicySection = () => {
  const t = useTranslations('policy')

  return (
    <section className="flex flex-col items-center w-full my-10 md:my-20 text-text-secondary">
      <h1 className="text-center text-4xl font-extrabold pb-5">{t('title')}</h1>
      <hr className="mb-5 md:mb-10 border-primary h-px w-full max-w-360" />
      <div className="flex flex-col w-full max-w-360">
        <div className="w-full max-w-5xl px-4 md:px-0">
          <h3 className="sm:mb-6 text-xl sm:text-2xl pb-5">{t('photoPolicy.title')}</h3>
          <p className="sm:text-lg">{t('photoPolicy.text')}</p>
        </div>
      </div>
    </section>
  );
};

export default PolicySection;
