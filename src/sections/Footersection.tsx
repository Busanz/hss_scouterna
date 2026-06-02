import Image from 'next/image';
import Link from 'next/link';
import { quickLinks, socialMediaLinks } from '../data/data';
import { QuickLinkType,SocialLinkType } from '../types/types';

const Footersection = () => {
  return (
    <footer className="flex flex-col w-full h-full max-w-360 items-center rounded-sm bg-primary text-white">
      <div className="flex flex-col w-full items-center py-10 sm:py-14 lg:py-20">
        <h2 className="pb-6 sm:pb-8 lg:pb-10 text-2xl sm:text-3xl lg:text-4xl">
          Gå direkt till
        </h2>
        <nav className="w-full px-4 sm:px-8">
          <div className="flex flex-wrap w-full justify-center gap-6 sm:gap-8 lg:justify-evenly lg:gap-0">
            {quickLinks.map((link: QuickLinkType) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex flex-col items-center gap-2 transition duration-200 hover:text-secondary hover:scale-105"
              >
                <Image
                  src={link.image}
                  alt={link.label}
                  width={80}
                  height={80}
                  className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full"
                />
                <span className="text-lg font-extralight pt-1.5">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <div className="w-full bg-[#002B4D]">
        <div className="max-w-360 mx-auto px-6 py-10 sm:px-10 sm:py-12 lg:px-15 lg:py-15">
          <div className="mb-8 lg:mb-10">
            <Image
              src="/img/footer/scouterna-footer-logo.svg"
              alt="Scouterna"
              width={80}
              height={80}
              className="h-10 w-auto"
            />
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-15">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl mb-3 lg:mb-4">
                Kontakt
              </h2>
              <address className="flex flex-col gap-1 text-lg font-extralight not-italic">
                <span>Hässelby Strands Sjöscoutkår</span>
                <span>
                  e-post:{' '}
                  <Link
                    href="mailto:info@hss-scout.org"
                    className="hover:text-secondary"
                  >
                    info@hss-scout.org
                  </Link>
                </span>
              </address>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl mb-3 lg:mb-4">
                Adress
              </h2>
              <Link
                href={'/kontakta-oss'}
                className="text-lg font-extralight hover:text-secondary"
              >
                Hitta hit
              </Link>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl mb-3 lg:mb-4">
                Följ oss
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {socialMediaLinks.map((link:SocialLinkType) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 transition duration-200 hover:text-secondary hover:scale-105"
                  >
                    <Image
                      src={link.image}
                      alt={link.label}
                      width={80}
                      height={80}
                      className="w-6 h-6"
                    />
                    <span className="text-lg font-extralight">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footersection;
