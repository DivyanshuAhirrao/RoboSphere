import React from "react";

const ServiceCard = ({ image, title, description, onViewService }) => {
  return (
    <div
      className="group relative flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer
     w-full xs:w-40 sm:w-60 md:w-60 lg:w-[20rem] xl:w-[20rem] "
    >
      {/* Card Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Content */}
      <div className="p-4 text-center text-s">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>

      {/* Hover Overlay */}
      <div className="p-2 w-[100%] flex items-center justify-center">
        <button
          onClick={onViewService}
          className="w-full py-1 bg-blue-200 text-blue-600 font-semibold shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          View Service
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
