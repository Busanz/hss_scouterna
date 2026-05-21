import Image from 'next/image';
import { GlobalSvg, LinkSvg } from '@/assets/svg';
import Navbarlinks from '@/components/Navbarlinks';

const Headersection = () => {
  return (
<<<<<<< HEAD
    <section className="flex flex-col w-full h-full items-center">
      <div className="flex flex-col w-full max-w-360">
        <div className="relative w-40 h-12 items-center pt-1.5 cursor-pointer">
          <Image
            src={'/img/header-section/scouterna-log.png'}
            alt="Souterna logga"
            fill
            sizes="340px"
            className="object-contain"
          />
        </div>
        <div className="flex items-center justify-center gap-5">
          <div className="flex h-fit items-center ml-auto">
            <GlobalSvg />
            <p className="cursor-pointer">EN</p>
          </div>
          <div className="flex gap-2.5 bg-primary text-white py-1 px-4 rounded-t-sm cursor-pointer">
            <p className="font-light">Anmälan</p>
            <LinkSvg />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-360 h-fit min-h-60 sm:min-h-90 items-center justify-between bg-primary bg-[url(/img/header-section/hero_bg_img.png)] bg-cover bg-center rounded-sm">
        <h1 className="text-2xl font-bold text-center hidden">
          Hässelby Strands Sjöscoutkår
        </h1>
        <div className="relative w-32 sm:w-64 md:w-96 lg:w-120 h-28 mt-10">
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
=======
    <>
      <section>
        Header section
      </section>
    </>
  )
}
>>>>>>> feature/11-footer-quicklinks

export default Headersection;
