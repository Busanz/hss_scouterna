import Image from 'next/image';

type LocationCardProps = {
  image: string;
  title: string;
  icon: string;
  description: string;
  extra?: string;
  mapLink: string;
};

const LocationCard = ({
  image,
  title,
  icon,
  description,
  extra,
  mapLink,
}: LocationCardProps) => {
  return (
    <details className="group bg-background rounded-md shadow-md p-4 md:p-6">
      <summary className="flex items-center justify-between cursor-pointer list-none">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          <h3 className="text-xl md:text-2xl font-semibold text-text-secondary">
            {title}
          </h3>
        </div>
        <span className="text-sm text-text-secondary group-open:rotate-180 transition-transform">
          ▼
        </span>
      </summary>

      <div className="mt-6 flex flex-col lg:flex-row gap-6 md:gap-12">
        <div className="md:shrink-0 lg:w-2/5">
          <Image
            src={image}
            alt={title}
            width={350}
            height={270}
            className="h-auto w-full max-w-xl object-cover rounded-sm"
          />
        </div>

        <div className="max-w-3xl pr-4">
          <p className="font-semibold text-text-secondary mb-2">{title}</p>

          <p className="my-2">{description}</p>

          {extra && <p className="my-2">{extra}</p>}

          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-primary text-text-primary hover:opacity-90 mt-4 inline-flex items-center gap-2"
          >
            🗺️ Öppna i Google Maps
          </a>
        </div>
      </div>
    </details>
  );
};

export default LocationCard;
