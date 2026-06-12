'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { fadeUpAnimation } from '@/utils/animation';
import { InstagramHeart } from '@/assets/svg';
import { InstagramDataType } from '@/types/types';
import { useTranslations } from 'next-intl';
import { SlSocialInstagram } from 'react-icons/sl';

const InstagramSection = () => {
  const t = useTranslations('instagram');
  const [instagramData, setInstagramData] = useState<InstagramDataType | null>(
    null,
  );
  const [error, setError] = useState<boolean>(false);

  const URL: string = 'https://feeds.behold.so/au47cEddhn57lA49VlAe';

  useEffect(() => {
    const fetchInstagramData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data: InstagramDataType = await response.json();

        if (!data.posts || data.posts.length === 0) {
          setError(true);
          return;
        }

        setInstagramData(data);
      } catch {
        setError(true);
      }
    };

    fetchInstagramData();
  }, []);

  const canptionTruncate = (text: string, maxWord: number) => {
    const captionText = text.split(' ');
    return captionText.length > maxWord
      ? `${captionText.slice(0, maxWord).join(' ')}...`
      : captionText;
  };

  return (
    <section
      className="flex flex-col w-full h-full items-center justify-center mb-5 sm:mb-10 md:mb-20"
      id="instagram"
    >
      <div className="flex flex-col items-center w-full max-w-360 h-full pb-5 md:pb-10 text-text-primay bg-secondary/10 rounded-sm">
        <motion.h1
          {...fadeUpAnimation}
          className="text-center text-2xl sm:text-3xl lg:text-4xl mt-8 text-text-secondary px-4 py-5 md:py-10"
        >
          {t(`title`)}
        </motion.h1>

        <p className="sm:text-lg/relaxed text-text-secondary px-4 pb-5 md:pb-10">
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
                    <p>{canptionTruncate(post.caption, 20)}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {error && (
          <div className="flex w-full h-full justify-center">
            <p className="text-text-secondary">
              Unable to load Instagram posts.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default InstagramSection;
