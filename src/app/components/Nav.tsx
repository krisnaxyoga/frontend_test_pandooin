"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsScrolled(window.innerWidth <= 1023);
      setIsMobile(window.innerWidth <= 1023);
    };

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`top-0 z-40 w-full inline-flex justify-center fixed transition-colors ${
        isScrolled ? "bg-white" : ""
      }`}
    >
      <div className="p-4 w-full max-w-7xl mx-auto inline-flex justify-between items-center">
        <a href="#">
          <Image
            src={`${
              isScrolled ? "/LogoZamrood-color.png" : "/LogoZamrood-12.png"
            }`}
            alt="Logo"
            width={150}
            height={75}
          />
        </a>
        <div className="inline-flex items-center gap-6">
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img src="/humberger.svg" alt="Menu" />
          </button>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-end justify-center transition-transform transform ${
              menuOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
            style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
          >
            <button
              className="absolute top-4 right-4 text-dark-teal text-2xl"
              onClick={() => setMenuOpen(false)}
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2825 13.584L13.4227 13.4227C13.6665 13.1788 13.9897 13.0305 14.3336 13.0048C14.6775 12.9791 15.0192 13.0777 15.2966 13.2825L15.4578 13.4227L25 22.9629L34.5422 13.4208C34.7862 13.1772 35.1096 13.0293 35.4534 13.0039C35.7973 12.9785 36.1389 13.0774 36.416 13.2825L36.5773 13.4227C36.8212 13.6665 36.9694 13.9897 36.9952 14.3336C37.0209 14.6775 36.9223 15.0192 36.7175 15.2966L36.5773 15.4578L27.0371 25L36.5792 34.5422C36.8228 34.7862 36.9707 35.1096 36.9961 35.4534C37.0215 35.7973 36.9226 36.1389 36.7175 36.416L36.5773 36.5773C36.3335 36.8212 36.0103 36.9694 35.6664 36.9952C35.3225 37.0209 34.9808 36.9223 34.7034 36.7175L34.5422 36.5773L25 27.0371L15.4578 36.5792C15.2138 36.8228 14.8904 36.9707 14.5466 36.9961C14.2027 37.0215 13.8611 36.9226 13.584 36.7175L13.4227 36.5773C13.1788 36.3335 13.0305 36.0103 13.0048 35.6664C12.9791 35.3225 13.0777 34.9808 13.2825 34.7034L13.4227 34.5422L22.9629 25L13.4208 15.4578C13.1772 15.2138 13.0293 14.8904 13.0039 14.5466C12.9785 14.2027 13.0774 13.8611 13.2825 13.584Z"
                  fill="#0B7373"
                ></path>
                <rect
                  x="1"
                  y="1"
                  width="48"
                  height="48"
                  rx="24"
                  stroke="#0B7373"
                  strokeWidth="2"
                ></rect>
              </svg>
            </button>
            <div className="flex flex-col items-end gap-6 m-3">
              {[
                "Homepage",
                "Customize Your Trip",
                "Destination",
                "Article",
              ].map((text, index) => (
                <a
                  key={index}
                  href=""
                  className={`px-6 py-2.5 text-dark-teal text-base font-bold border-b-[2px] ${
                    index === 0
                      ? isScrolled
                        ? "hover:border-dark-teal"
                        : "hover:border-white"
                      : ""
                  } hover:text-dark-teal hover:border-dark-teal transition-colors duration-300`}
                >
                  {text}
                </a>
              ))}
              <a
                target="_blank"
                href="https://api.whatsapp.com/send/?phone=6283831556160&text=Hi%2C+I+wanna+ask+question+about+Zamrood&type=phone_number&app_absent=0"
              >
                <button
                  className={`button text-center inline-flex justify-center items-center px-6 py-2.5 rounded-full capitalize font-bold text-sm lg:text-base transition-colors ease-in-out duration-300 ${
                    isScrolled
                      ? "text-dark-teal border-2 border-dark-teal hover:bg-dark-teal hover:text-vista-white"
                      : "text-white border-2 border-white hover:bg-dark-teal hover:text-vista-white"
                  } w-fit ml-auto`}
                >
                  Need Assistance?
                </button>
              </a>
            </div>
          </div>

          {/* Desktop Links */}
          {isMobile ? null : (
            <div
              className={`${
                menuOpen ? "flex" : "hidden"
              } lg:flex flex-col lg:flex-row items-center gap-6 absolute lg:relative top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent p-4 lg:p-0 z-50`}
            >
              {[
                "Homepage",
                "Customize Your Trip",
                "Destination",
                "Article",
              ].map((text, index) => (
                <a
                  key={index}
                  href=""
                  className={`px-6 py-2.5 text-base font-bold border-b-[2px] ${
                     isScrolled
                      ? "text-dark-teal border-transparent hover:border-dark-teal"
                      : "text-white border-transparent hover:border-white hover:text-white"
                  } transition-colors duration-300`}
                >
                  {text}
                </a>
              ))}
              <a
                target="_blank"
                href="https://api.whatsapp.com/send/?phone=6283831556160&text=Hi%2C+I+wanna+ask+question+about+Zamrood&type=phone_number&app_absent=0"
              >
                <button
                  className={`button text-center inline-flex justify-center items-center px-6 py-2.5 rounded-full capitalize font-bold text-sm lg:text-base transition-colors ease-in-out duration-300 ${
                    isScrolled
                      ? "text-dark-teal border-2 border-dark-teal hover:bg-dark-teal hover:text-vista-white"
                      : "text-white border-2 border-white hover:bg-dark-teal hover:text-vista-white"
                  } w-fit ml-auto`}
                >
                  Need Assistance?
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
