"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SocialLink from "./SocialLink";

const LoginForm = () => {
  const router = useRouter();
  let handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const payload = { email, password };
    toast("submitting............");
    try {
      let logins = await signIn("credentials", {
        email,
        password,
        // callbackUrl: "/",
        redirect: false,
      });
      if (logins.ok) {
        toast.success("you has to successfully");
        router.push("/");
        form.reset();
      } else {
        toast.error("Authentication Failed");
      }

      console.log(logins);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Image
              src={"./assets/images/login/login.svg"}
              width={300}
              height={3000}
              alt="login images"
            />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    name="email"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    name="password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </form>
            </div>
            <SocialLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
