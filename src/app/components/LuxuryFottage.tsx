"use client";
import React, { useState, useEffect } from "react";

export default function LuxuryFootage() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/gallery1.png",
    "/gallery3.png",
    "/gallery2.png",
    "/gallery4.png",
    "/gallery5.png",
    "/gallery6.png"
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize(); // Initial check on mount

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isMobile, images.length]);

  return (
    <>
      <section className="bg-[#D6B66B] lg:mt-[72px]">
        <div className="pt-12 p-9 lg:py-[72px] lg:pt-[84px] w-full max-w-7xl mx-auto lg:text-left flex flex-col space-y-6">
          <h2 className="font-the-signature text-[52px] lg:text-[72px] text-dark-teal">
            Luxury Footages
          </h2>
          {isMobile ? (
            <div className="relative w-full h-[300px] overflow-hidden">
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-[300px] bg-[url('/Rectangle.png')] bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                    currentImageIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={src}
                    alt={`Gallery Image ${index + 1}`}
                    className="object-cover object-center h-full w-full"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full lg:grid lg:grid-cols-3 gap-6">
              <div className="col-span-full lg:col-span-3">
                <div className="grid grid-cols-3 gap-6">
                  {[images[0], images[2], images[1]].map((src, index) => (
                    <GalleryImage key={index} src={src} />
                  ))}
                </div>
                <div className="col-span-full">
                  <img
                    src="/Separator-02.svg"
                    alt="Separator"
                    className="mx-auto"
                  />
                </div>
                <div className="grid grid-cols-3 gap-6">
                  {[images[3], images[4], images[5]].map((src, index) => (
                    <GalleryImage key={index + images.length} src={src} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function GalleryImage({ src }: { src: string }) {
  return (
    <div className="relative w-full aspect-[356/256] cursor-pointer mb-2">
      <img
        src={src}
        alt="Gallery Image"
        loading="lazy"
        sizes="100vw"
        className="object-cover object-center transition-opacity ease-in-out duration-300 opacity-100"
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          inset: "0px",
          color: "transparent"
        }}
      />
    </div>
  );
}
