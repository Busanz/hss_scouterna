import Image from 'next/image';

const LogoCircle = () => {
  return (
    <div className="absolute flex items-center justify-center bottom-2 left-[2%] w-20 h-20 rounded-full cursor-pointer">
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
