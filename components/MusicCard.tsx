"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import type { Music } from "@/app/types/music";
import Link from "next/link";

type Props = {
  music: Music;
  index: number;
};

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const MusicCard = ({ music, index }: Props) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="static items-start overflow-y-auto w-full" ref={gridRef}>
      <Link href={`musics/${music?.id}`}>
        <motion.div
          style={{ y: translateFirst }} // Apply the translateY motion value here
          key={"grid-1" + index}
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{
            delay: index * 0.15,
            ease: "easeInOut",
            duration: 0.5,
          }}
          viewport={{ amount: 0 }}
          className="max-w-sm rounded relative w-full h-80"
        >
          <Image
            src={music?.image}
            className="z-10 absolute w-full h-full object-cover object-left-top border border-white/20 rounded-lg gap-10 !m-0 !p-0"
            height="400"
            width="400"
            alt="thumbnail"
          />
          <motion.div
            className="h-full w-full flex opacity-100 flex-col justify-end shadow-2xl relative z-20"
            whileHover={{
              backgroundColor: "#0f172b69",
              transition: { duration: 0.5 },
            }}
          >
            <div
              className="relative px-8 pb-4 z-30"
              style={{ opacity: 1, transform: "none" }}
            >
              <div>
                <p className="font-bold text-4xl text-white overflow-hidden truncate">
                  {music?.title}
                </p>
                <p className="font-normal text-base my-4 max-w-lg text-neutral-200 overflow-hidden truncate">
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
