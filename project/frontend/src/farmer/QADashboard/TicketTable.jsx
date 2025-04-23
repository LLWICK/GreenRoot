import axios from "axios";
import React, { useEffect, useState } from "react";

const tickets = [
  {
    id: "#12534",
    subject:
      "Quo laudantium error corporis accusamus unde, labore quidem non ...",
    requester: "Marla Darsuz",
    updated: "Tuesday 09:56",
    group: "UK Support",
    assignee: "Nico Braun",
    priority: "Low",
    messages: [
      {
        author: "Marla Darsuz",
        content:
          "Hi, I'm facing an issue with the system not updating. Can you help?",
        time: "Tuesday 09:56",
      },
      {
        author: "Nico Braun",
        content: "Thanks for reporting. We are looking into it.",
        time: "Tuesday 10:10",
      },
    ],
  },
  // Add more ticket objects as needed
];

const TicketDashboard = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [solutions, setSolutions] = useState([]);
  const handleSelect = (ticket) => {
    axios
      .get(
        `http://localhost:3000/api/researcher/solutions/ticket/${ticket._id}`
      )
      .then((res) => {
        setSolutions(res.data);
      })
      .catch((e) => {
        setSolutions(false);
      });

    setSelectedTicket(ticket);
  };

  const [tks, setTicketInfo] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/ticket").then((res) => {
      setTicketInfo(res.data.data);
    });
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Ticket List */}
      <div className="mx-5  w-2/5 p-4 overflow-y-auto border-r bg-white">
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-700">
            Tickets
            <button className="float-right  mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Create ticket
            </button>
          </h2>
        </div>
        <ul>
          {/* Original fetch data */}

          {tks.map((ticket, index) => (
            <li
              key={index}
              onClick={() => handleSelect(ticket)}
              className={`p-3 mb-2 rounded cursor-pointer border hover:bg-gray-100 ${
                selectedTicket?.id === ticket._id
                  ? "bg-blue-50 border-blue-500"
                  : "border-gray-200"
              }`}
            >
              <p className="font-semibold text-gray-800">{ticket.subject}</p>
              <p className="text-sm text-gray-500">
                From Toni • Updated {ticket.createdAt}
              </p>
              <div className="mt-1">
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium text-white ${
                    ticket.priority === "Low"
                      ? "bg-red-500"
                      : ticket.priority === "Medium"
                      ? "bg-yellow-400 text-black"
                      : "bg-green-500"
                  }`}
                >
                  {ticket.priority}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Ticket Details & Replies */}
      <div className="flex-1 p-6 overflow-y-auto">
        {selectedTicket ? (
          <>
            <div className="border-b pb-4 mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {selectedTicket.subject}
              </h2>
              <p className="text-gray-600"></p>
              <img src={selectedTicket.image} />
              <p className="text-sm text-gray-500 mt-1"></p>
            </div>
            <div className="space-y-4">
              {/* {selectedTicket.messages.map((msg, idx) => (
                <div key={idx} className="bg-white p-4 shadow rounded">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-800">
                      {msg.author}
                    </span>
                    <span className="text-xs text-gray-500">{msg.time}</span>
                  </div>
                  <p className="text-gray-700">{msg.content}</p>
                </div>
              ))} */}

              <div className="bg-white p-4 shadow rounded">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-800">
                    {selectedTicket.updatedAt}
                  </span>
                  <span className="text-xs text-gray-500">
                    {selectedTicket.createdAt}
                  </span>
                </div>
                <p className="text-gray-700">{selectedTicket.description}</p>
              </div>

              {solutions ? (
                solutions.map((sol, index) => {
                  return (
                    <div className="bg-white p-4 shadow rounded">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-800">
                          {sol.createdAt}
                        </span>
                        <span className="text-xs text-gray-500">
                          {sol.updatedAt}
                        </span>
                      </div>
                      <p className="text-gray-700">{sol.description}</p>
                    </div>
                  );
                })
              ) : (
                <p className=" text-gray-500">No replies yet</p>
              )}

              <div className="mt-6">
                <textarea
                  rows="4"
                  placeholder="Write your reply..."
                  className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Send Reply
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-gray-500 text-center mt-20">
            Select a ticket to view details
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketDashboard;
