import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Values = () => {
  const t = useTranslations('omHSS');
  return (
    <div className="flex flex-col lg:flex-row px-4 md:px-10 gap-3 md:gap-8 lg:gap-14">
      <div className="flex flex-col justify-start flex-1/2 order-2 lg:order-1">
        <h2 className="text-text-subtitle text-xl sm:text-2xl my-5 py-3 lg:pt-0">
          {t("title_one")}
        </h2>
        <p className="text-white sm:text-lg">
          {t("title_one_paragraph_one")}
        </p>
        <p className="text-white sm:text-lg my-4">
          {t("title_one_paragraph_two")}
        </p>
        <p className="text-white sm:text-lg">
          {t("title_one_paragraph_three")}
        </p>
      </div>
      <Image
        src="/img/commitments/commitments.jpeg"
        alt=""
        width={350}
        height={270}
        className="w-full h-auto object-cover flex-1/2 order-1 lg:order-2 rounded-sm"
      />
    </div>
  );
};

export default Values;