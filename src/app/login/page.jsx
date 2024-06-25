"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import SocialLogIn from "@/components/shared/SocialLogIn";

const Login = () => {
  const router = useRouter();

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  // handle the change of input field
  const handleChange = (name, value) => {
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle the signInSubmit
  const signInSubmit = async (e) => {
    e.preventDefault();
    const response = await signIn("credentials", {
      email: credentials.email,
      password: credentials.password,
      redirect: false,
    });
    if (response.status === 200) router.push("/");
  };

  return (
    <div className="container mx-auto my-16">
      <div className="mx-5 flex flex-col-reverse md:flex-row gap-16">
        <div className="flex-grow">
          <Image
            src={"/assets/images/login/login.svg"}
            height={582}
            width={460}
            alt="login image"
            className="h-full"
          />
        </div>
        <div className="border border-gray-700 rounded-xl py-5 px-16">
          <h1 className="text-2xl md:text-4xl font-semibold text-center">
            Sign In
          </h1>
          <form className="max-w-sm mx-auto mt-16 space-y-6">
            {/* Email part */}
            <div>
              <label htmlFor="email">Email</label>
              <label className="input input-bordered flex items-center gap-2 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  onChange={(e) => handleChange("email", e.target.value)}
                  type="text"
                  className="grow"
                  placeholder="Email"
                />
              </label>
            </div>

            {/* Password part*/}
            <div>
              <label htmlFor="email">Password</label>
              <label className="input input-bordered flex items-center gap-2 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  onChange={(e) => handleChange("password", e.target.value)}
                  type="password"
                  className="grow"
                  placeholder="* * * * * * * *"
                />
              </label>
            </div>

            <button onClick={signInSubmit} className="btn btn-primary w-full">
              Sign In
            </button>
          </form>
          <div className="divider"></div>
          <SocialLogIn />
          <div className="my-6 text-sm">
            <Link href={"/sign-up"}>
              Do not have an Account?{" "}
              <span className="text-blue-600">Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
