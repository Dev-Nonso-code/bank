import React from 'react'
import Quotation from '../assets/quotes.svg'
import Person1 from '../assets/people01.png'
import Person2 from '../assets/people02.png'
import Person3 from '../assets/people03.png'
import Airbnb from '../assets/airbnb.png'
import Binance from '../assets/binance.png'
import Coinbase from '../assets/coinbase.png'
import Dropbox from '../assets/dropbox.png'
import CTA from './CTA'

const Testimonials = () => {
    return (
        <section id="about-us" className="container mx-auto relative">
            <div className="absolute about__gradient rounded-full top-[13rem] -right-[25.5rem]" />
            <div className="mb-20 md:flex-row flex-col flex justify-between items-center">
                <div className="md:mb-0 mb-8 self-baseline xs:self-center">
                    <h2 className="md:leading-[76px]">
                        What people are <br className="hidden xs:block"/> saying about us
                    </h2>
                </div>
                <p className="w-full max-w-[450px]">
                    Everything you need to accept card payments and grow your business anywhere on the planet.
                </p>
            </div>
            <div className="flex justify-center gap-4 flex-wrap">
                <div className="feedback-card px-10 py-[60px] w-[370px] rounded-[20px]">
                    <img src={Quotation} alt="quotation mark" />
                    <p className="my-8 tracking-[0.02rem] text-base">
                        Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
                    </p>
                    <div className="flex items-center gap-4">
                        <img className="w-12 h-12" src={Person1} alt="client image" />
                        <div>
                            <h3 className="text-lg text-white">Herman Jensen</h3>
                            <p className="text-sm opacity-50">Founder & Leader</p>
                        </div>
                    </div>
                </div>
                <div className="feedback-card px-10 py-[60px] w-[370px] rounded-[20px]">
                    <img src={Quotation} alt="quotation mark" />
                    <p className="my-8 tracking-[0.02rem] text-base">
                        Money makes your life easier. If you're lucky to have it, you're lucky.
                    </p>
                    <div className="flex items-center gap-4">
                        <img className="w-12 h-12" src={Person2} alt="client image" />
                        <div>
                            <h3 className="text-lg text-white">Steve Mark</h3>
                            <p className="text-sm opacity-50">Founder & Leader</p>
                        </div>
                    </div>
                </div>
                <div className="feedback-card px-10 py-[60px] w-[370px] rounded-[20px]">
                    <img src={Quotation} alt="quotation mark" />
                    <p className="my-8 tracking-[0.02rem] text-base">
                        It is usually people in the money business, finance, and international trade that are really rich.
                    </p>
                    <div className="flex items-center gap-4">
                        <img className="w-12 h-12" src={Person3} alt="client image" />
                        <div>
                            <h3 className="text-lg text-white">Kenn Gallagher</h3>
                            <p className="text-sm opacity-50">Founder & Leader</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex my-20 gap-20 flex-wrap items-center justify-center">
                <img className="w-[192px]" alt="airbnb logo" src={Airbnb} />
                <img className="w-[192px]" alt="binance logo" src={Binance} />
                <img className="w-[189px]" alt="coinbase logo" src={Coinbase} />
                <img className="w-[192px]" alt="dropbox logo" src={Dropbox} />
            </div>
            <div className="flex mb-20 gap-12 flex-wrap items-center justify-between py-10 ss:py-[4.3rem] px-10 ss:px-24 rounded-2xl bg-black-gradient-2">
                <div className="">
                    <h2 className="md:leading-[76px]">
                        Let’s try our service now!
                    </h2>
                    <p className="w-full max-w-[445px] tracking-[1%] mt-4">
                        Everything you need to accept card payments and grow your business anywhere on the planet.
                    </p>
                </div>
                <CTA />
            </div>
        </section>
    )
}

export default Testimonials