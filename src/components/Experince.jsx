import Skills from "./Skills";

const Experince = () => {
  return (
    <>
      <div className="px-4 sm:px-6 md:px-10 mt-8 md:mt-10 mb-30 md:mb-80">
        <div className="flex justify-center text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Employment</h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-12">
          {/* Card 1 */}
          <div className="bg-gray-800 p-6 md:p-10 rounded-2xl shadow-2xl w-full md:w-[28rem]">
            <h2 className="mb-4 text-2xl font-bold text-white">ZenBasket (E-Commerce Platform)</h2>
            <p className="text-gray-300 mb-5 text-justify">
              Implemented a user tagging system for targeted bulk emails and configured AWS S3 for secure image storage. Automated email bounce and spam handling with AWS Lambda and SES, improving deliverability by 35%, and integrated Mail Logs API for real-time tracking. Created Swagger API documentation to streamline collaboration and optimized backend queries and schema, boosting API response time by 30%.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Node.js","Express.js","PostGreSQL","AWS S3","Sequelize","Rest API","AWS SES"].map(skill => (
                <span key={skill} className="bg-gray-700 px-3 py-1 rounded-xl text-sm hover:text-gray-400 cursor-pointer">{skill}</span>
              ))}
            </div>
            <a href="https://getzenbasket.com/" target="_blank" rel="noopener noreferrer">
              <button className="bg-indigo-800 px-4 py-2 rounded-lg text-white hover:bg-indigo-900 transition-all cursor-pointer">
                Website
              </button>
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 p-6 md:p-10 rounded-2xl shadow-2xl w-full md:w-[28rem]">
            <h2 className="mb-4 text-2xl font-bold text-white">ZenBasket Digital Marketing Services Portal</h2>
            <p className="text-gray-300 mb-5 text-justify">
              Implemented JWT-based authentication for secure login and session management, and developed login, OTP, and password recovery modules, reducing support tickets by 40%. Integrated Razorpay for reliable online payments with 99.9% uptime and managed transaction logs for transparency. Collaborated with the frontend team to create responsive React.js interfaces using Tailwind CSS, enhancing user experience and visual consistency.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Node.js","Express.js","React.js","MongoDB","Rest API","Redux","JWT"].map(skill => (
                <span key={skill} className="bg-gray-700 px-3 py-1 rounded-xl text-sm hover:text-gray-400 cursor-pointer">{skill}</span>
              ))}
            </div>
            <a href="https://marketing.getzenbasket.com/" target="_blank" rel="noopener noreferrer">
              <button className="bg-indigo-800 px-4 py-2 rounded-lg text-white hover:bg-indigo-900 transition-all cursor-pointer">
                Website
              </button>
            </a>
          </div>
        </div>
      </div>

      <Skills />
    </>
  );
};

export default Experince;
