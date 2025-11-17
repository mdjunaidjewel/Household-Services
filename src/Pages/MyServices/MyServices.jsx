import React, { useEffect, useState } from "react";

function MyServices({ userEmail }) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    if (!userEmail) return;

    fetch(`http://localhost:3000/my-services/${userEmail}`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, [userEmail]);

  return (
    <div className="px-4 md:px-10 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
        My Services
      </h1>

      {services.length === 0 ? (
        <p className="text-center text-gray-500">No services added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                className="w-full h-60 object-cover"
                src={service.image}
                alt={service.service_name}
              />

              <div className="p-5 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-2xl font-semibold mb-3">
                    {service.service_name}
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base mb-4">
                    {service.description}
                  </p>
                  <p className="text-gray-800 font-semibold">
                    Price: {service.price}
                  </p>
                  <p className="text-gray-800 font-semibold">
                    Category: {service.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyServices;
