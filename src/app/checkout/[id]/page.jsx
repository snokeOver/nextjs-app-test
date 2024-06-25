"use client";
import { getServiceDetails } from "@/helper/apiCall";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";

const CheckOut = ({ params }) => {
  const [credentials, setCredentials] = useState({
    serviceId: "",
    name: "",
    phone: "",
    date: "",
    amount: "",
    address: "",
    email: "",
  });
  const { data } = useSession();

  useState(() => {
    const loadService = async () => {
      const serviceDetails = await getServiceDetails(params.id);

      setCredentials((prev) => ({
        ...prev,
        serviceId: serviceDetails._id,
        name: data?.user?.name,
        email: data?.user?.email,
        amount: serviceDetails.price,
      }));
    };
    if (params) loadService();
  }, [params]);

  // handle the change of input field
  const handleChange = (namE, value) => {
    setCredentials((prev) => ({
      ...prev,
      [namE]: value,
    }));
  };

  // handle the orderConfirmSubmit
  const orderConfirmSubmit = async () => {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BASEURL}/checkout/api`,
      credentials
    );
    // console.log(data);
  };

  return (
    <div className="container mx-auto my-10">
      <div className="relative h-72 mx-3">
        <Image
          className="absolute h-72 w-full left-0 top-0 object-cover mx-auto "
          src={"/assets/images/checkout/checkout.png"}
          alt="service"
          width={1920}
          height={1080}
        />
        <div className="absolute  left-1/2 transform -translate-x-1/2  bottom-0 p-0 flex items-center justify-center">
          <h1 className="text-primary text-3xl font-bold flex justify-center items-center">
            Check Out
          </h1>
        </div>
      </div>

      {/* form part */}
      <div className="my-12 p-12">
        <form className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {/* Name part */}
          <div>
            <label htmlFor="name">Name</label>
            <label className="input input-bordered flex items-center gap-2 mt-2">
              <input
                onChange={(e) => handleChange("name", e.target.value)}
                type="text"
                className="grow"
                placeholder={credentials.name || "Name"}
              />
            </label>
          </div>

          {/* Email part */}
          <div>
            <label htmlFor="email">Email</label>
            <label className="input input-bordered flex items-center gap-2 mt-2">
              <input
                onChange={(e) => handleChange("email", e.target.value)}
                type="text"
                className="grow"
                placeholder={credentials.email || "Email"}
              />
            </label>
          </div>

          {/* Phone part */}
          <div>
            <label htmlFor="phone">Phone number</label>
            <label className="input input-bordered flex items-center gap-2 mt-2">
              <input
                onChange={(e) => handleChange("phone", e.target.value)}
                type="number"
                className="grow"
                placeholder="Phone Number"
              />
            </label>
          </div>

          {/* Date part */}
          <div>
            <label htmlFor="date">Date</label>
            <label className="input input-bordered flex items-center gap-2 mt-2">
              <input
                onChange={(e) => handleChange("date", e.target.value)}
                type="date"
                className="grow"
              />
            </label>
          </div>
          {/* Amount part */}
          <div>
            <label htmlFor="amount">Amount</label>
            <label className="input input-bordered flex items-center gap-2 mt-2">
              <input
                onChange={(e) => handleChange("amount", e.target.value)}
                type="number"
                className="grow"
                placeholder={credentials.amount || "amount"}
              />
            </label>
          </div>

          {/* Address part */}
          <div>
            <label htmlFor="address">Address</label>
            <label className="input input-bordered flex items-center gap-2 mt-2">
              <input
                onChange={(e) => handleChange("address", e.target.value)}
                type="text"
                className="grow"
                placeholder="Address"
              />
            </label>
          </div>
        </form>
        <button onClick={orderConfirmSubmit} className="btn btn-primary w-full">
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
