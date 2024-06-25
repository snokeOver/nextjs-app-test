import Image from "next/image";
import React from "react";

const Bannner = () => {
  const banners = [
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide2",
      prev: "#slide4",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide3",
      prev: "#slide1",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide4",
      prev: "#slide2",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide1",
      prev: "#slide3",
    },
  ];
  return (
    <div className="container mx-auto mt-10">
      <div className="carousel w-full  h-[85vh] ">
        {banners.map((banner, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full bg-no-repeat bg-cover rounded-xl"
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(7,25,85,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${
                index + 1
              }.jpg)`,
            }}
          >
            <div className="absolute flex flex-col gap-6 text-center md:text-left md:ml-20  md:w-1/2 transform -translate-y-1/2 left-5 right-5 top-1/2">
              <h1 className="text-5xl font-bold">{banner.title}</h1>
              <h1 className="text-xl font-bold">{banner.description}</h1>
              <div>
                <button className="btn btn-primary mr-8">Discover More</button>
                <button className="btn btn-outline text-gray-50">
                  Latest Project
                </button>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={`${banner.next}`} className="btn btn-circle">
                ❮
              </a>
              <a href={`${banner.prev}`} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bannner;
