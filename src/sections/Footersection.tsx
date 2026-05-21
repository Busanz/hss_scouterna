import Image from 'next/image';
import Link from 'next/link';
import { quickLinks, socialMediaLinks } from '../data/data';
import { QuickLinkType } from '../types/types';

const Footersection = () => {
  return (
    <footer className="flex flex-col w-full h-full max-w-360 items-center rounded-sm bg-primary text-white">
      <div className="flex flex-col w-full items-center py-20">
        <h1 className="pb-10">Gå direkt till</h1>
        <nav className="w-full">
          <div className="flex w-full justify-evenly">
            {quickLinks.map((link: QuickLinkType) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="flex flex-col items-center gap-2"
                >
                  <Image
                    src={link.image}
                    alt={link.label}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full"
                  />
                  <span className="text-xl font-light pt-1.5">
                    {link.label}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </nav>
      </div>
      <div className="w-full bg-[#002B4D]">
        <div className="max-w-360 h-85 mx-auto px-15 py-15">
          <div className="mb-10">
            <Image
              src="/img/footer/scouterna-footer-logo.svg"
              alt="Scouterna"
              width={80}
              height={80}
              className="h-10 w-auto"
            />
          </div>
          <div className="grid grid-cols-3 gap-15">
            <div>
              <h2 className="text-[31px] mb-4 text-secondary">Kontakt</h2>
              <p className="text-[20px]">
                Hässelby Strands Sjöscoutkår
                <br />
                e-post:
                <span className="ml-1">
                  <Link
                    href="mailto:info@hss-scout.org"
                    className="hover:underline"
                  >
                    info@hss-scout.org
                  </Link>
                </span>
              </p>
            </div>
            <div>
              <h2 className="text-[31px] mb-4 text-secondary">Adress</h2>
              <Link
                href={'/kontakta-oss'}
                className="text-[20px]  hover:cursor-pointer"
              >
                Hitta hit
              </Link>
            </div>
            <div>
              <h2 className="text-[31px] mb-4 text-secondary">Följ oss</h2>
              <div className="grid grid-cols-2 gap-2">
                {socialMediaLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:underline"
                    >
                      <Image
                        src={link.image}
                        alt={link.label}
                        width={80}
                        height={80}
                        className="w-6 h-6"
                      />
                      <span className="text-[20px]">{link.label}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footersection;
