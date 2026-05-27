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
      className="flex flex-col w-full max-w-105 h-fit items-center z-10 cursor-pointer"
    >
      <div className="relative w-full aspect-video overflow-hidden max-w-105 ">
        <div
          className={`w-full h-full bg-cover bg-center`}
          style={{
            backgroundImage: `url(${url})`,
          }}
        >
          <div className="absolute flex items-center justify-center left-1 top-4 ">
            <h3 className="sm:text-lg md:text-lg lg:text-lg font-light min-w-40 md:min-w-50 lg:min-w-56 text-text-primary text-start md:text-center px-2 lg:px-3 xl:px-6 py-1 sm:py-2 bg-primary rounded-r-sm">
              {label}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LinkedCard;
