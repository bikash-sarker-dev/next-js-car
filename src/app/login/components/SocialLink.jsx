"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

const SocialLink = () => {
  let router = useRouter();
  const session = useSession();

  const handleSocialLink = async (providerName) => {
    toast("login.........");
    let result = await signIn(providerName, { redirect: false });
    if (result.ok) {
      router.push("/");
      toast.success("you have successfully login");
    } else {
      toast.error("Authentication Failed");
    }
  };
  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/");
      toast.success("you have successfully login");
    }
  }, [session?.status]);
  return (
    <div className="text-center space-x-4 mb-5">
      <button
        type="button"
        className="btn btn-info btn-sm"
        onClick={() => handleSocialLink("google")}
      >
        google
      </button>
      <button
        type="button"
        className="btn btn-info btn-sm"
        onClick={() => handleSocialLink("github")}
      >
        gitHub
      </button>
    </div>
  );
};

export default SocialLink;
