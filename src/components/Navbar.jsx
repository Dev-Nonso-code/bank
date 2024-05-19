import React, {useState} from 'react';
import logo from '../assets/logo.svg';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <header className="py-8 relative z-[10]">
            <div className="container mx-auto relative flex items-center justify-between">
                <div className="navbar--logo">
                    <img src={logo} alt="logo" className="w-[128px] h-[32px]"/>
                </div>
                <div className="sm:hidden block">
                    <button
                        onClick={() => setShowMenu(prevState => !prevState)}
                        className="block">
                        <img src={showMenu ? close : menu} alt="menu"/>
                    </button>
                </div>
                
                <nav className="sm:block hidden">
                    <ul className="flex gap-14">
                        <li>
                            <a className="hover:text-white text-base font-normal" href="#home">Home</a>
                        </li>
                        <li>
                            <a className="hover:text-white text-base font-normal" href="#about-us">About Us</a>
                        </li>
                        <li>
                            <a className="hover:text-white text-base font-normal" href="#solution">Features</a>
                        </li>
                        <li><a className="hover:text-white text-base font-normal" href="#features">solution</a>
                        </li>
                    </ul>
                </nav>
                <div className={`${showMenu ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-8 right-0 my-2 min-w-[140px] rounded-xl sidebar z-10`}>
                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                        <li className="font-poppins font-medium cursor-pointer text-[16px] text-white mb-4"><a href="#home">Home</a>
                        </li>
                        <li className="font-poppins font-medium cursor-pointer text-[16px] text-dimWhite mb-4"><a href="#solution">Features</a>
                        </li>
                        <li className="font-poppins font-medium cursor-pointer text-[16px] text-dimWhite mb-4"><a href="#about-us">About Us</a>
                        </li>
                        <li className="font-poppins font-medium cursor-pointer text-[16px] text-dimWhite mb-0"><a href="#clients">Clients</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar;