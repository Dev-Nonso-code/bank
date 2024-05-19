import React from 'react'
import logo from '../assets/logo.svg'
import Instagram from '../assets/instagram.svg'
import Facebook from '../assets/facebook.svg'
import Twitter from '../assets/twitter.svg'
import Linkedin from '../assets/linkedin.svg'

const Footer = () => {
    return (
        <footer className="bg-[#0b0a0c99] pt-14 xs:p-8 pb-8">
            <div className="container mx-auto">
                <div className="border-b pb-8 border-[#3F3E45] flex gap-6 flex-wrap justify-between">
                    <div className="md:w-auto w-full md:mb-0 mb-6">
                        <img className="md:w-[266px] w-[180px]" src={logo} alt="logo" />
                        <p className="mt-6 w-full max-w-[312px]">
                            A new way to make the payments easy, reliable and secure.
                        </p>
                    </div>
                    <div className="">
                        <h5 className="mb-5 text-white font-medium">Useful Links</h5>
                        <ul>
                            <li>
                                <a className="hover:text-white text-base" href="#">Content</a>
                            </li>
                            <li>
                                <a className="hover:text-white text-base" href="#">How it Works</a>
                            </li>
                            <li>
                                <a className="hover:text-white text-base" href="#">Create</a>
                            </li>
                            <li>
                                <a className="hover:text-white text-base" href="#">Explore</a>
                            </li>
                            <li>
                                <a className="hover:text-white text-base" href="#">Terms & Services</a>
                            </li>
                        </ul>
                    </div>

                    <div className="">
                        <h5 className="mb-5 text-white font-medium">Community</h5>
                        <ul>
                            <li>
                                <a className="hover:text-white text-base" href="#">Help Center</a>
                            </li>
                            <li>
                                <a className="hover:text-white text-base" href="#">Partners</a>
                            </li>
                            <li>
                                <a className="hover:text-white text-base" href="#">Suggestions</a>
                            </li>
                            <li>
                                <a className="hover:text-white text-base" href="#">Blog</a>
                            </li>
                            <li>
                                <a className="hover:text-white text-base" href="#">Newsletter</a>
                            </li>
                        </ul>
                    </div>

                    <div className="">
                        <h5 className="mb-5 text-white font-medium">Partner</h5>
                        <ul>
                            <li>
                                <a className="hover:text-white text-base" href="#">Our Partner</a>
                            </li>
                            <li>
                                <a className="hover:text-white text-base" href="#">Become a Partner</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex mt-6 gap-8 flex-wrap items-center sm:justify-between justify-center">
                    <p className="text-sm">
                        Copyright &copy; 2021 HooBank. All Rights Reserved.
                    </p>
                    <div className="flex footer-img gap-6">
                        <img src={Instagram} alt="instagram logo" />
                        <img src={Facebook} alt="facebook logo" />
                        <img src={Twitter} alt="twitter logo" />
                        <img src={Linkedin} alt="linkedin logo" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer