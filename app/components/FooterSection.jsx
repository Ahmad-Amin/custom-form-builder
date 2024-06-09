"use client";
import { Spinner } from "@chakra-ui/react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const FooterSection = () => {
  const [email, setEmail] = useState("");
  const [submited, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const storeDataToDB = async (e) => {
    setLoading(true);
    e.preventDefault();
    const response = fetch(
      "https://dynamic-form-builder-fd98d-default-rtdb.firebaseio.com/emailEntries.json",
      {
        method: "POST",
        Headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
        }),
      }
    );

    if (response) {
      setEmail("");
      setSubmitted(true);
      toast.success("Thank you for subscribing, We will get back to you soon");
    } else {
      toast.error("Something went wrong, Please try again");
    }

    setLoading(false);
  };

  return (
    <div id='getStarted' className="bg-[#CBE4DE] py-20 px-6">
      <div>
        <p className=" text-center text-sm mb-4 text-[#2E4F4F]">
          GRAB ARRAY FOR BEST PRICE TODAY
        </p>
        <p className=" text-[#2E4F4F] font-semibold text-2xl md:text-4xl w-full md:w-7/12 mx-auto text-center">
          let&apos;s connect via email and my team will reach out to you for
          access
        </p>
        <div className=" text-center w-full flex justify-center mt-12">
          <div className=" flex flex-col gap-3 w-full items-center">
            {loading ? (
              <Spinner size="lg" className=" w-6 h-6" />
            ) : (
              <>
                {!submited && (
                  <>
                    <div className="w-96">
                      <input
                        type="email"
                        placeholder="Enter Your Email Address"
                        className=" placeholder:text-[#AAAAAA] border border-[#2E4F4F] rounded-md p-2 w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="w-96">
                      <button
                        onClick={storeDataToDB}
                        className="bg-[#0E8388] hover:bg-[#246c6e] transform transition-all duration-150 text-white rounded-md py-2 px-5 w-full"
                      >
                        Let&apos;s connect
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
            {submited && (
              <div className="w-96">
                <p>
                  Thanks for connecting. We will reach out to you on this Email
                  ⭐
                </p>
              </div>
            )}
          </div>
        </div>
        <p className=" text-center text-secondaryText text-sm mt-5">
          We will get back to you. Hang on Tight
        </p>
      </div>
    </div>
  );
};

export default FooterSection;
