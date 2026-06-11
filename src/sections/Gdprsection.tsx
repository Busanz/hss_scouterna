import { useTranslations } from 'next-intl';

const GdprSection = () => {
  const t = useTranslations('gdpr');

  return (
    <section className="flex flex-col w-full items-center text-text-primary rounded-sm">
      <div className="flex flex-col bg-primary max-w-360 px-4 md:px-6 lg:px-10 py-5 md:py-10 rounded-sm">
        <h3 className="text-xl font-semibold pb-5">{t('title')}</h3>

        <p className="leading-relaxed mb-6 sm:text-lg">{t('intro')}</p>

        <h3 className="text-xl font-semibold pb-5">{t('scoutnet.title')}</h3>

        <p className="leading-relaxed mb-4 sm:text-lg">{t('scoutnet.description')}</p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 list-disc ml-6 gap-y-1 gap-x-10 mb-6 sm:text-lg">
          {t.raw('scoutnet.list').map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <p className="leading-relaxed mb-6 sm:text-lg">{t('scoutnet.childrenInfo')}</p>

        <p className="leading-relaxed mb-6 sm:text-lg">{t('scoutnet.purpose')}</p>

        <p className="leading-relaxed mb-6 sm:text-lg">{t('scoutnet.access')}</p>

        <p className="leading-relaxed mb-10 sm:text-lg">{t('scoutnet.insurance')}</p>

        <h3 className="text-xl sm:text-2xl pb-5 font-medium">{t('hikes.title')}</h3>

        <p className="leading-relaxed pb-4 sm:text-lg">{t('hikes.registration')}</p>

        <p className="leading-relaxed pb-4 sm:text-lg">{t('hikes.additional')}</p>

        <ul className="list-disc ml-6 space-y-1 mb-6 sm:text-lg">
          {t.raw('hikes.list').map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <p className="leading-relaxed mb-6 sm:text-lg">{t('hikes.examples')}</p>

        <p className="leading-relaxed mb-10 sm:text-lg">{t('hikes.deletion')}</p>

        <h3 className="text-xl sm:text-2xl pb-5 font-medium">{t('other.title')}</h3>

        <p className="leading-relaxed mb-6">{t('other.cookies')}</p>

        <p className="leading-relaxed mb-10 sm:text-lg">
          {t('other.moreInfo')}{' '}
          <a
            href="https://www.scouterna.se"
            className="underline underline-offset-4 hover:text-text-subtitle-200 decoration-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('other.scouter')}.
          </a>
        </p>

        <div className="mt-8">
          <a
            href="/pdf/gdpr_begaran.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-text-link hover:underline underline-offset-4 decoration-0"
          >
            {t('other.download')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default GdprSection;
