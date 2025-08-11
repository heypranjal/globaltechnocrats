import React from 'react';

const SSConcertinaCoilPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Stainless Steel Concertina Coil</h1>
      <div className="prose max-w-none">
        <p>
          High-quality stainless steel concertina coil fencing for maximum durability and security.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Features</h2>
        <ul className="list-disc pl-5">
          <li>Made from 304/316 stainless steel</li>
          <li>Excellent corrosion resistance</li>
          <li>Long lifespan with minimal maintenance</li>
          <li>Available in various coil diameters</li>
        </ul>
      </div>
      {/* Product Header */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2">
          <div className="w-full [460px] rounded-lg shadow-sm overflow-hidden">
            <img 
              src="/images/SS-Concertina-coil-768x274.jpg" 
              alt="SS Concertina Coil" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSConcertinaCoilPage;
