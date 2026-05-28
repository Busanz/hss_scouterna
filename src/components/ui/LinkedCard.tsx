import Link from 'next/link';

type LinkedCardProps = {
  href: string;
  label: string;
  url: string;
};

const LinkedCard = ({ href, label, url }: LinkedCardProps) => {
  return (
    <Link
      href={href}
      className="flex flex-col w-full max-w-105 h-fit items-center z-10 cursor-pointer rounded-sm"
    >
      <div className="relative w-full aspect-video overflow-hidden max-w-105 rounded-sm">
        <div
          className={`w-full h-full bg-cover bg-center`}
          style={{
            backgroundImage: `url(${url})`,
          }}
        >
          <div className="absolute flex items-center justify-center left-0 top-4 ">
            <h3
              className="font-light w-full min-w-40 md:min-w-50 lg:min-w-56 text-text-secondary text-left md:text-center 
                          px-3 md:px-4 xl:px-6 py-1 sm:py-1.5 text-base sm:text-lg md:text-xl lg:text-2xl rounded-r-sm whitespace-nowrap bg-secondary"
            >
              {label}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LinkedCard;
