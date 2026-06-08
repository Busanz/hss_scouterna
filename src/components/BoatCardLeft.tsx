import Image from 'next/image';

type BoatCardProps = {
  image: string;
  name: string;
  years: string;
  description: string;
};

const BoatCardLeft = ({ image, name, years, description }: BoatCardProps) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 md:gap-20">
        <div className="md:shrink-0 lg:w-2/5">
          <Image
            src={image}
            alt={name}
            width={350}
            height={270}
            className="h-auto w-full max-w-xl object-cover rounded-sm"
          />
        </div>

        <div className="max-w-3xl px-4 md:px-0 pr-10">
          <p className="text-text-secondary">{name}</p>
          <p className="text-text-secondary">{years}</p>
          <p className="my-2">{description}</p>
        </div>
      </div>
    </>
  );
};

export default BoatCardLeft;
