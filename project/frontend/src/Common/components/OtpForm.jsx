import axios from "axios";
import React, { useEffect, useState } from "react";

function OtpForm() {
  const [otp, setOtp] = useState(null);
  const [userEmail, setEmail] = useState("linwick679@gmail.com");

  const otpSend = () => {
    let genarateCode = Math.floor(1000 + Math.random() * 9000);
    setOtp(genarateCode);
    //console.log(genarateCode);

    axios.post("http://localhost:3000/api/v1/otp", {
      otpCode: genarateCode,
      email: userEmail,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    let data = Object.fromEntries(formData);
    const result = Object.values(data).join("");

    if (result == otp) {
      alert("Correct OTP!");
    } else {
      alert("Wrong OTP!");
    }
  };

  /*  useEffect(()=>{
    otpSend()
  }, []) */

  return (
    <div>
      <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div class="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div class="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div class="flex flex-col items-center justify-center text-center space-y-2">
              <div class="font-semibold text-3xl">
                <p>Email Verification</p>
              </div>
              <div class="flex flex-row text-sm font-medium text-gray-400">
                <p>We have sent a code to your email ba**@dipainhouse.com</p>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit}>
                <div class="flex flex-col space-y-16">
                  <div class="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                    <div class="w-16 h-16 ">
                      <input
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name="first"
                        required
                      />
                    </div>
                    <div class="w-16 h-16 ">
                      <input
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name="second"
                        required
                      />
                    </div>
                    <div class="w-16 h-16 ">
                      <input
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name="third"
                        required
                      />
                    </div>
                    <div class="w-16 h-16 ">
                      <input
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name="fourth"
                        required
                      />
                    </div>
                  </div>

                  <div class="flex flex-col space-y-5">
                    <div>
                      <button
                        type="submit"
                        class="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                      >
                        Verify Account
                      </button>
                    </div>

                    <div class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didn't recieve code?</p>{" "}
                      <a
                        class="flex flex-row items-center text-blue-600"
                        onClick={otpSend}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resend
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtpForm;
