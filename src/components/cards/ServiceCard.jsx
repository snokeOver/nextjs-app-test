import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <Image
          src={service.img}
          width={720}
          height={120}
          className="max-h-48"
          alt="services"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service.title}</h2>

        <div className="card-actions justify-between items-center">
          <p className="text-primary font-semibold">Price: ${service.price}</p>
          <Link
            href={`/services/${service._id}`}
            className="btn btn-primary h-0 min-h-8 rounded-sm"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
