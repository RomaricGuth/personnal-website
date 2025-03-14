"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export default function ImageCarousel({ images, videos, className }) {
  return (
    <div className={cn("relative w-full h-full", className)}>
      {images.length + (videos?.length ?? 0) === 1 ? (
        <Image
          src={images[0].src}
          alt={images[0].alt}
          className="w-full h-full object-contain rounded-lg border"
        />
      ) : (
        <Carousel className=" h-full mx-8">
          <CarouselContent className="flex items-center">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="w-full h-full flex justify-center items-center"
              >
                <Image
                  src={image.src}
                  alt={`${image.alt} - Image ${index + 1}`}
                  className="w-full h-auto object-contain rounded-lg border"
                />
              </CarouselItem>
            ))}
            {videos &&
              videos.map((video, index) => (
                <CarouselItem
                  key={index}
                  className="w-full h-full flex justify-center items-center"
                >
                  <video
                    src={video.src}
                    autoPlay
                    loop
                    muted
                    className="rounded-lg border"
                  />
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    </div>
  );
}
