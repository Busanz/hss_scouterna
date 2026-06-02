import Image from 'next/image';

type LogoCircleProps = {
  isMobile: boolean;
};

const LogoCircle = ({ isMobile }: LogoCircleProps) => {
  return (
    <div
      className={`flex ${isMobile ? 'relative w-10 h-10 justify-between' : 'absolute left-[3%] bottom-2 w-14 h-14 justify-center'} items-center justify-center  xl:w-16 xl:h-16 rounded-full cursor-pointer`}
    >
      <Image
        src={'/img/header-section/logo_circle.png'}
        width={80}
        height={80}
        alt="Skylt HSS cirkelform sekundär"
      />
    </div>
  );
};

export default LogoCircle;
