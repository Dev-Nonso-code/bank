import React from 'react';
import Arrow from '../assets/arrow-up.svg'
import Robot from '../assets/robot.png';
import Discount from '../assets/Discount.svg'


const Hero = () => {
    return (
        <section className="max-w-[1315px] md:w-[94%] w-[90%] mr-auto md:mr-0 ml-auto xl:mx-auto xl:max-w-[1240px]">
            <div className="md:flex block justify-between max-[1023px]:mx-auto">
                <div className="xs:px-4 px-0 relative z-[2] md:mt-[6.5rem] mt-[3.5rem]">
                    <div className="absolute -z-[1] w-[195px] h-[324px] bg-white blur-[225px] rounded-full -left-[13.5rem]"></div>
                    <div className="bg-discount-gradient mb-5 flex max-w-[388px] w-full h-10 xs:gap-4 gap-[0.5rem] items-center rounded-lg max-[619px]:mb-8">
                        <img src={Discount} alt="dicount" className="w-8 h-8 ml-2" />
                        <p className="xs:text-sm text-[0.8rem]">
                            <span className="text-white text-sm">20% </span>
                            DISCOUNT FOR
                            <span className="text-white text-sm"> 1 MONTH </span>
                            ACCOUNT
                        </p>
                    </div>
                    <h1 className="text-white relative hero-title font-semibold tracking-[0.01rem]">
                        <a href="#" className="p-[2px] arrow xs:w-[140px] xs:h-[140px] bg-blue-gradient rounded-full block absolute md:right-11 right-[5%] w-[110px] h-[110px] xs:top-0 -top-4">
                            <div className="bg-primary font-medium text-sm xs:text-lg w-full h-full rounded-full flex items-center justify-center">
                                <span className="text-gradient">
                                    <span>
                                        Get
                                        <img src={Arrow} alt="arrow" className="w-5 h-5 inline-block ml-2" />
                                    </span>
                                    <br />
                                    Started
                                </span>
                            </div>
                        </a>
                        The Next <br />
                        <span className="hero-title text-gradient md:leading-[100px]">Generation</span> <br />
                        Payment Method.
                    </h1>
                    <p className="text-lg w-full max-w-[483px] mt-10">
                        Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
                        We examine annual percentage rates, annual fees.
                    </p>
                </div>
                <div className="max-[1023px]:mt-20 relative z-[2] md:block flex justify-center">
                    <div className="absolute robot rounded-full -top-[123px] left-[5.5rem]" />
                    <div className="absolute w-[195px] h-[324px] pink__gradient blur-[225px] rounded-full z-0 left-[10.5rem]"/>
                    <img src={Robot} alt="robot" className="max-w-[645px] w-full h-[100%]" />
                </div>
            </div>
            <div className="mt-20 mb-32 flex flex-wrap items-center gap-4 justify-around md:pr-[9rem]">
                <p className="lg:pl-7 pl-0 font-medium text-[30px] xs:text-[40px] text-white flex items-center gap-4">
                    3800+
                    <span className="text-gradient uppercase text-base xs:text-xl">user active</span>
                </p>
                <span className="lg:block hidden w-[1.7px] bg-gray h-[12px]"></span>
                <p className="font-medium text-[30px] xs:text-[40px] text-white flex items-center gap-4">
                    230+
                    <span className="text-gradient uppercase text-base xs:text-xl">trusted by company</span>
                </p>
                <span className="lg:block hidden w-[1.7px] bg-gray h-[12px]"></span>
                <p className="font-medium text-[30px] xs:text-[40px] text-white flex items-center gap-4">
                    $230M+
                    <span className="text-gradient uppercase text-base xs:text-xl">transaction</span>
                </p>
            </div>
        </section>
    )
}

export default Hero;