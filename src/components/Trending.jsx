import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CryptoState } from '../CryptoContext'
import { TrendingCoins } from '../config/api';
import { Carousel } from 'flowbite-react';
import { Link } from 'react-router-dom';
import CoinChart from './CoinChart';


export function numbersWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const Trending = () => {
    const [trending, setTrending] = useState([])
    const { currency } = CryptoState();
    const [cload, setCload] = useState(true)


    useEffect(() => {

        const fetchTrendingCoins = async () => {

            try {
                const response = await fetch(TrendingCoins(currency));

                if (response.ok) {
                    const result = await response.json();
                    setTrending(result);
                    console.log(result);

                }
            } catch (e) {

                console.log(e);
            }
        }
        fetchTrendingCoins();

    }, [currency]);



    // try {
    //     const fetchTrendingCoins = async () => {
    //         const { data } = await axios.get(TrendingCoins(currency),
    //             {

    //                 headers: {
    //                     "Access-Control-Allow-Origin": "*",
    //                 },
    //             })
    //         setTrending(data);

    //     }
    //     console.log(trending);
    //     useEffect(() => {
    //         fetchTrendingCoins();
    //     }, [currency]);
    // } catch (error) {
    //     console.log(error)

    // }



    return (
        <>
            <div id="trending" className=' pb-4  w-max px-4 text-center py-8 md:py-8 md:px-20 md:text-left   text-4xl font-extrabold  text-prime'>Trending Coins</div>



            <div className='py-8 bg-gray-900'>
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mx-4 sm:mx-8">
                    <Carousel slideInterval={1000} >
                        {
                            trending.map((obj) => {
                                const yecoin = {
                                    id: obj.id,
                                }
                                let profit = obj.price_change_percentage_24h >= 0;

                                return (
                                    <div className='flex flex-col md:flex-row flex-wrap justify-around content-center bg-blue h-[100%]   md:h-96'>

                                        <div className='flex pt-8 flex-col bg-gray-950 h-full md:h-full w-1/5  md:w-1/3 '>
                                            {/* <div className='flex content-center justify-center bg-black h-44 sm:56 sm:h-56 xl:h-64 2xl:h-80'> */}
                                            <div className='self-center  w-16 sm:w-16 md:w-40'>
                                                <img className='py-2 sm:p-4' src={obj.image} alt="" />
                                            </div>
                                            {/* <div className='text-center p-4 sm:pb-2 xl:pt-2  text-white text-xl md:text-2xl font-bold  uppercase'> */}
                                            <div className='w-full text-center self-center bg-gray-900 p-2 text-xs sm:text-md md:text-2xl lg:text-3xl font-normal  sm:font-bold md:font-extrabold uppercase text-gray-300'>
                                                {obj.id}</div>
                                            <div className={'w-full text-center self-center bg-gray-900 p-2 text-xs sm:text-md md:text-md lg:text-xl font-normal  sm:font-bold md:font-extrabold uppercase ' + (profit > 0 ? "text-green-400 " : "text-red-700")}>
                                                {/* {profit && "+"} {obj?.price_change_percentage_24?.toFixed(2)}% */}
                                                <span className='text-gray-400'>Profit :</span> {profit && "+"}{obj.price_change_percentage_24h?.toFixed(2)}%

                                            </div>

                                        </div>
                                        <div className='bg-gray-800 h-full md:h-full w-4/5  md:w-2/3'>
                                            <CoinChart coin={yecoin} />
                                        </div>

                                    </div>
                                )
                            })
                        }





                    </Carousel>
                </div >
            </div >



        </>
    )
}
