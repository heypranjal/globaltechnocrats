import React from 'react';

const SwingGatesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Swing Gates</h1>
      <div className="prose max-w-none">
        <p>
          High-quality swing gates for secure and convenient access control.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Features</h2>
        <ul className="list-disc pl-5">
          <li>Manual or automated operation options</li>
          <li>Durable powder-coated finish</li>
          <li>Various sizes and designs available</li>
          <li>Secure locking mechanisms</li>
        </ul>
      </div>
    </div>
  );
};

export default SwingGatesPage;
