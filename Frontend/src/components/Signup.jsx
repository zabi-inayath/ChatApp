import React from "react";
import { set, useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AuthProvider.jsx";

function Signup() {
  const [authUser, setAuthUser] = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const password = watch("password", "");
  const confirmpass = watch("confirmpass", "");
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      confirmpass: data.confirmpass
    };
    await axios
      .post("http://localhost:5000/user/signup", userInfo)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          alert("Signup Successful! You can log in now.");
        }
        localStorage.setItem("msg", JSON.stringify(response.data));
        setAuthUser(response.data);
      })
      .catch((error) => {
        console.error(error);
        if (error.response) {
          alert(`Error: ${error.response.data.error}`);
        }
      });
  };
  const validatePasswordMatch = (value) => {
    return value === password || "Password doesn't match";
  };
  return (
    <>
      <div>
        <div className="flex h-screen items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border border-white px-6 py-4 rounded-md space-y-3 w-96"
          >
            <h1 className="text-2xl items-center text-green-700 font-bold">
              Chat App <span className="text-sm text-gray-400">by Zabi</span>
            </h1>
            <h2 className="text-2xl items-center">
              Create a new{" "}
              <span className="text-green-700 font-semibold">Account</span>
            </h2>

            {/* Full Name */}
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                {...register("name", { required: true })}
                type="text"
                className="grow"
                placeholder="Full Name"
              />
            </label>
            {errors.name && (
              <span className="text-red-600 text-sm font-semibold">
                *This field is required
              </span>
            )}

            {/* Email */}
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8  .978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                {...register("email", { required: true })}
                type="text"
                className="grow"
                placeholder="Email"
              />
            </label>
            {errors.email && (
              <span className="text-red-600 text-sm font-semibold">
                *This field is required
              </span>
            )}

            {/* Password */}
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                {...register("password", { required: true })}
                type="password"
                className="grow"
                placeholder="Password"
              />
            </label>
            {errors.password && (
              <span className="text-red-600 text-sm font-semibold">
                *This field is required
              </span>
            )}

            {/* Confirm Password */}
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="Re-enter password"
                {...register("confirmpass", {
                  required: true,
                  validate: validatePasswordMatch
                })}
              />
            </label>
            {errors.confirmpass && (
              <span className="text-red-600 text-sm font-semibold">
                {errors.confirmpass.message}
              </span>
            )}

            {/* Texr & Button */}
            <div className="flex justify-between">
              <input
                type="submit"
                value="SignUp"
                className="text-white bg-green-900 w-full rounded-lg py-2 cursor-pointer"
              ></input>
              {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <p>
              Already have an account?{" "}
              <span className="text-blue-500 underline cursor-pointer ml-1">
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;