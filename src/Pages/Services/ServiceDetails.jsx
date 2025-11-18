import { useLoaderData } from "react-router";
import { FaStar } from "react-icons/fa";

const ServiceDetails = () => {
  const service = useLoaderData();

  const { service_name, image, description, price_range, duration, rating } =
    service;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-5 md:p-10">
      <div className="max-w-5xl mx-auto">
        {/* Wrapper card */}
        <div className="bg-white/60 backdrop-blur-xl shadow-xl rounded-3xl overflow-hidden border border-white/40">
          {/* Top Image */}
          <div className="w-full h-60 md:h-96 overflow-hidden">
            <img
              src={image}
              alt={service_name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
            {/* Title & Badge */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
                {service_name}
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4 mb-6">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-xl ${
                    i < rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-gray-700 font-semibold">{rating}/5</span>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-7 mb-8 text-lg">
              {description}
            </p>

            {/* Info Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Price */}
              <div className="p-6 bg-white shadow-lg rounded-2xl border">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  Price Range
                </h3>
                <p className="text-2xl font-bold text-indigo-600">
                  {price_range}
                </p>
              </div>

              {/* Duration */}
              <div className="p-6 bg-white shadow-lg rounded-2xl border">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  Duration
                </h3>
                <p className="text-2xl font-bold text-indigo-600">{duration}</p>
              </div>
            </div>

            {/* Book Button */}
            <div className="mt-10">
              <button className="w-full md:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-xl shadow-lg transition-all">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
