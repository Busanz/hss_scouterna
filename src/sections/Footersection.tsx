import React from 'react'
import Link from 'next/link'
import type { QuickLinkType } from '../types/types'
import { quickLinks } from '../data/data'

const FooterSection = () => {

  return (
    <>
      <footer className="w-[1440px] h-[637px] bg-[#003660] text-white font-[Montserrat] font-normal">

        <div className="w-full mx-auto px-[60px] pt-[40px] pb-[40px]">
          <h3 className="text-[48px] font-normal mb-[20px]">Gå direkt till</h3>

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

      </footer>
    </>
  )
}

export default FooterSection