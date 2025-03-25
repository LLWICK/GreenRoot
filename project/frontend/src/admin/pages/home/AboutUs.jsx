import React from 'react'

const AboutUs = () => {
    return (
        <>
            <div className="font-sans text-gray-800">
                {/* Header Section */}
                <header className="bg-white shadow">
                    <div className="container mx-auto px-4">
                        <nav className="flex items-center justify-between py-4">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="images/logo.png" alt="Logo" />
                                </a>
                            </div>
                            <button className="navbar-toggler md:hidden">
                                <span className="text-gray-600">☰</span>
                            </button>
                            <ul className="hidden md:flex space-x-6">
                                <li>
                                    <a href="index.html" className="text-blue-500">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="about.html">About</a>
                                </li>
                                <li>
                                    <a href="service.html">Service</a>
                                </li>
                                <li>
                                    <a href="client.html">Client</a>
                                </li>
                                <li>
                                    <a href="Blog.html">Blog</a>
                                </li>
                                <li>
                                    <a href="contact.html">Contact Us</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>

                {/* About Section */}
                <section className="bg-gray-100 py-12">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h1 className="text-3xl font-bold mb-4">About Us</h1>
                                <p className="mb-6">
                                    It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout. The point of using Lorem Ipsum is
                                    that it has a more-or-less normal distribution of letters.
                                </p>
                                <a
                                    href="#"
                                    className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                                >
                                    Read More
                                </a>
                            </div>
                            <div>
                                <img src="images/about-img.png" alt="About Us" className="rounded shadow-lg" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer Section */}
                <footer className="bg-gray-800 text-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div>
                                <h2 className="font-bold text-lg mb-4">Contact Us</h2>
                                <p>Location: [Location Here]</p>
                                <p>Phone: (+71) 8522369417</p>
                                <p>Email: demo@gmail.com</p>
                                <div className="flex space-x-4 mt-4">
                                    <a href="#" className="text-blue-400 hover:text-blue-500">
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                    <a href="#" className="text-blue-400 hover:text-blue-500">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                    <a href="#" className="text-blue-400 hover:text-blue-500">
                                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                                    </a>
                                    <a href="#" className="text-blue-400 hover:text-blue-500">
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h2 className="font-bold text-lg mb-4">Useful Links</h2>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="index.html" className="text-gray-400 hover:underline">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="about.html" className="text-gray-400 hover:underline">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="service.html" className="text-gray-400 hover:underline">
                                            Service
                                        </a>
                                    </li>
                                    <li>
                                        <a href="work.html" className="text-gray-400 hover:underline">
                                            Work
                                        </a>
                                    </li>
                                    <li>
                                        <a href="testimonial.html" className="text-gray-400 hover:underline">
                                            Testimonial
                                        </a>
                                    </li>
                                    <li>
                                        <a href="contact.html" className="text-gray-400 hover:underline">
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="font-bold text-lg mb-4">About</h2>
                                <p className="text-gray-400">
                                    Readable content of a page when looking at its layout, providing structure and
                                    design.
                                </p>
                            </div>
                            <div>
                                <h2 className="font-bold text-lg mb-4">Newsletter</h2>
                                <textarea
                                    className="w-full bg-gray-700 text-gray-400 p-3 rounded focus:outline-none"
                                    placeholder="Enter Your Email"
                                    rows="3"
                                ></textarea>
                                <button className="mt-4 bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        <div className="text-center mt-8">
                            <p>2024 All Rights Reserved. Design by Free HTML Templates</p>
                        </div>
                    </div>
                </footer>
            </div>

        </>
    )
}

export default AboutUs