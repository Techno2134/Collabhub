import React from 'react';

const Hero = () => {
  return (
    <section className="bg-indigo-50 pt-32 pb-20 text-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6 fade-in">
          Collaborate with <span className="text-indigo-600">Top Influencers</span> in Your Niche
        </h1>
        <p className="text-lg text-gray-600 mb-8 fade-in delay-150">
          CollabHub connects brands with passionate content creators for impactful, authentic marketing.
        </p>
        <a
          href="#portfolio"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-lg transition fade-in delay-250"
        >
          Explore Creators
        </a>
      </div>
    </section>
  );
};

export default Hero;
