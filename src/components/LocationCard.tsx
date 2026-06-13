import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { AnimatePresence, motion } from 'framer-motion';

type LocationCardProps = {
  id: string;
  isOpen: boolean;
  onToggle: () => void;
  image: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  extra?: string;
  mapLink: string;
};

const LocationCard = ({
  isOpen,
  onToggle,
  image,
  title,
  icon,
  description,
  extra,
  mapLink,
}: LocationCardProps) => {
  const t = useTranslations('locationCardDetail');

  return (
    <div className="bg-background text-text-secondary rounded-sm p-4 md:p-6">
      <div
        onClick={(e) => {
          e.preventDefault();
          onToggle();
        }}
        className="flex items-center justify-between cursor-pointer list-none"
      >
        <div className="flex items-center gap-3">
          {icon}
          <h3 className="text-xl md:text-2xl font-semibold text-text-secondary">
            {title}
          </h3>
        </div>
        <span
          className={`text-sm text-text-secondary transition-transform duration-700 origin-center ${isOpen ? 'rotate-180 ' : 'rotate-0'}`}
        >
          {<ChevronDown />}
        </span>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="overflow-hidden"
          >
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
                <p className="font-semibold text-text-secondary mb-2">
                  {title}
                </p>

                <p className="my-2">{description}</p>

                {extra && <p className="my-2">{extra}</p>}

                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group btn bg-primary text-text-primary transition duration-400 hover:bg-secondary hover:text-primary mt-4 inline-flex items-center gap-2"
                >
                  <span
                    className="
              w-6 h-6 flex items-center justify-center
              text-blue-100
              transition-all duration-300
              group-hover:scale-110 group-hover:rotate-3 group-hover:animate-pulse
            "
                  >
                    <MapPin className="w-5 h-5" />
                  </span>
                  {t('openMaps')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LocationCard;
