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
      {/* Certificates Section */}
      <div className="mt-16 md:mt-24 px-4 flex flex-col items-center justify-center">
        {/* Section Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-12 text-center">
          Certificates
        </h1>

        {/* Centered, Responsive Grid */}
        <div className="flex justify-center w-full">
          <div className="flex flex-wrap justify-center gap-10 md:gap-20 max-w-6xl">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 w-64 sm:w-72 md:w-80"
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
      <div className="flex justify-center mt-20 md:mt-40 px-4">
        <p className="text-gray-400 text-sm md:text-base text-center">
          © 2025 Anna Lavanya T. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Certificates;
