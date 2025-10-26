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
      <div className="mt-20">
        <div className="flex justify-center text-center mb-12">
          <h1 className="text-3xl font-bold text-white">Certificates</h1>
        </div>

        <div className="flex justify-center ml-120">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-80 justify-items-center w-full max-w-6xl px-5">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 w-96"
              >
                <a href={cert.img} target="_blank" rel="noopener noreferrer">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-56 object-cover"
                  />
                </a>
                <p className="text-center py-3 text-gray-200 font-semibold">
                  {cert.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
          <div className="flex justify-center mt-40">
              <p>© 2025 Anna Lavanya T. All rights reserved.</p>
          </div>
    </>
  );
};

export default Certificates;
