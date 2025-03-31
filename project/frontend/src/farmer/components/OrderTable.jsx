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

  return (
    <div style={{ float: "left" }}>
      <div class="mx-auto max-w-screen-xl bg-white">
        <h1 class="mt-20 mb-10 ml-5 text-2xl font-bold text-gray-900">
          Order Management
        </h1>
        <div class="bg-white py-2 px-3">
          <nav class="flex flex-wrap gap-4">
            <a
              href="#"
              class="inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:border-b-purple-600 hover:text-purple-600"
            >
              {" "}
              Account{" "}
            </a>

            <a
              href="#"
              class="inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:border-b-purple-600 hover:text-purple-600"
            >
              {" "}
              Settings{" "}
            </a>

            <a
              href="#"
              class="inline-flex whitespace-nowrap border-b-2 border-transparent border-b-purple-600 py-2 px-3 text-sm font-semibold text-purple-600 transition-all duration-200 ease-in-out"
            >
              {" "}
              Orders{" "}
            </a>

            <a
              href="#"
              class="inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:border-b-purple-600 hover:text-purple-600"
            >
              {" "}
              Sales{" "}
            </a>

            <a
              href="#"
              class="inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:border-b-purple-600 hover:text-purple-600"
            >
              {" "}
              Suppliers{" "}
            </a>
          </nav>
        </div>
      </div>
      <div class="w-fit bg-gray-50">
        <div class="mx-auto max-w-screen-xl px-2 py-10">
          <div class="mt-4 w-full">
            <div class="flex w-full flex-col items-center justify-between space-y-2 sm:flex-row sm:space-y-0">
              <form class="relative flex w-full max-w-2xl items-center">
                <svg
                  class="absolute left-2 block h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="11" cy="11" r="8" class=""></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
                </svg>
                <input
                  type="name"
                  name="search"
                  class="h-12 w-full border-b-gray-400 bg-transparent py-4 pl-12 text-sm outline-none focus:border-b-2"
                  placeholder="Search by Order ID, Date, Customer"
                />
              </form>

              <button
                type="button"
                class="relative mr-auto inline-flex cursor-pointer items-center rounded-full border border-gray-200 bg-white px-5 py-2 text-center text-sm font-medium text-gray-800 hover:bg-gray-100 focus:shadow sm:mr-0"
              >
                <span class="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                <svg
                  class="mr-2 h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                Filter
              </button>
            </div>
          </div>

          <div class="mt-6 overflow-hidden rounded-xl bg-white px-6 shadow lg:px-4">
            <table class="min-w-full border-collapse border-spacing-y-2 border-spacing-x-2">
              <thead class="hidden border-b lg:table-header-group">
                <tr class="">
                  <td class="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">
                    Order Date
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="float-right mt-1 h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="3"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </td>

                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                    Order ID
                  </td>
                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                    Items
                  </td>
                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                    Shop
                  </td>

                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                    Customer
                  </td>
                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                    Dimensions
                  </td>

                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                    Total Price
                  </td>

                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                    Price
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="float-right mt-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </svg>
                  </td>

                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                    Status
                  </td>
                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                    View
                  </td>
                </tr>
              </thead>

              <tbody class="bg-white lg:border-gray-300">
                {orderList.map((element) => {
                  return (
                    <tr class="">
                      <td class="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
                        {element.createdAt.split("T")[0]}
                        <div class="mt-1 flex flex-col text-xs font-medium lg:hidden">
                          <div class="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="mr-1 h-3 w-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                            Jane Doeson
                          </div>
                          <div class="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="mr-1 h-3 w-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M4 6h16M4 10h16M4 14h16M4 18h16"
                              />
                            </svg>
                            Desktop Computer
                          </div>
                          <div class="">24 x 10 x 5 cm</div>
                          <div class="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="mr-1 h-3 w-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                              />
                            </svg>
                            {element.totalPrice}
                          </div>
                        </div>
                      </td>

                      <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
                        62345231143
                      </td>

                      <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
                        {element.items[0].name}
                      </td>

                      <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
                        <img
                          class="h-8 w-8 overflow-hidden rounded-full border p-1"
                          src="data:image/png;base64,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"
                          alt=""
                        />
                      </td>
                      <td class="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
                        Jane Doeson
                      </td>
                      <td class="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
                        24 x 10 x 5 cm
                      </td>
                      <td class="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
                        Rs. {element.totalPrice}
                      </td>

                      <td class="whitespace-no-wrap py-4 text-right text-sm text-gray-600 sm:px-3 lg:text-left">
                        Rs. {element.paymentAmount}
                        <span class="mt-1 ml-auto block w-fit whitespace-nowrap rounded-full bg-purple-100 px-2 py-0.5 text-center text-xs text-purple-800 lg:hidden">
                          {element.status}
                        </span>
                      </td>

                      <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-3 lg:table-cell">
                        <span class="ml-2 mr-3 whitespace-nowrap rounded-full bg-purple-100 px-2 py-0.5 text-purple-800">
                          {element.status}
                        </span>
                      </td>

                      <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-3 lg:table-cell">
                        <Link
                          to={`/farmer/${uid}/order/${element._id}/update`}
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderTable;
