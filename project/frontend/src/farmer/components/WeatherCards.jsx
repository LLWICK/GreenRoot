import React from "react";

function WeatherCards() {
  return (
    <div>
      <div class="m-10 grid gap-5 sm:grid-cols-3  mx-auto max-w-screen-lg">
        <div class="px-4 py-6 shadow-lg shadow-blue-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-14 w-14 rounded-xl bg-blue-400 p-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 2a2 2 0 00-2 2v9a4 4 0 101.5 7.78"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 2a2 2 0 012 2v9a4 4 0 11-1.5 7.78"
            />
          </svg>

          <p class="mt-4 font-medium">Temperature</p>
          <p class="mt-2 text-xl font-medium">
            23.4k
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </p>
          <span class="text-xs text-gray-400">+4.9%</span>
        </div>
        <div class="px-4 py-6 shadow-lg shadow-blue-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-14 w-14 rounded-xl bg-rose-400 p-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 2C8.13 2 5 6 5 10c0 3.87 3.13 8 7 8s7-4.13 7-8c0-4-3.13-8-7-8z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 18v4m-4-4h8"
            />
          </svg>

          <p class="mt-4 font-medium">Humidity</p>
          <p class="mt-2 text-xl font-medium">
            23.4k
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </p>
          <span class="text-xs text-gray-400">+4.9%</span>
        </div>
        <div class="px-4 py-6 shadow-lg shadow-blue-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-14 w-14 rounded-xl bg-green-400 p-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 8h12a4 4 0 000-8h-1M4 16h16a4 4 0 000-8h-2M4 24h8a4 4 0 000-8h-1"
            />
          </svg>

          <p class="mt-4 font-medium">Wind speed</p>
          <p class="mt-2 text-xl font-medium">
            $23.4k
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </p>
          <span class="text-xs text-gray-400">+4.9%</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCards;
