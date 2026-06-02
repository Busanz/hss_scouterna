import Image from 'next/image';
import { GlobalSvg } from '@/assets/svg';
import Navbarlinks from '@/components/Navbarlinks';
import { IoMdArrowDropdown } from 'react-icons/io';

const Headersection = () => {
  return (
    <section className="flex flex-col w-full h-full items-center">
      <div className="relative flex flex-col w-full  max-w-360">
        <div className="flex w-full h-full justify-between md:justify-end items-center px-4">
          <div className="relative w-40 h-12 items-center pt-1.5 md:mx-10 cursor-pointer">
            <Image
              src={'/img/header-section/scouterna-log.png'}
              alt="Souterna logga"
              fill
              sizes="340px"
              className="object-contain"
              loading="eager"
            />
          </div>
          <div className="flex h-fit items-center">
            <GlobalSvg />
            <p className="cursor-pointer">EN</p>
            <IoMdArrowDropdown
              size={20}
              className="active:text-secondary hover:text-secondary"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-360 h-full min-h-6 sm:min-h-6 md:min-h-90 items-center justify-between bg-primary sm:bg-[url(/img/header-section/hero_bg_img.png)] sm:bg-cover sm:bg-center rounded-sm">
        <h1 className="text-2xl font-bold text-center hidden">
          Hässelby Strands Sjöscoutkår
        </h1>
        <div className="relative w-32 sm:w-64 md:w-96 lg:w-120 h-28 mt-10 hidden sm:block">
          <Image
            src={'/img/header-section/hss_logo_vit.png'}
            alt="Souterna logga"
            fill
            sizes="(max-width: 640px) 128px, (max-width: 768px) 256px, (max-width: 1024px) 384px, 480px"
            className="object-contain"
          />
        </div>
        <Navbarlinks />
      </div>
    </section>
  );
};

export default Headersection;
