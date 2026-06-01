'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { fadeUpAnimation } from '@/utils/animation';

type LinkedCardProps = {
  href: string;
  label: string;
  url: string;
  description?: string;
};

const LinkedCard = ({ href, label, url, description }: LinkedCardProps) => {
  return (
    <motion.div
      {...fadeUpAnimation}
      className="flex flex-col w-full max-w-105 h-full px-5 py-3 md:py-5 z-10 cursor-pointer bg-background rounded-sm"
    >
      <Link href={href}>
        <h2 className="font-light w-full min-w-40 md:min-w-50 lg:min-w-56 text-text-secondary text-left  text-xl lg:text-2xl whitespace-nowrap">
          {label}
        </h2>
        <div className="relative w-full aspect-video overflow-hidden max-w-105 pb-3">
          <div
            className={`w-full h-full bg-cover bg-center rounded-sm`}
            style={{
              backgroundImage: `url(${url})`,
            }}
          ></div>
        </div>
        {description && (
          <p className="text-text-secondary text-lg">{description}</p>
        )}
      </Link>
    </motion.div>
  );
};

export default LinkedCard;
