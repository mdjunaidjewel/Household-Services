import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));

    // AOS initialize
    AOS.init({
      duration: 1000, // animation duration
      easing: "ease-in-out",
      once: false, // scroll-up এ আবার animation হবে
      mirror: true, // scroll up & down দুই দিকে animation
    });
  }, []);

  // refresh AOS on services change
  useEffect(() => {
    AOS.refresh();
  }, [services]);

  return (
    <div className="py-10 max-w-7xl mx-auto">
      <h1
        className="text-3xl md:text-5xl font-bold text-center mb-16"
        data-aos="fade-down"
      >
        <span className="text-gray-800">Available</span>{" "}
        <span className="text-yellow-600">Services</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={service._id}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col bg-[#f5f5f5]"
            data-aos="fade-up" // ✅ fade-up animation
            data-aos-delay={index * 100} // staggered delay
            data-aos-offset="120"
            data-aos-anchor-placement="top-bottom"
          >
            <img
              className="w-full h-60 object-cover"
              src={service.image}
              alt={service.service_name}
            />
            <div className="p-5 flex flex-col flex-1">
              <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                  {service.service_name}
                </h2>
                <p className="text-gray-400 text-sm md:text-base">
                  {service.description}
                </p>
              </div>
              <NavLink
                to={`/service-details/${service._id}`}
                className="text-center mt-auto w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition-colors duration-300 cursor-pointer"
              >
                Explore
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
