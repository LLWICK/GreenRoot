import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function OrderTable() {
  const { uid } = useParams();
  const [orderList, setList] = useState([]);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/farmer/order/parameters",
          {
            farmerId: String(uid),
          }
        );

        console.log(response.data.data);

        setList(response.data.data);
      } catch (error) {
        console.error("Error fetching Orders:", error);
      }
    };

    if (uid) {
      fetchOrderData();
    }
  }, [uid]);

  const searchFunction = (e) => {};

  return (
    <div style={{ float: "left" }}>
      <section class="py-24 relative">
        <div class="w-full max-w-7xl mx-auto px-4 md:px-8">
          <h2 class="font-manrope font-extrabold text-3xl lead-10 text-black mb-9">
            Order History
          </h2>

          <div class="flex sm:flex-col lg:flex-row sm:items-center justify-between">
            <ul class="flex max-sm:flex-col sm:items-center gap-x-14 gap-y-3">
              <li class="font-medium text-lg leading-8 cursor-pointer text-indigo-600 transition-all duration-500 hover:text-indigo-600">
                All Order
              </li>
              <li class="font-medium text-lg leading-8 cursor-pointer text-black transition-all duration-500 hover:text-indigo-600">
                Summary
              </li>
              <li class="font-medium text-lg leading-8 cursor-pointer text-black transition-all duration-500 hover:text-indigo-600">
                Completed
              </li>
              <li class="font-medium text-lg leading-8 cursor-pointer text-black transition-all duration-500 hover:text-indigo-600">
                Cancelled
              </li>
            </ul>
            <div class="flex max-sm:flex-col items-center justify-end gap-2 max-lg:mt-5">
              <div class="flex rounded-full py-3 px-4 border border-gray-300 relative">
                <svg
                  class="relative "
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 7.75H16.5M11.9213 11.875H11.928M11.9212 14.125H11.9279M9.14676 11.875H9.1535M9.14676 14.125H9.1535M6.37088 11.875H6.37762M6.37088 14.125H6.37762M5.25 4.75V1.75M12.75 4.75V1.75M7.5 18.25H10.5C13.3284 18.25 14.7426 18.25 15.6213 17.3713C16.5 16.4926 16.5 15.0784 16.5 12.25V9.25C16.5 6.42157 16.5 5.00736 15.6213 4.12868C14.7426 3.25 13.3284 3.25 10.5 3.25H7.5C4.67157 3.25 3.25736 3.25 2.37868 4.12868C1.5 5.00736 1.5 6.42157 1.5 9.25V12.25C1.5 15.0784 1.5 16.4926 2.37868 17.3713C3.25736 18.25 4.67157 18.25 7.5 18.25Z"
                    stroke="#111827"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <input
                  type="text"
                  name="from-dt"
                  id="from-dt"
                  class="font-semibold px-2 text-sm text-gray-900 outline-0 appearance-none flex flex-row-reverse cursor-pointer w-28 placeholder-gray-900"
                  placeholder="11-01-2023"
                />
              </div>
              <p class="font-medium text-lg leading-8 text-black">To</p>
              <div class="flex rounded-full py-3 px-4 border border-gray-300 relative">
                <svg
                  class="relative "
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 7.75H16.5M11.9213 11.875H11.928M11.9212 14.125H11.9279M9.14676 11.875H9.1535M9.14676 14.125H9.1535M6.37088 11.875H6.37762M6.37088 14.125H6.37762M5.25 4.75V1.75M12.75 4.75V1.75M7.5 18.25H10.5C13.3284 18.25 14.7426 18.25 15.6213 17.3713C16.5 16.4926 16.5 15.0784 16.5 12.25V9.25C16.5 6.42157 16.5 5.00736 15.6213 4.12868C14.7426 3.25 13.3284 3.25 10.5 3.25H7.5C4.67157 3.25 3.25736 3.25 2.37868 4.12868C1.5 5.00736 1.5 6.42157 1.5 9.25V12.25C1.5 15.0784 1.5 16.4926 2.37868 17.3713C3.25736 18.25 4.67157 18.25 7.5 18.25Z"
                    stroke="#111827"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <input
                  type="text"
                  name="to-dt"
                  id="to-dt"
                  class="font-semibold px-2 text-sm text-gray-900 outline-0 appearance-none flex flex-row-reverse cursor-pointer w-28 placeholder-gray-900"
                  placeholder="11-01-2023"
                />
              </div>
            </div>
          </div>
          <div class="mt-7 border border-gray-300 pt-9">
            <div class="flex max-md:flex-col items-center justify-between px-3 md:px-11">
              <div class="flex items-center gap-3 max-md:mt-5">
                <button class="rounded-full px-7 py-3 bg-white text-gray-900 border border-gray-300 font-semibold text-sm shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-400">
                  Show Invoice
                </button>
                <button class="rounded-full px-7 py-3 bg-indigo-600 shadow-sm shadow-transparent text-white font-semibold text-sm transition-all duration-500 hover:shadow-indigo-400 hover:bg-indigo-700">
                  Buy Now
                </button>
              </div>
            </div>
            <svg
              class="my-9 w-full"
              xmlns="http://www.w3.org/2000/svg"
              width="1216"
              height="2"
              viewBox="0 0 1216 2"
              fill="none"
            >
              <path d="M0 1H1216" stroke="#D1D5DB" />
            </svg>

            {orderList.map((element) => {
              return (
                <div>
                  <svg
                    class="my-9 w-full"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1216"
                    height="2"
                    viewBox="0 0 1216 2"
                    fill="none"
                  >
                    <path d="M0 1H1216" stroke="#D1D5DB" />
                  </svg>
                  <div class="flex max-lg:flex-col items-center gap-8 lg:gap-24 px-3 md:px-11">
                    <div class="grid grid-cols-4 w-full">
                      <div className="col-span-4 sm:col-span-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-24 h-24 max-sm:mx-auto text-gray-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4a2 2 0 001-1.73z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3.27 6.96L12 12.01l8.73-5.05"
                          />
                        </svg>
                      </div>

                      <div class="col-span-4 sm:col-span-3 max-sm:mt-4 sm:pl-8 flex flex-col justify-center max-sm:items-center">
                        <h6 class="font-manrope font-semibold text-2xl leading-9 text-black mb-3 whitespace-nowrap">
                          {element.items[0].name}
                        </h6>
                        <p class="font-normal text-lg leading-8 text-gray-500 mb-8 whitespace-nowrap">
                          By: {element._id}
                        </p>
                        <div class="flex items-center max-sm:flex-col gap-x-10 gap-y-3">
                          <span class="font-normal text-lg leading-8 text-gray-500 whitespace-nowrap">
                            Qty: {element.items.length}
                          </span>
                          <p class="font-semibold text-xl leading-8 text-black whitespace-nowrap">
                            Price Rs. {element.totalPrice}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center justify-around w-full  sm:pl-28 lg:pl-0">
                      <div class="flex flex-col justify-center items-start max-sm:items-center">
                        <p class="font-normal text-lg text-gray-500 leading-8 mb-2 text-left whitespace-nowrap">
                          Status
                        </p>
                        <p class="font-semibold text-lg leading-8 text-green-500 text-left whitespace-nowrap">
                          {element.status}
                        </p>
                      </div>
                      <div class="flex flex-col justify-center items-start max-sm:items-center">
                        <p class="font-normal text-lg text-gray-500 leading-8 mb-2 text-left whitespace-nowrap">
                          Placed date
                        </p>
                        <p class="font-semibold text-lg leading-8 text-black text-left whitespace-nowrap">
                          {element.createdAt.split("T")[0]}
                        </p>
                      </div>

                      <div class="flex flex-col justify-center items-start max-sm:items-center">
                        <Link
                          to={`/farmer/${uid}/order/${element._id}/update`}
                          class="rounded-full px-7 py-3 bg-indigo-600 shadow-sm shadow-transparent text-white font-semibold text-sm transition-all duration-500 hover:shadow-indigo-400 hover:bg-indigo-700"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <svg
              class="mt-9 w-full"
              xmlns="http://www.w3.org/2000/svg"
              width="1216"
              height="2"
              viewBox="0 0 1216 2"
              fill="none"
            >
              <path d="M0 1H1216" stroke="#D1D5DB" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OrderTable;
