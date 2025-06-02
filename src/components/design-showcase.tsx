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

      {/* Asymmetric 2x2 Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* Top Row */}
        {/* Large item - Newsela Landing Page */}
        <div className="lg:col-span-3">
          {images[0] && (
            <motion.div
              className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="relative w-full">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  width={images[0].width}
                  height={images[0].height}
                  className="object-cover w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 75vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-medium">{images[0].alt}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Medium item - EverWrite */}
        <div className="lg:col-span-1">
          {images[1] && (
            <motion.div
              className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="relative w-full">
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  width={images[1].width}
                  height={images[1].height}
                  className="object-cover w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-medium">{images[1].alt}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Bottom Row */}
        {/* Small item - StudySync App */}
        <div className="lg:col-span-1">
          {images[3] && (
            <motion.div
              className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="relative w-full">
                <Image
                  src={images[3].src}
                  alt={images[3].alt}
                  width={images[3].width}
                  height={images[3].height}
                  className="object-cover w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-medium">{images[3].alt}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Large item - Notification Center */}
        <div className="lg:col-span-3">
          {images[2] && (
            <motion.div
              className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="relative w-full">
                <Image
                  src={images[2].src}
                  alt={images[2].alt}
                  width={images[2].width}
                  height={images[2].height}
                  className="object-cover w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 75vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-medium">{images[2].alt}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
} 