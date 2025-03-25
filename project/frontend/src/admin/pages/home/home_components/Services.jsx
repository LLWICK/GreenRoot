import React from 'react';

const services = [
    { img: "images/img-1.png", title: "Garden", description: "It is a long established fact that a reader will be distracted by the readable content" },
    { img: "images/img-2.png", title: "Planting & Upgrade", description: "It is a long established fact that a reader will be distracted by the readable content" },
    { img: "images/img-3.png", title: "Bonsol Core", description: "It is a long established fact that a reader will be distracted by the readable content" },
    { img: "images/img-4.png", title: "Garden Maintenance", description: "It is a long established fact that a reader will be distracted by the readable content" },
    { img: "images/img-5.png", title: "Plant Water", description: "It is a long established fact that a reader will be distracted by the readable content" },
    { img: "images/img-6.png", title: "Plant Cutting", description: "It is a long established fact that a reader will be distracted by the readable content" },
];

const Services = () => {
    return (
        <>
            <div className="services_section py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold">Our Services</h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="box_main bg-white rounded-lg p-4 shadow-md hover:shadow-lg">
                                <div className="service_img">
                                    <img src={service.img} alt={service.title} className="w-full rounded" />
                                </div>
                                <h4 className="development_text text-lg font-semibold mt-4">{service.title}</h4>
                                <p className="services_text text-gray-600 mt-2">{service.description}</p>
                                <div className="readmore_bt mt-4">
                                    <a href="#" className="text-blue-500 hover:underline">Read More</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Services