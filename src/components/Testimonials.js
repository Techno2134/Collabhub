import React from 'react';

const testimonials = [
  {
    name: "Ananya Sharma",
    company: "GlowUp Cosmetics",
    feedback:
      "Working with CollabHub helped us scale influencer marketing faster than ever. We saw a 3x boost in engagement!",
    image: "https://placehold.co/80x80?text=A",
  },
  {
    name: "Rohan Mehta",
    company: "FitLife India",
    feedback:
      "CollabHub’s influencer selection was spot on. Our fitness campaign got amazing reach and ROI.",
    image: "https://placehold.co/80x80?text=R",
  },
  {
    name: "Sana Ali",
    company: "Trendy Threads",
    feedback:
      "The platform is smooth, and the creators are super professional. We loved the experience!",
    image: "https://placehold.co/80x80?text=S",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-indigo-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">What Brands Say</h2>
          <p className="text-gray-600 mt-2">Trusted by growing businesses and creators across India.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all text-center"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 mb-4 italic">"{t.feedback}"</p>
              <h4 className="text-lg font-semibold text-gray-800">{t.name}</h4>
              <p className="text-sm text-indigo-600">{t.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
