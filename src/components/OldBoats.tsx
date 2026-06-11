import BoatCardLeft from './BoatCardLeft';
import BoatCardRight from './BoatCardRight';
import { useTranslations } from 'next-intl';

const OldBoats = () => {
  const t = useTranslations('omHSS');
  return (
    <div className="flex flex-col w-full my-5 md:mt-10">
      <h3 className="text-text-secondary text-xl sm:text-2xl px-4 md:px-0 pb-5">
        {t('title_three')}
      </h3>
      <div className="ms:text-lg mb-5">
        <BoatCardLeft
          image="/img/history/boats.jpg"
          name="Båtnamn:"
          years="I HSS ägo: xxxx-xxxx"
          description={t("title_three_paragraph_one")}
        />
        <BoatCardRight
          image="/img/history/oldBoat.jpg"
          name="Båtnamn:"
          years="I HSS ägo: xxxx-xxxx"
          description={t("title_three_paragraph_two")}
        />
        <BoatCardLeft
          image="/img/history/boats.jpg"
          name="Båtnamn:"
          years="I HSS ägo: xxxx-xxxx"
          description={t("title_three_paragraph_three")}
        />
      </div>
    </div>
  );
};

export default OldBoats;