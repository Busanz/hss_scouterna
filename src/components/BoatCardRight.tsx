import Image from 'next/image';

type BoatCardProps = {
  image: string;
  name: string;
  years: string;
  description: string;
};

const BoatCardRight = ({ image, name, years, description }: BoatCardProps) => {
  return (
    <>
      <div className="flex flex-col gap-6 mb-20 mt-10 md:mt-20 md:mb-20 lg:flex-row md:gap-20">
        <div className="order-2 lg:order-1 max-w-3xl px-4 md:px-0 pr-10">
          <p className="text-text-secondary">{name}</p>
          <p className="text-text-secondary">{years}</p>
          <p className="my-2">{description}</p>
        </div>

        <div className="md:order-1 md:shrink-0 lg:w-2/5">
          <Image
            src={image}
            alt={name}
            width={350}
            height={270}
            className="h-auto w-full max-w-xl object-cover rounded-sm"
          />
        </div>
      </div>
    </>
  );
};

export default BoatCardRight;
