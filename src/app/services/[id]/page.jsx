import { getServiceDetails } from "@/helper/apiCall";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Service Details",
  description: "Service Details Page",
};
export const getMetadata = () => {};

const ServiceDetails = async ({ params }) => {
  const serviceDetails = await getServiceDetails(params.id);
  return (
    <div className="container mx-auto my-10">
      <div>
        <div className="relative h-72">
          <Image
            className="absolute h-72 w-full left-0 top-0 object-cover"
            src={serviceDetails.img}
            alt="service"
            width={1920}
            height={1080}
            style={{ width: "90vw" }}
          />
          <div className="absolute h-full left-0 top-0 flex items-center justify-center">
            <h1 className="text-gray-100 text-3xl font-bold flex justify-center items-center">
              {serviceDetails.description}
            </h1>
          </div>
        </div>

        <div className="my-6">
          <div className="grid grid-cols-3 gap-8">
            <div className=" col-span-2 grid grid-cols-2 gap-5">
              {[1, 2].map((item, index) => (
                <div
                  className="bg-rose-100 p-4 border-t-4 border-t-rose-500 rounded-xl"
                  key={index}
                ></div>
              ))}
            </div>

            <div className="p-6 bg-gray-100">
              <Image
                className="w-full object-cover h-40"
                src={serviceDetails.img}
                alt="image"
                width={1920}
                height={1080}
              />
              <div className="flex my-4">
                <h2 className="text-xl font-bold">
                  Price:
                  <span className="text-2xl text-rose-500">
                    ${serviceDetails.price}
                  </span>
                </h2>
              </div>
              <Link
                href={`/checkout/${serviceDetails._id}`}
                className="btn btn-primary h-0 min-h-8 rounded-sm"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
