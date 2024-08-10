import Image from "next/image";
import React from "react";

export default function SectionMain() {
  return (
    <>
      <section className="p-4 lg:py-0 mt-[54px] lg:my-[72px] w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-stretch gap-4 lg:gap-6">
        <div className="col-span-full text-center">
          <h2 className="font-the-signature text-dark-aquaman text-[54px] lg:text-[85px]">
            Beyond Premium
          </h2>
          <span className="font-unbounded text-dark-teal font-bold uppercase text-[22px] lg:text-[32px]">
            Elevate Your Experience
          </span>
        </div>
        <div className="flex h-full flex-col justify-start items-stretch text-center">
          <Image
            src="/OurServices-06.svg"
            alt=""
            width={95}
            height={95}
            className="mx-auto"
          />
          <h2 className="text-dark-aquaman text-base text-bold lg:text-2xl uppercase">
            PERSONAL ITINERARIES
          </h2>
          <p className="text-sm lg:text-base">
            Our premium travel services offer tailor-made itineraries crafted to
            suit your unique preferences and desires.
          </p>
        </div>
        <div className="flex h-full flex-col justify-start items-stretch text-center">
          <Image
            src="/OurServices-07.svg"
            alt=""
            width={95}
            height={95}
            className="mx-auto"
          />
          <h2 className="text-dark-aquaman text-base text-bold lg:text-2xl uppercase">
            EXCLUSIVE EXPERIENCES
          </h2>
          <p className="text-sm lg:text-base">
            From private charters to behind-the-scenes tours, we offer access to
            unique opportunities that are designed to elevate your trip to the
            next level.
          </p>
        </div>
        <div className="flex h-full flex-col justify-start items-stretch text-center">
          <Image
            src="/OurServices-08.svg"
            alt=""
            width={95}
            height={95}
            className="mx-auto"
          />
          <h2 className="text-dark-aquaman text-base text-bold lg:text-2xl uppercase">
            Best Facilities
          </h2>
          <p className="text-sm lg:text-base">
            Experience the epitome of with our premium facility, designed to
            provide an unparalleled level of comfort and indulgence.
          </p>
        </div>
      </section>
      <section className="p-4 lg:py-0 mt-[54px] lg:mt-[72px] w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 space-y-4">
        <div className="relative w-full lg:w-1/2 max-h-[188px] lg:max-h-64 aspect-square">
          <img
            src="/Rectangle729.png"
            className="object-contain object-center absolute inset-0 h-full w-full"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: "0px",
              color: "transparent",
            }}
            alt="Pandooin Tailored Experiences"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col lg:justify-center space-y-2 lg:space-y-4 text-center lg:text-left">
          <h2 className="m-0 font-unbounded text-dark-teal text-[32px] font-bold">
            Discover Tailored Experiences
          </h2>
          <p className="text-sm lg:text-lg">
            Create your own journey, personalized to suit your preferences and
            interests, ensuring a once-in-a-lifetime adventure awaits.
          </p>

          <a href="https://pandooin.com/id/tailor-made/create" target="_blank">
            <button className="button text-center inline-flex justify-center items-center px-6 py-2.5 rounded-full capitalize font-bold text-sm lg:text-base transition-colors ease-in-out duration-300 bg-dark-teal text-vista-white border-2 border-dark-teal hover:bg-tan hover:text-vista-white hover:border-tan !mt-6">
              Customize Your Trip
            </button>
          </a>
        </div>
      </section>
      <section className="p-4 lg:mt-[72px] w-full max-w-7xl mx-auto">
        <img className="w-full" src="/Separator-01.svg" alt="separator" />
      </section>
    </>
  );
}
