import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Jai ",
    role: "Happy Customer",
    message:
      "HomeCraft has completely transformed my living room! The sofa is incredibly comfortable and the build quality is top-notch. Definitely worth every penny!",
    image: "https://avatars.githubusercontent.com/u/131760182?v=4",
  },
  {
    id: 2,
    name: "TEJESH",
    role: "Happy Customer",
    message:
      "Absolutely love my new sofa from HomeCraft! The comfort is amazing, and the design fits perfectly with my home’s aesthetic. Highly recommended!",
    image: "https://avatars.githubusercontent.com/u/123167938?v=4",
  },
  {
    id: 3,
    name: "Santosh",
    role: "Happy Customer",
    message:
      "The dining table set I purchased is both sturdy and stylish. Delivery was smooth, and the packaging was excellent. Great experience overall!",
    image: "https://avatars.githubusercontent.com/u/177151325?v=4",
  },
];

const Testimonial = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Why Customers Love <span className="text-cyan-600">HomeCraft</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-gray-50 shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full border-2 border-cyan-500"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {t.name}
                  </h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">“{t.message}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
