"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogIn = () => {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session?.status === "authenticated") router.push("/");
  }, [session?.status, router]);

  return (
    <div className="flex gap-8 items-center justify-center text-3xl">
      <button
        onClick={() => signIn("google")}
        className="border border-primary rounded-full p-3 text-pink-500"
      >
        <FaGoogle />
      </button>
      <button
        onClick={() => signIn("github")}
        className="border border-primary rounded-full p-3"
      >
        <FaGithub />
      </button>
    </div>
  );
};

export default SocialLogIn;
