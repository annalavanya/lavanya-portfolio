import { Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            <div className="flex bg-gray-800 h-25 justify-between shadow-2xl">
                <div className="w-25 m-3">
                    <h1 className="text-3xl m-7 hover:text-4xl text-indigo-800 font-bold cursor-pointer">Welcome!</h1>
                </div>
                <div className="m-6">
                    <ul className="flex">
                        <li className="text-blue-50 m-4 text-xl hover:text-red-500"><Link to='/'>Home</Link></li>
                        <li className="text-blue-50 m-4 text-xl hover:text-red-500"><Link to='/About'>About</Link></li>
                        <li className="text-blue-50 m-4 text-xl hover:text-red-500"><Link to='/Emploment'>Employment</Link></li>
                        <li className="text-blue-50 m-4 text-xl hover:text-red-500"><Link to='/Skills'>Skills</Link></li>
                        <li className="text-blue-50 m-4 text-xl hover:text-red-500 cursor-pointer decoration-0"><Link to='/Certificates'>Certificates</Link></li>
                        <div className="flex justify-end mt-4 bg-blue-400 p-2 rounded-full mb-4">
                            <a 
                                href="https://www.linkedin.com/in/anna-lavanya-t-46578b28b/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className=""
                            >
                            <img 
                                src="https://www.svgrepo.com/show/137278/linkedin.svg" 
                                alt="LinkedIn" 
                                className="h-3"
                            />
                          </a>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Header;