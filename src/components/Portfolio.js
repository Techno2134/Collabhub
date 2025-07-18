import React from 'react';

const influencers = [
  {
    name: "Alex Martinez",
    category: "Fashion & Lifestyle",
    image: "https://placehold.co/600x400",
    description: "850K+ followers across platforms. Known for creative, engaging content and collaborations with top fashion brands.",
  },
  {
    name: "Priya Kapoor",
    category: "Beauty & Skincare",
    image: "https://placehold.co/600x400?text=Priya",
    description: "Trusted voice in skincare with high engagement. Works with eco-friendly, vegan beauty brands.",
  },
  {
    name: "Rahul Verma",
    category: "Fitness & Wellness",
    image: "https://placehold.co/600x400?text=Rahul",
    description: "Certified trainer. Promotes fitness gear, nutrition brands, and healthy habits.",
  },
];

const Portfolio = ({ onView }) => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our <span className="text-indigo-600">Influencers</span></h2>
          <p className="text-gray-600 mt-2">Browse top creators ready to collaborate with your brand.</p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {influencers.map((influencer, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg hover:scale-[1.02] transition-all">
              <img src={influencer.image} alt={influencer.name} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{influencer.name}</h3>
              <p className="text-sm text-indigo-600 mb-2">{influencer.category}</p>
              <p className="text-gray-600 text-sm mb-4">{influencer.description.slice(0, 80)}...</p>
              <button
                onClick={() => onView(influencer)}
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
