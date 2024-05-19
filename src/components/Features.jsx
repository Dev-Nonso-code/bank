import React from 'react'
import bill from '../assets/bill.png'
import card from '../assets/card.png'
import star from '../assets/Star.svg'
import Appstore from '../assets/apple.svg'
import Playstore from '../assets/google.svg'
import shield from '../assets/Shield.svg'
import send from '../assets/Send.svg'
import CTA from './CTA'

const Features = () => { 
    return (
        <section id="solution" className="mb-32">
            <div className="container mx-auto mt-10 md:flex-row flex-col flex justify-between items-center">
                <div className="md:mb-0 mb-16">
                    <h2 className="md:leading-[76px]">
                        You do the business,<br /> we’ll handle the money.
                    </h2>
                    <p className="w-full max-w-[570px] tracking-[0.01rem] mt-4 mb-9">
                        With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
                    </p>
                    <CTA />
                </div>
                <div className="">
                    <div className="flex gap-4 items-center mb-6 w-full max-w-[491px] p-4 feature-card rounded-2xl">
                        <div>
                            <div className="w-16 h-16 rounded-full bg-dimBlue flex items-center justify-center">
                                <img src={star} alt="star" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Rewards</h3>
                            <p className="text-base">The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center mb-6 w-full max-w-[491px] p-4 feature-card rounded-2xl">
                        <div>
                            <div className="w-16 h-16 rounded-full bg-dimBlue flex items-center justify-center">
                                <img src={shield} alt="star" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">100% Secured</h3>
                            <p className="text-base">The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center mb-6 w-full max-w-[491px] p-4 feature-card rounded-2xl">
                        <div>
                            <div className="w-16 h-16 rounded-full bg-dimBlue flex items-center justify-center">
                                <img src={send} alt="star" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Balance Transferred</h3>
                            <p className="text-base">The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto my-20 md:flex-row flex-col flex justify-between items-center">
                <div className="max-w-[513px] w-full relative z-[2]">
                    <div className="absolute white__gradient rounded-full -top-[183px] -left-[30.5rem]" />
                    <div className="absolute w-[276px] h-[324px] pink__gradient blur-[225px] rounded-full z-0 -left-[21.5rem]" />
                    <img src={bill} alt="bill" />
                </div>
                <div className="md:mb-0 mb-16">
                    <h2 className="md:leading-[76px]">
                        Easily control your <br/> billing & invoicing.
                    </h2>
                    <p className="w-full max-w-[500px] tracking-[0.01rem] mt-4 mb-9">
                        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
                    </p>
                    <div>
                        <img className="inline" src={Appstore} alt="app store" />
                        <img className="inline ml-7" src={Playstore} alt="play store" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto md:flex-row flex-col flex justify-between items-center">
                <div className="md:mb-0 mb-16">
                    <h2 className="md:leading-[76px]">
                        Find a better card deal <br/> in few easy steps.
                    </h2>
                    <p className="w-full max-w-[500px] tracking-[0.01rem] mt-4 mb-9">
                        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
                    </p>
                    <CTA />
                </div>
                <div className="max-w-[513px] w-full">
                    <img src={card} alt="card" />
                </div>
            </div>
        </section>
    )
}

export default Features