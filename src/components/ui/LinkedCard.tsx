'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { fadeUpAnimation } from '@/utils/animation';
import Image from 'next/image';

type LinkedCardProps = {
  href: string;
  url: string;
  label: string;
};

const LinkedCard = ({ href, label, url }: LinkedCardProps) => {
  return (
    <motion.li
      {...fadeUpAnimation}
      className="flex flex-col w-full max-w-105 h-full px-5 py-3 md:py-5 z-10 cursor-pointer bg-background rounded-sm"
    >
      <Link href={href}>
        <h3 className="font-light w-full pb-2 min-w-40 md:min-w-50 lg:min-w-56 text-text-secondary text-left text-xl lg:text-2xl whitespace-nowrap">
          {label}
        </h3>
        <div className="relative w-full aspect-video overflow-hidden max-w-105 pb-3">
          <Image
            src={url}
            fill
            loading="lazy"
            sizes="(max-w-768px) 100vw, (max-w-1024px) 33vw, 420px"
            className="w-full h-full object-cover center rounded-sm transition-all duration-300 hover:scale-102"
            alt={label}
          />
        </div>
      </Link>
    </motion.li>
  );
};

export default LinkedCard;