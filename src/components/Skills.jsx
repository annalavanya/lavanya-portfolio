import Certificates from "./Certificates";

const Skills = () => {
  const skills = [
    "Node.js","Express.js","React.js","MongoDB","REST API","Redux",
    "TailwindCSS","PostgreSQL","MySQL","JWT","Problem Solving",
    "Sequelize","Mongoose","Jest","Swagger","AWS S3","AWS SES"
  ];

  return (
    <>
    <div className="mb-80">
        <div className="flex flex-col items-center mt-30">
            <h1 className="text-3xl font-bold mb-6 text-center">Skills & Tech Stack</h1>
            <div className="flex flex-wrap justify-center gap-3 w-1/2">
                {skills.map((skill) => (
                <button
                    key={skill}
                    className="bg-cyan-600 px-4 py-2 rounded-xl hover:bg-cyan-700 animate-shine relative overflow-hidden text-white font-semibold"
                >
                    {skill}
                </button>
                ))}
            </div>

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
                color: white;
                animation: shine 5s linear infinite;
                }
            `}</style>
            </div>
        </div>

        <Certificates/>
    </>
  );
};

export default Skills;
