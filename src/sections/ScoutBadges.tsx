import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const ScoutBadges = () => {
  const t = useTranslations('scoutBadges');

  return (
    <section className="flex flex-col w-full h-full items-center my-5 sm:my-10 md:my-20">
      <div className="flex flex-col w-full max-w-360 rounded-sm pb-10 bg-primary text-text-primary px-4 md:px-6 lg:px-10">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl pt-5 pb-3 md:pt-8 md:pb-3">
          {t('title')}
        </h2>
        <hr className="mx-auto h-px w-full bg-text-subtitle" />
        <div className="text-text-subtitle sm:text-lg md:text-xl py-5">
          <p>
          {t('subHeader1')}
          </p>
        </div>
        <p>
          {t('description1')}
          <br />
          {t('description2')}
        </p>
        <p>
          {t('description3')}
        </p>

        <h3 className="text-text-subtitle sm:text-lg md:text-xl py-5">
          {t('subHeader2')}
        </h3>

        <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-8">
          <Image
            src="/img/badges/badge-front.png"
            alt={t('alt1')}
            width={500}
            height={400}
            className="w-full max-w-120 h-auto"
          />
          <Image
            src="/img/badges/badge-sides.png"
            alt={t('alt2')}
            width={700}
            height={300}
            className="w-full max-w-170 h-auto"
          />
        </div>

        <p className="mt-8 sm:mt-10 text-base ">
          {t('badgePlacement')}
        </p>

        <h3 className="text-text-subtitle sm:text-lg md:text-xl py-5">
          {t('subHeader3')}
        </h3>
        <p>
          {t('badgeTypes')}
        </p>

          
        <Image
          src="/img/badges/sea​-scout-badges.png"
          alt={t('alt3')}
          width={580}
          height={178}
          className="mt-6 sm:mt-8 w-full max-w-120 h-auto flex mx-0"
          />

        <h3 className="text-text-subtitle sm:text-lg md:text-xl py-5">
          {t('subHeader4')}
        </h3>
        <p>
          {t('badgeVariants')}
        </p>

        <div className="my-6 flex flex-col items-start gap-5 sm:flex-row sm:flex-wrap sm:gap-4">
          <Link
            href="/pdf/Markbart-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-text-link hover:underline underline-offset-4 decoration-0">
            {t('cta')}
          </Link>
        </div>
      </div>
    </section>
  )
}
export default ScoutBadges;