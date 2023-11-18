import React from 'react'
import { Trending } from '../components/Trending'
import CoinsTable from '../components/CoinsTable'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Home = () => {

    return (
        <div className='bg-gray-900 min-h-screen'>
            <div className='flex flex-row justify-center sm: flex-wrap-reverse md: items-center '>
                <section className="bg-gray-900 text-white w-max md:w-1/2 ">
                    <div
                        className="mx-auto max-w-screen-xl px-4 py-8 md:py-32 lg:flex lg:h-screen lg:items-center"
                    >
                        <div className="mx-auto max-w-3xl text-center">
                            <h1
                                className="bg-gradient-to-r from-red-300 via-prime to-violet-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                            >
                                Empowering Your Financial Future

                                <span className="sm:block"> One Trade at a Time. </span>
                            </h1>

                            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                                Step into the world of financial possibilities with our Crypto Trader! User-friendly design, providing you with a seamless and secure experience.
                            </p>

                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <AnchorLink href='#trending'>
                                    <span
                                        className="block w-full rounded border border-prime bg-prime px-12 py-3 text-sm font-semibold text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                                    >

                                        Trending Coins

                                    </span>
                                </AnchorLink>
                                <AnchorLink href='#cointable'>
                                    <span
                                        className="font-semibold block w-full rounded border border-prime px-12 py-3 text-sm  text-white hover:bg-prime focus:outline-none focus:ring active:bg-prime sm:w-auto"
                                    >
                                        Coin Database
                                    </span>
                                </AnchorLink>
                            </div>
                        </div>
                    </div>
                </section>

                <img className='w-max md:w-1/2' src="https://blog.rollbit.com/content/images/2021/06/ee1d65b02803a5b27b21ef49ea03ca93.gif" alt="" />

            </div>


            <Trending />

            <CoinsTable />
        </div>
    )
}

export default Home