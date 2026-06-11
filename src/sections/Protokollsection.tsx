import { useTranslations } from "next-intl";

const ProtokollSection = () => {
  const t = useTranslations('protocol')

  return (
    <section className="flex flex-col w-full h-full items-center justify-center text-text-secondary py-10 md:py-20 px-4 md:px-6 lg:px-10">
      <div className="flex flex-col max-w-360 w-full">
        <h2 className="text-xl sm:text-2xl pb-5">{t('title')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-medium pb-5">{t('meeting.title')}</h3>
            <ul className="list-disc ml-6 space-y-1">
              {t.raw('board.dates').map((date: string, i: number) => (
                <li key={i}>{date}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium pb-5">{t('board.title')}</h3>
            <ul className="list-disc ml-6 space-y-1">
              {t.raw('board.dates').map((date: string, i: number) => (
                <li key={i}>{date}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtokollSection;
