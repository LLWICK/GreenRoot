import React, { useState } from "react";
import "../extras/landing.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LandingBanner() {
  const handleSubmit = () => {
    alert("Form submitted!");
  };
  return (
    <div>
      <div class="grid grid-cols-12">
        <div class="col-span-4 text-white font-sans font-bold bg-black min-h-screen pl-7">
          <div class="grid grid-rows-6 grid-flow-col min-h-screen items-center justify-items-start">
            <div class="row-span-4 row-start-2 text-4xl">
              Sign In
              <div class="pt-10 pr-20">
                <label class="text-sm font-sans font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Write your email"
                  class="w-full bg-black py-3 px-12 border hover: border-gray-500 rounded shadow text-base font-sans"
                  required
                />
              </div>
              <form onSubmit={handleSubmit}>
                <div class="pt-2 pr-20">
                  <label class="text-sm font-sans font-medium">Password</label>
                  <input
                    type="password"
                    placeholder="Write your password"
                    class=" w-full bg-black py-3 px-12 border hover: border-gray-500 rounded shadow text-base font-sans"
                    required
                  />
                  <a
                    href=""
                    class="text-sm font-sans font-medium text-gray-600 underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <div class="text-sm font-sans font-medium w-full pr-20 pt-14">
                  <button
                    type="submit"
                    class="text-center w-full py-4 bg-teal-500 hover:bg-teal-600 rounded-md text-white"
                  >
                    SIGN IN
                  </button>
                </div>
              </form>
            </div>

            <a
              href="#"
              class="text-sm font-sans font-medium text-gray-400 underline"
            >
              Don´t have an account? Sign up
            </a>
          </div>
        </div>

        <div class="banner col-span-8 text-white font-sans font-bold"></div>
      </div>
    </div>
  );
}

export default LandingBanner;
