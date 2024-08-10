"use client";
import React, { useState, useEffect } from "react";

export default function Article() {
  const [Articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pandooin.com/api/zamrood/article"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setArticles(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="article" className="px-4 lg:py-[72px] w-full max-w-7xl mx-auto flex flex-col space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="font-unbounded text-[22px] lg:text-4xl font-bold text-dark-aquaman">
          Articles
        </h2>
        <p className="text-base lg:text-2xl text-dark-aquaman">
          Our curated writings, offering something for every reader.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
        {Articles.map((article, index) => (
          <a
            key={article.id || index} // Use unique article ID if available
            href= "#"// Assume each article has a URL
            className={`w-full flex flex-col ${
              index % 5 === 0 ? "lg:row-span-2 lg:col-span-2" : ""
            }`}
          >
            <div className="relative w-full h-full aspect-video overflow-hidden">
              <img
                src={article.featured_image || "/Article1.png"} // Use image from article data
                alt={article.title || "Article Image"}
                className="object-cover object-center grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all ease-in-out duration-300 h-full w-full"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </div>
            <div className="w-full p-6 lg:p-4 bg-[#0B7373] flex flex-col space-y-2">
              <h2 className="m-0 text-vista-white text-base font-bold line-clamp-2">
                {article.title || "Default Article Title"}
              </h2>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
