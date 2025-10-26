import Skills from "./Skills";

const Experince = () => {
    return (
        <>
            <div className="mb-70">
                <div className="flex justify-center text-center mt-15">
                    <h1 className="text-3xl font-bold mb-12">Employment</h1>
                </div>
                <div className="flex flex-row justify-center mb-50 ml-15">
                    <div className="bg-gray-800 p-10 rounded-2xl w-xl shadow-2xl mr-10">
                        <h1 className="mb-4 text-2xl font-bold">ZenBasket (E-Commerce Platform)</h1>
                        <h1 className="text-justify mb-5">
                            Implemented a user tagging system for targeted bulk emails and configured AWS S3 for secure image storage. Automated email bounce and spam handling with AWS Lambda and SES, improving deliverability by 35%, and integrated Mail Logs API for real-time tracking. Created Swagger API documentation to streamline collaboration and optimized backend queries and schema, boosting API response time by 30%.                    </h1>
                        <div className="mb-15">
                            <button className="ml-3 m-4 bg-gray-700 px-4 py-2 rounded-xl hover:bg-gray-800">Node.js</button>
                            <button className="ml-3 m-4 bg-gray-700 px-4 py-2 rounded-xl hover:bg-gray-800">Express.js</button>
                            <button className="ml-3 m-4 bg-gray-700 px-4 py-2 rounded-xl hover:bg-gray-800">PostGreSQL</button>
                            <button className="ml-3 m-4 bg-gray-700 px-4 py-2 rounded-xl hover:bg-gray-800">AWS S3</button>
                            <button className="ml-3 m-4 bg-gray-700 px-4 py-2 rounded-xl hover:bg-gray-800">Sequelize</button>
                            <button className="ml-3 m-4 bg-gray-700 px-4 py-2 rounded-xl hover:bg-gray-800">Rest API</button>
                            <button className="ml-3 m-4 bg-gray-700 px-4 py-2 rounded-xl hover:bg-gray-800">AWS SES</button>
                        </div>
                        <div className="cursor-pointer">
                            <a href="https://getzenbasket.com/" className="bg-indigo-800 p-3 rounded-lg hover:bg-indigo-900"><button className="cursor-pointer">Website</button></a>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-10 rounded-2xl w-xl shadow-2xl mr-10">
                        <h1 className="mb-4 text-2xl font-bold">ZenBasket Digital Marketing Services Portal </h1>
                        <h1 className="text-justify mb-5">
                            Implemented JWT-based authentication for secure login and session management, and developed login, OTP, and password recovery modules, reducing support tickets by 40%. Integrated Razorpay for reliable online payments with 99.9% uptime and managed transaction logs for transparency. Collaborated with the frontend team to create responsive React.js interfaces using Tailwind CSS, enhancing user experience and visual consistency.</h1>
                        <div className="mb-15">
                            <button className="ml-3 m-4 bg-gray-700 px-4 py-2 rounded-xl hover:bg-gray-800">Node.js</button>
                            <button className="ml-3 m-4 bg-gray-700 px-4 py-2 rounded-xl hover:bg-gray-800">Express.js</button>
                            <button className="ml-3 m-4 bg-gray-700 px-4 py-2 rounded-xl hover:bg-gray-800">React.js</button>
                            <button className="ml-3 m-4 bg-gray-700 px-4 py-2 rounded-xl hover:bg-gray-800">MongoDB</button>
                            <button className="ml-3 m-4 bg-gray-700 px-4 py-2 rounded-xl hover:bg-gray-800">Rest API</button>
                            <button className="ml-3 m-4 bg-gray-700 px-4 py-2 rounded-xl hover:bg-gray-800">Redux</button>
                            <button className="ml-3 m-4 bg-gray-700 px-4 py-2 rounded-xl hover:bg-gray-800">JWT</button>
                        </div>
                        <div className="cursor-pointer">
                            <a href="https://marketing.getzenbasket.com/" className="bg-indigo-800 p-3 rounded-lg hover:bg-indigo-900"><button className="cursor-pointer hover:bg-indigo-900">Website</button></a>
                        </div>
                    </div>
                </div>  
            </div>
            
        <Skills/>
        </>
    )
}
export default Experince;