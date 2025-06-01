"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface DesignImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  spanRows?: boolean;
  spanCols?: boolean;
}

interface DesignShowcaseProps {
  images: DesignImage[];
}

export function DesignShowcase({ images }: DesignShowcaseProps) {
  return (
    <div className="w-full mx-auto pt-8 pb-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Design Work</h2>
        <p className="text-gray-600 mt-2">Selected visual designs from my portfolio</p>
      </div>

      <div className="flex flex-wrap -mx-3">
        {images.map((image, index) => (
          <div key={image.id} className={`px-3 mb-6 ${
            image.id === 'design-2'
              ? 'w-full sm:w-1/2 md:w-1/3'
              : image.width > image.height
              ? 'w-full sm:w-full md:w-2/3'
              : 'w-full sm:w-1/2 md:w-1/3'
          }`}>
            <motion.div
              className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="relative w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="object-cover w-full h-auto"
                  sizes={image.spanCols ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 100vw, 33vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-medium">{image.alt}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
} 