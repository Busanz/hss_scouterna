import "@/app/globals.css"
import Link from "next/link"
import { useTranslations } from 'next-intl';


const ScoutUniform = () => {
    const t = useTranslations('scoutUniform');

    return (
        <section className="flex flex-col w-full h-full items-center">
            <div className="flex flex-col w-full max-w-360 px-4 md:px-6 lg:px-10">
                <div className="sm:px-6 md:px-8">
                    <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl p-4">
                        {t('title')}
                    </h2>
                </div>
                <hr className="mx-auto h-px w-full opacity-90 bg-text-subtitle" />
                <div>
                    <h3 className="text-primary sm:text-lg md:text-xl py-6">
                        {t('title')}
                    </h3>
                    <p>
                        {t('description1')}
                    </p>
                    <p>
                        {t('description2')}
                    </p>
                </div>
                <div className="text-primary my-4">
                    {t('description3')}
                </div>
                <div className="flex my-4">
                    <Link href="https://www.scoutshop.se/"
                        target="_blank" rel="noopener noreferrer"
                        className="btn bg-primary rounded-sm py-2 text-white hover:bg-secondary hover:text-primary">
                            {t('cta')}
                    </Link>
                </div>
            </div>
        </section >
    )
}
export default ScoutUniform
