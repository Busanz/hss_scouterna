import Story from '@/components/Story';
import OldBoats from '@/components/OldBoats';
import OmHSSsection from './OmHSSsection';
import { useTranslations } from 'next-intl';

const History = () => {
  const t = useTranslations('omHSS');

  return (
    <section className="flex flex-col w-full h-full items-center">
      <div className="pb-5 md:pb-10">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl  text-text-secondary py-5">
          {t('title_two')}
        </h2>
        <hr className="mb-5 md:mb-10 border-primary" />
        <Story />
      </div>
      <OldBoats />
      <OmHSSsection />
    </section>
  );
};

export default History;