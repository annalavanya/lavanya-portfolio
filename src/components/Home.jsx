import About from "./About";

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center mt-40 gap-10 px-5 mb-70">
        {/* Profile Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src="https://img.freepik.com/premium-vector/girl-with-glasses-her-face-is-using-laptop_1026278-26038.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Profile"
            className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover border-4 border-gray-600 shadow-2xl"
            style={{
              animation: "float 3s ease-in-out infinite",
            }}
          />
          <style>
            {`
              @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-15px); }
              }
            `}
          </style>
        </div>

        {/* Intro Text */}
        <div className="flex flex-col justify-center text-center md:text-left max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Anna Lavanya</h1>
          <h2 className="text-md md:text-lg text-gray-200 text-justify">
            Full Stack Developer (MERN + PostgreSQL) | Node.js, Express.js, React.js, MongoDB, AWS | RESTful APIs & E-Commerce Platforms | Data Structures and Algorithms.
          </h2>
          <div className="mt-5">
            <a href="/AnnaLavanyaT- Resume.pdf" download="AnnaLavanya-Resume.pdf">
              <button className="px-6 py-3 bg-emerald-500 rounded-2xl text-lg text-black cursor-pointer hover:bg-emerald-800 transition-all">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>

      <About />
    </>
  );
};

export default Home;
