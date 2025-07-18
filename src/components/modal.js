import React from 'react';

const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  const { name, category, imageUrl, description } = data;

  return (
    <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div
        className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full w-8 h-8 flex items-center justify-center transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left Image */}
          <div className="h-64 md:h-full">
            <img
              src={imageUrl}
              alt={`${name} profile`}
              className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            />
          </div>

          {/* Right Text */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
            <p className="text-gray-600 mb-4">{category}</p>
            <p className="text-gray-700 mb-6">{description}</p>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-800 mb-2">Collaboration Details</h4>
              <ul className="text-gray-600 space-y-2">
                <li><strong>Average Engagement:</strong> 6–12%</li>
                <li><strong>Platforms:</strong> Instagram, YouTube, TikTok</li>
                <li><strong>Brand Categories:</strong> Fashion, Beauty, Lifestyle</li>
                <li><strong>Content Type:</strong> Photography, Video, Live Streams</li>
              </ul>
            </div>

            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition">
              Request Collaboration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
