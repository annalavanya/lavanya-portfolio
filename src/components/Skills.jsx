import Certificates from "./Certificates";

const Skills = () => {
  const skills = [
    "Node.js","Express.js","React.js","MongoDB","REST API","Redux",
    "TailwindCSS","PostgreSQL","MySQL","JWT","Problem Solving",
    "Sequelize","Mongoose","Jest","Swagger","AWS S3","AWS SES"
  ];

  return (
    <>
      <div className="mb-40 md:mb-100 px-4">
        {/* Header */}
        <div className="flex flex-col items-center mt-16 md:mt-30 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Skills & Tech Stack</h1>

          {/* Skills Grid */}
          <div className="flex flex-wrap justify-center gap-3 w-full sm:w-4/5 md:w-2/3 lg:w-1/2">
            {skills.map((skill) => (
              <button
                key={skill}
                className="bg-cyan-600 px-3 py-2 md:px-4 md:py-2 rounded-xl text-sm md:text-base hover:bg-cyan-700 animate-shine relative overflow-hidden text-white font-semibold shadow-md transition-transform hover:scale-105"
              >
                {skill}
              </button>
            ))}
          </div>

          {/* Shine Animation */}
          <style>{`
            @keyframes shine {
              0% {
                background-position: -200% 0;
              }
              100% {
                background-position: 200% 0;
              }
            }
            .animate-shine {
              position: relative;
              background: linear-gradient(
                120deg, 
                #06b6d4 20%,
                #14b8a6 50%,  
                #22c55e 80%
              );
              background-size: 200% 100%;
              animation: shine 5s linear infinite;
            }
          `}</style>
        </div>
      </div>

      {/* Certificates Section */}
      <Certificates />
    </>
  );
};

export default Skills;
