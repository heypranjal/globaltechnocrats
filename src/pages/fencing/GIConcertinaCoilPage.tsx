import React from 'react';

const GIConcertinaCoilPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Galvanized Iron Concertina Coil</h1>
      <div className="prose max-w-none">
        <p>
          Cost-effective galvanized iron concertina coil fencing for perimeter security.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Features</h2>
        <ul className="list-disc pl-5">
          <li>Hot-dip galvanized for rust protection</li>
          <li>High tensile strength</li>
          <li>Economical security solution</li>
          <li>Easy installation</li>
        </ul>
      </div>
      {/* Product Header */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2">
          <div className="w-full h-64 rounded-lg shadow-sm overflow-hidden">
            <img 
              src="/images/GI-Concertina-Coil-768x274.png" 
              alt="GI Concertina Coil" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GIConcertinaCoilPage;
