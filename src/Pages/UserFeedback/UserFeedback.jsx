import React from "react";
import { FaUserCircle, FaStar } from "react-icons/fa";

const feedbackData = [
  {
    id: 1,
    name: "Md. Junaid Jewel",
    rating: 5,
    feedback: "Excellent service! My home cleaning was spotless.",
  },
  {
    id: 2,
    name: "Md. Mahid",
    rating: 4,
    feedback: "The plumber arrived on time and fixed everything quickly.",
  },
  {
    id: 3,
    name: "Md. Mohsin",
    rating: 5,
    feedback:
      "The AC repair service was amazing! Friendly staff and quick response.",
  },
  {
    id: 4,
    name: "Md. Sakil Islam",
    rating: 5,
    feedback:
      "Highly professional and reliable team. Loved the cleaning service!",
  },
  {
    id: 5,
    name: "Hasan Ali",
    rating: 4,
    feedback: "Fast response and very skilled electricians.",
  },
  {
    id: 6,
    name: "Nishat Ahmmed",
    rating: 5,
    feedback: "Plumbing service was top-notch. No more leaks!",
  },
  {
    id: 7,
    name: "Imran Hossain",
    rating: 5,
    feedback: "Home painting team did an amazing job with smooth finishing.",
  },
  {
    id: 8,
    name: "Tahia Tabassum",
    rating: 4,
    feedback: "Babysitting service is reliable and trustworthy.",
  },
  {
    id: 9,
    name: "Yeasin Arafat",
    rating: 5,
    feedback: "The home shifting service was stress-free and professional.",
  },
  {
    id: 10,
    name: "Sidratul Muntaha",
    rating: 5,
    feedback:
      "Cooking service was delicious and timely. Perfect for busy families.",
  },
];

const UserFeedbackMarquee = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-gray-100 rounded-2xl">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800">
        User <span className="text-yellow-500">Feedback</span>
      </h2>

      <div className="overflow-hidden relative">
        <div className="flex gap-6 animate-marquee hover:pause-marquee">
          {[...feedbackData, ...feedbackData].map((fb, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-60 sm:w-64 md:w-72 lg:w-80 p-5 sm:p-6 bg-white rounded-xl shadow-lg text-center"
            >
              <FaUserCircle className="text-gray-400 text-5xl sm:text-6xl mx-auto mb-3" />
              <h3 className="text-lg sm:text-xl font-semibold mb-1">
                {fb.name}
              </h3>
              <div className="flex justify-center mb-2">
                {[...Array(fb.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                {fb.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite;
        }
        .hover\\:pause-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default UserFeedbackMarquee;
