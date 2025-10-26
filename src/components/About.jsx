import Experince from "./Experince";
import Home from "./Home";

const About = () => {
    return (
        <>
            <div className="mb-70">
                <div className="flex justify-center text-center mt-30">
                    <h1 className="text-3xl font-bold text-white">About</h1>
                </div>
                <div className="bg-gray-900 text-gray-100 p-6 rounded-xl max-w-2xl mx-auto mt-10 shadow-xl font-mono border border-gray-700 relative overflow-hidden">
                    <div className="absolute inset-0 rounded-xl pointer-events-none animate-border-glow"></div>
                    <div className="relative z-10">
                        <p className="font-bold mb-4 text-lg text-cyan-400">
                        <span className="text-emerald-400">Anna Lavanya:</span>
                        <span className="border-r-2 border-cyan-400 animate-blink"></span>
                        </p>

                        <p className="text-xl font-semibold text-white mb-3 animate-type">
                        Full Stack Developer - (MERN + PostgreSQL)
                        </p>

                        <p className="text-gray-300 mb-2 animate-fade">
                        Full Stack Developer with over 2+ years of hands-on experience in developing and maintaining scalable web applications using the MERN stack. Proficient in Node.js, Express.js, React.js, and MongoDB, with proven expertise in RESTful API design, database optimization, and AWS cloud integration.
                        </p>
                    </div>

                    <style>
                        {`
                        /* Slow Blinking Cursor */
                        @keyframes blink {
                            0%, 50%, 100% { opacity: 1; }
                            25%, 75% { opacity: 0; }
                        }
                        .animate-blink {
                            display: inline-block;
                            width: 10px;
                            animation: blink 2.5s infinite ease-in-out;
                        }

                        /* Typing-like text reveal */
                        @keyframes typing {
                            from { width: 0; }
                            to { width: 100%; }
                        }
                        .animate-type {
                            overflow: hidden;
                            white-space: nowrap;
                            border-right: 2px solid rgba(56, 189, 248, 0.75);
                            width: 0;
                            animation: typing 5s steps(40, end) forwards, blink 2.5s infinite ease-in-out;
                        }

                        /* Smooth fade-up for paragraphs */
                        @keyframes fadeUp {
                            from { opacity: 0; transform: translateY(10px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                        .animate-fade {
                            opacity: 0;
                            animation: fadeUp 1.5s ease forwards;
                        }

                        .delay-400 {
                            animation-delay: 0.4s;
                        }

                        /* Subtle glowing border effect */
                        @keyframes borderGlow {
                            0% { box-shadow: 0 0 10px 2px rgba(34,211,238,0.3); }
                            50% { box-shadow: 0 0 20px 4px rgba(34,211,238,0.5); }
                            100% { box-shadow: 0 0 10px 2px rgba(34,211,238,0.3); }
                        }
                        .animate-border-glow {
                            animation: borderGlow 5s ease-in-out infinite;
                            border: 1px solid rgba(34,211,238,0.4);
                        }
                        `}
                    </style>
                </div>
            </div>

            <Experince/>
        </>
    )
}
export default About;