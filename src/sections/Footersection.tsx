import React from 'react';
import Link from 'next/link';
import { QuickLinkType, SocialLinkType } from '../types/types';
import { quickLinks, socialMediaLinks } from '../data/data';

const Footersection = () => {
  return (
  <>
    <section>
      <footer className="w-full h-[637px] bg-[#003660] text-white font-[Montserrat] font-normal">

        <div className="max-w-[1440px] mx-auto px-[60px] pt-[40px] pb-[40px]">
          <h4 className="text-[48px] font-normal mb-[20px]">Gå direkt till</h4>
          <nav>
            <div className="flex flex-wrap justify-evenly">
              {quickLinks.map((link: QuickLinkType) => (
                <div key={link.label}>
                  <Link href={link.href} className="flex flex-col items-center gap-2">
                    <img src={link.image} alt="" className="w-[80px] h-[80px] rounded-full" />
                    <span className="text-[25px] ">{link.label}</span>
                  </Link>
                </div>
              ))}
            </div>
          </nav>
        </div>

      <div className="w-full bg-[#002B4D]">
        <div className="max-w-[1440px] h-[339px] mx-auto px-[60px] py-[30px] ">

          <div className="mb-[40px]">
            <img src="/images/footer/scouterna-footer-logo.svg" alt="Scouterna" className="h-[40px] w-auto " />
          </div>

          <div className="grid grid-cols-3 gap-[60px]">
            <div>
              <h5 className="text-[31px] mb-[16px]">Kontakt</h5>
              <p className="text-[20px]">
                Hässelby Strands Sjöscoutkår
                <br />
                e-post :
                <span className="ml-1">
                  <Link href="mailto:info@hss-scout.org" className="hover:underline">
                    info@hss-scout.org
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <h5 className="text-[31px] mb-[16px]">Adress</h5>
              <Link href={'/kontakta-oss'} className="text-[20px]  hover:cursor-pointer">
                Hitta hit
              </Link>
            </div>

            <div>
              <h5 className="text-[31px] mb-[16px]">Följ oss</h5>
              <div className="grid grid-cols-2 gap-[8px]">
                {socialMediaLinks.map((link) => (
                  <div key={link.label}>
                    <Link href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[8px]">
                      <img src={link.image} alt="" className="w-[24px] h-[24px]" />
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
    </section>
  </>
)
}
export default Footersection;
