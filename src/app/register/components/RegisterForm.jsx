"use client";

import registerAction from "@/app/actions/authentication/registerAction";
import Image from "next/image";

const RegisterForm = () => {
  let handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const payload = { name, email, password };
    console.log(payload);
    let res = await registerAction(payload);
    console.log(res);
    form.reset();
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
                  <label className="label">user Name</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Email"
                    name="username"
                  />
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

                  <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
