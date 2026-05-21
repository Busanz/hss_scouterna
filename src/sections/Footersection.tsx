import React from 'react';
import Link from 'next/link';

import { quickLinks, socialMediaLinks } from '../data/data';
import { QuickLinkType, SocialLinkType } from '../types/types';

const Footersection = () => {
  return (
    <>
      <section>
        <footer className="w-full h-[637px] bg-[#003660] text-white font-[Montserrat] font-normal">
          <img src="/images/footer/curve.svg" alt="curve"className="w-full max-w-full block object-cover"/>
          <div className="max-w-[1440px] mx-auto px-15 py-15">
            <h4 className="text-[48px] mb-2.5">Gå direkt till</h4>
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
            <div className="max-w-[1440px] h-[339px] mx-auto px-15 py-10 ">
              <div className="mb-10">
                <img src="/images/footer/scouterna-footer-logo.svg" alt="Scouterna" className="h-[40px] w-auto " />
              </div>
              <div className="grid grid-cols-3 gap-15">
                <div>
                  <h5 className="text-[31px] mb-4">Kontakt</h5>
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
                  <h5 className="text-[31px] mb-4">Adress</h5>
                  <Link href={'/kontakta-oss'} className="text-[20px]  hover:cursor-pointer">
                    Hitta hit
                  </Link>
                </div>
                <div>
                  <h5 className="text-[31px] mb-4">Följ oss</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {socialMediaLinks.map((link) => (
                      <div key={link.label}>
                        <Link href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <img src={link.image} alt="" className="w-6 h-6" />
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


