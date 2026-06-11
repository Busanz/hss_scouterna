import { useTranslations } from "next-intl";

const GoodToHave = () => {
    const t = useTranslations('goodToHave');

    return (
        <section className="flex flex-col w-full h-full items-center mb-5 sm:mb-10 md:mb-20">
            <div className="flex flex-col w-full max-w-360 px-4 md:px-6 lg:px-10">
                <div className="sm:px-6 md:px-8">
                    <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl pb-4">
                        {t('title')}
                    </h2>
                </div>
                <hr className="mx-auto h-px w-full opacity-90 bg-text-subtitle" />
                <h3 className="text-primary sm:text-lg md:text-xl py-6">
                    {t('description')}
                </h3>
                <div className="color-background px-4" >
                    <ul className="list-disc text-black text-sm sm:text-base">
                        <li>{t('item1')}</li>
                        <li>{t('item2')}</li>
                        <li>{t('item3')}</li>
                        <li>{t('item4')}</li>
                        <li>{t('item5')}</li>
                        <li>{t('item6')}</li>
                        <li>{t('item7')}</li>
                        <li>{t('item8')}</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default GoodToHave;


