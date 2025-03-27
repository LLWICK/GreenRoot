import { Link } from "react-router-dom";


const SideBar = () => {
    return ( 
        <aside className="col-span-2 bg-white h-screen shadow-xl px-3 w-60 overflow-x-hidden">
        <div className="space-y-6 mt-10">
            <h1 className="hidden md:block font-bold text-xl text-center text-teal-600">My App</h1>
            <div id="profile" className="space-y-3 text-center">
            <img
                src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80"
                alt="User Avatar"
                className="w-16 rounded-full mx-auto"
            />
            <h2 className="font-medium text-sm text-teal-500">Eduard Pantazi</h2>
            <p className="text-xs text-gray-500">Retail seller</p>
            </div>
            <div className="border-2 border-gray-200 rounded-md flex">
            <input
                type="text"
                className="w-full px-2 py-3 text-sm text-gray-600 focus:outline-none"
                placeholder="Search"
            />
            <button className="px-2 py-3 hidden md:block">
                <svg
                className="w-4 h-4 fill-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                ></path>
                </svg>
            </button>
            </div>
            <div id="menu" className="flex flex-col space-y-2">
            <Link
                to="/seller/home"
                className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white rounded-md transition duration-150 ease-in-out"
            >
                Homepage
            </Link>
            <Link
                to="/seller/Inventroy"
                className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white rounded-md transition duration-150 ease-in-out"
            >
                Inventroy
            </Link>
            <Link
                to="/seller/bulkOrders"
                className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white rounded-md transition duration-150 ease-in-out"
            >
                Bulk Orders
            </Link>
            <Link
                to="#"
                className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white rounded-md transition duration-150 ease-in-out"
            >
                normal orders
            </Link>
            </div>
        </div>
        </aside>
     );
}
 
export default SideBar;