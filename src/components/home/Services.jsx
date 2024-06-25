import React from "react";
import ServiceCard from "../cards/ServiceCard";

import { getServices } from "@/helper/apiCall";

const Services = async () => {
  const services = await getServices();

  return (
    <div className=" my-20">
      <div className="flex flex-col text-center gap-2 mb-16">
        <h4 className="font-semibold text-primary">Service</h4>
        <h1 className="text-4xl font-bold">Our Service Area</h1>
        <p className="text-gray-400 w-full md:w-1/2 mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services?.length > 0 &&
          services?.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
      </div>
    </div>
  );
};

export default Services;
