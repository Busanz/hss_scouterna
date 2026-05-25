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
          <div className="absolute flex items-center justify-center left-0 top-4 ">
            <h3 className="text-xl font-light w-full min-w-40 md:min-w-63 text-text-primary text-start md:text-center px-6 py-2 bg-primary rounded-r-sm">
              {label}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LinkedCard;
