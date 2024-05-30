"use client";
import { useState } from "react";
import { auth } from "../../firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import OfficeWorkingAnimation from "../../app/animations/office-working.json";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import Link from "next/link";
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const signInWithEmail = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response.user.accessToken) {
        router.push("/dashboard");
      }
      console.log(response);
    } catch (error) {
      console.error("Error signing in with email and password", error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const response = await signInWithPopup(auth, provider);
      if (response.user.accessToken) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  return (
    <div className=" w-full h-full">
      <section class="bg-[#CBE4DE]">
        <div className=" grid md:grid-cols-2">
          <div className=" flex items-center justify-center h-screen bg-gray-100 relative">
            <Link href="/">
              <div className=" absolute top-10 left-10 flex flex-row items-center gap-2 text-[#0E8388]">
                <ArrowLeftIcon width={15} />
                <p className="!mb-0 font-bold ">Back</p>
              </div>
            </Link>
            <div className=" w-[550px] bg-white shadow-lg rounded-lg ">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div class="ml-3 text-sm">
                        <label
                          for="remember"
                          class="text-gray-500 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={signInWithEmail}
                    class="w-full bg-[#0E8388] hover:bg-[#246c6e] text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign in
                  </button>
                  <p className=" text-sm">
                    New To Platform? <Link className=" text-blue-500 underline" href="/sign-up">Create New Account</Link>
                  </p>
                  <hr />

                  <button
                    type="submit"
                    onClick={signInWithGoogle}
                    class="w-full flex flex-row gap-3 items-center justify-center bg-white hover:bg-gray-100 text-black border font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    <div className=" w-7 h-7">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_17_40)">
                          <path
                            d="M23.9996 19.6363V28.9309H36.916C36.3488 31.9199 34.6468 34.4509 32.0941 36.1527L39.8831 42.1964C44.4213 38.0075 47.0395 31.8547 47.0395 24.5456C47.0395 22.8438 46.8868 21.2073 46.6031 19.6366L23.9996 19.6363Z"
                            fill="#4285F4"
                          />
                          <path
                            d="M10.5494 28.568L8.79263 29.9128L2.57434 34.7564C6.52342 42.589 14.6174 48 23.9991 48C30.4789 48 35.9116 45.8618 39.8826 42.1964L32.0936 36.1528C29.9554 37.5927 27.2281 38.4656 23.9991 38.4656C17.7591 38.4656 12.4575 34.2547 10.5592 28.5819L10.5494 28.568Z"
                            fill="#34A853"
                          />
                          <path
                            d="M2.57436 13.2436C0.938084 16.4726 0 20.1163 0 23.9999C0 27.8834 0.938084 31.5271 2.57436 34.7561C2.57436 34.7777 10.5599 28.5597 10.5599 28.5597C10.08 27.1197 9.79624 25.5925 9.79624 23.9996C9.79624 22.4067 10.08 20.8795 10.5599 19.4395L2.57436 13.2436Z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M23.9996 9.55636C27.5342 9.55636 30.676 10.7781 33.1851 13.1345L40.0577 6.2619C35.8904 2.37833 30.4797 0 23.9996 0C14.6179 0 6.52342 5.38908 2.57434 13.2437L10.5597 19.44C12.4578 13.7672 17.7596 9.55636 23.9996 9.55636Z"
                            fill="#EA4335"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_17_40">
                            <rect width="48" height="48" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p>Sign in with Google</p>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className=" w-full h-full flex items-center justify-center">
            <div className="max-w-[450px] max-h-[450px] mx-auto md:mx-0 p-6 md:px-0">
              <Lottie animationData={OfficeWorkingAnimation} loop={true} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
