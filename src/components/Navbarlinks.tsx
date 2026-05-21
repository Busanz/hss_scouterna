import Link from 'next/link';
import { navLinks } from '../data/data';
import LogoCircle from './ui/LogoCircle';

const Navbarlinks = () => {
  return (
    <div className="relative flex flex-col w-full max-w-310 justify-center rounded-sm px-4 py-3 mb-6 sm:flex-row gap-4 lg:gap-6 xl:gap-10 bg-foreground/60">
      <Link href="/">
        <LogoCircle />
      </Link>
      {navLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-lg font-extralight text-background hover:text-secondary transition-colors duration-300"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default Navbarlinks;
