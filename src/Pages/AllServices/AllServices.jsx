import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://houseservices.vercel.app/services") // 🔥 Database API endpoint
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setServices(data);
        } else {
          setServices([]);
        }
      })
      .catch((error) => {
        console.log(error);
        setServices([]);
      })
      .finally(() => setLoading(false));

    AOS.init({ duration: 1000 });
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/service-details/${id}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="radial-progress animate-spin border-yellow-400 border-4 w-8 h-8 mb-3"></div>
        <p className="text-gray-700 text-base md:text-lg font-medium">
          Loading services...
        </p>
      </div>
    );
  }

  return (
    <div className="pb-6 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <h1
        className="text-2xl md:text-4xl font-bold text-center mb-5"
        data-aos="fade-down"
      >
        <span className="text-gray-800">All</span>{" "}
        <span className="text-yellow-600">Services</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
        {services.map((service, index) => (
          <div
            key={service._id}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col bg-[#f5f5f5]"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              className="w-full h-40 md:h-48 object-cover"
              src={service.image}
              alt={service.service_name}
            />
            <div className="p-5 flex flex-col flex-1">
              <h2 className="text-xl md:text-2xl font-semibold mb-1 text-gray-600">
                {service.service_name}
              </h2>

              <p className="text-gray-500 font-semibold mb-2">
                Provider:{" "}
                <span className="font-medium">{service.provider_name}</span>
              </p>

              <p className="text-gray-500 text-sm md:text-base mb-2 line-clamp-2">
                {service.description}
              </p>

              <p className="mt-2 font-semibold text-yellow-700">
                Rating: {service.rating || 0}/5
              </p>

              <button
                onClick={() => handleViewDetails(service._id)}
                className="text-center mt-auto w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition-colors duration-300 cursor-pointer"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
