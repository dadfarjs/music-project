'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import type { Music } from '@/features/types/music';
import Link from 'next/link';

type Props = {
  music: Music;
  index: number;
};

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const MusicCard = ({ music, index }: Props) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ['start start', 'end start'],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className='static w-full items-start overflow-y-auto' ref={gridRef}>
      <Link href={`musics/${music?.id}`}>
        <motion.div
          style={{ y: translateFirst }}
          key={'grid-1' + index}
          variants={variants}
          initial='hidden'
          animate='visible'
          transition={{
            delay: index * 0.15,
            ease: 'easeInOut',
            duration: 0.5,
          }}
          viewport={{ amount: 0 }}
          className='relative h-80 w-full max-w-sm rounded'
        >
          <Image
            src={music?.image_link ?? ''}
            className='absolute z-10 !m-0 h-full w-full gap-10 rounded-lg border border-white/20 object-cover object-left-top !p-0'
            height='400'
            width='400'
            alt='thumbnail'
          />
          <motion.div
            className='relative z-20 flex h-full w-full flex-col justify-end opacity-100 shadow-2xl'
            whileHover={{
              backgroundColor: '#0f172b69',
              transition: { duration: 0.5 },
            }}
          >
            <div className='relative z-30 px-8 pb-4' style={{ opacity: 1, transform: 'none' }}>
              <div>
                <p className='overflow-hidden truncate text-4xl font-bold text-white'>
                  {music?.title}
                </p>
                <p className='my-4 max-w-lg overflow-hidden truncate text-base font-normal text-neutral-200'>
                  {music?.artist_name}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Link>
    </div>
  );
};

export default MusicCard;
