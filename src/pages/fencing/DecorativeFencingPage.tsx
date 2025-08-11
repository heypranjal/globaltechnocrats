export default function DecorativeFencingPage() {
  return (
    <div className="page-container">
      <h1>Decorative Fencing Solutions</h1>
      {/* Product Header */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2">
          <div className="w-full h-64 rounded-lg shadow-sm overflow-hidden">
            <img 
              src="/images/Decorative-Fencing-1-768x274.jpg" 
              alt="Decorative Fencing" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <p>Detailed content coming soon...</p>
      </div>
    </div>
  );
}
