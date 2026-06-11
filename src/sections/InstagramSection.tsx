'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { fadeUpAnimation } from '@/utils/animation';
import { InstagramHeart } from '@/assets/svg';
import { InstagramDataType } from '@/types/types';

const InstagramSection = () => {
  const [instagramData, setInstagramData] = useState<InstagramDataType | null>(
    null,
  );
  const URL: string = 'https://feeds.behold.so/au47cEddhn57lA49VlAe1';

  useEffect(() => {
    const fetchInstagramData = async () => {
      try {
        const response = await fetch(URL);
        const data: InstagramDataType = await response.json();

        setInstagramData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchInstagramData();
  }, []);

  return (
    <section
      className="flex flex-col w-full h-full items-center justify-center mb-5 sm:mb-10 md:mb-20"
      id="instagram"
    >
      <div className="flex flex-col items-center w-full max-w-360 h-full pb-5 md:pb-10 rounded-sm text-text-primay">
        <motion.h1
          {...fadeUpAnimation}
          className="text-center text-2xl sm:text-3xl lg:text-4xl mt-8 text-text-secondary px-4 py-5 md:py-10"
        >
          Vi finns också på sociala medier!
        </motion.h1>

        <p className="sm:text-lg/relaxed text-text-secondary px-4 pb-5 md:pb-10">
          Följ oss på Instagram för att se vad det är vi hittar på!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 w-full px-4 sm:px-6 md:px-12 mt-6">
          {instagramData?.posts?.slice(0, 6).map((post) => (
            <div
              key={post.id}
              className="overflow-hidden rounded-sm pb-5 md:pb-10"
            >
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer "
              >
                <Image
                  src={post.sizes.small.mediaUrl}
                  alt={post.caption}
                  width={400}
                  height={400}
                  className="aspect-square object-cover w-full h-auto rounded-sm"
                />
              </a>
              <div className="flex gap-5 items-center w-full pt-5">
                <InstagramHeart />
                <p>{post.likeCount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
