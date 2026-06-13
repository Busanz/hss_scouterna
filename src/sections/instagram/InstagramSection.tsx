'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { fadeUpAnimation } from '@/utils/animation';
import { InstagramHeart } from '@/assets/svg';
import type { InstagramDataType } from '@/types/types';
import { useTranslations } from 'next-intl';
import { SlSocialInstagram } from 'react-icons/sl';

type InstagramSectionProps = {
  instagramData: InstagramDataType | null;
  error: boolean;
};

const InstagramSection = ({ instagramData, error }: InstagramSectionProps) => {
  const t = useTranslations('instagram');
  console.log(instagramData);
  const captionTruncate = (text: string, maxWord: number) => {
    const words = text.split(' ');
    return words.length > maxWord
      ? `${words.slice(0, maxWord).join(' ')}...`
      : text;
  };

  return (
    <section
      className="flex flex-col w-full h-full items-center justify-center mb-5 sm:mb-10 md:mb-20"
      id="instagram"
    >
      <div className="flex flex-col items-center w-full max-w-360 h-full pb-5 md:pb-10 text-text-primay bg-secondary/6 rounded-sm">
        <motion.h1
          {...fadeUpAnimation}
          className="text-center text-2xl sm:text-3xl lg:text-4xl mt-8 text-text-secondary px-4 py-5 md:py-10"
        >
          {t(`title`)}
        </motion.h1>

        <p className="sm:text-lg/relaxed text-text-secondary text-center px-4 pb-5 md:pb-10">
          {t('description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 w-full px-4 sm:px-6 md:px-12 mt-6">
          {!error &&
            instagramData?.posts?.slice(0, 6).map((post) => (
              <div
                key={post.id}
                className="w-full h-full overflow-hidden rounded-sm pb-5 md:pb-10 border-primary p-1 bg-[linear-gradient(135deg,#405de622_0%,#833ab422_30%,#c1358422_55%,#e1306c22_75%,#fcaf4522_100%)]"
              >
                <Image
                  src={post.sizes.small.mediaUrl}
                  alt={post.caption}
                  width={400}
                  height={400}
                  className="aspect-square object-cover w-full h-auto rounded-sm"
                />

                <div className="flex flex-col gap-5 items-center w-full pt-5 pb-3 px-3">
                  <div className="flex w-full justify-between">
                    <div className="flex gap-5">
                      <InstagramHeart />
                      <p className="sm:text-lg/relaxed text-text-secondary inset-0">
                        {post.likeCount}
                      </p>
                    </div>
                    <a
                      href={post.permalink}
                      target="_blank"
                      rel="noopener noreferrer "
                    >
                      <SlSocialInstagram size={30} className="text-[#833ab4]" />
                    </a>
                  </div>
                  <div className="flex w-full">
                    <p>{captionTruncate(post.caption, 20)}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {error && (
          <div className="flex w-full h-full justify-center text-center">
            <p>{t('loadError')}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default InstagramSection;
