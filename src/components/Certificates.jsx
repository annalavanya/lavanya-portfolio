const Certificates = () => {
  const certificates = [
    {
      title: "JavaScript (Namaste JavaScript)",
      img: "/Namaste-Javascript.webp",
    },
    {
      title: "Node.js (Namaste Node.js)",
      img: "/Namaste-Nodejs.jpeg",
    },
  ];

  return (
    <>
      <div className="mt-16 md:mt-20 px-4">
        {/* Section Title */}
        <div className="flex justify-center text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-white">Certificates</h1>
        </div>

        {/* Certificate Grid */}
        <div className="flex justify-center ml-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 w-full max-w-6xl">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 w-full sm:w-80 md:w-72 lg:w-80"
              >
                <a href={cert.img} target="_blank" rel="noopener noreferrer">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-48 md:h-56 object-cover"
                  />
                </a>
                <p className="text-center py-3 text-gray-200 font-semibold text-sm md:text-base">
                  {cert.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-center mt-20 md:mt-40">
        <p className="text-gray-400 text-sm md:text-base">
          © 2025 Anna Lavanya T. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Certificates;
