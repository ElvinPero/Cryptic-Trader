import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CryptoState } from '../CryptoContext';
import { SingleCoin } from '../config/api';
import ReactHtmlParser from 'react-html-parser'
import { numbersWithCommas } from '../components/Trending';
import { LinearProgress } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import CoinChart from '../components/CoinChart';
const CoinPage = () => {

    const { id } = useParams();
    const [coin, setCoin] = useState()
    const { currency, symbol } = CryptoState();
    const [cpload, setCpload] = useState(true);
    useEffect(() => {
        const fetchCoin = async () => {
            try {
                setCpload(true);
                // console.log(id);
                const response = await fetch(SingleCoin(id));
                if (response.ok) {
                    const result = await response.json();
                    setCoin(result);
                    // console.log(result);
                }
            } catch (e) {
                console.log(e);
            } finally {
                setCpload(false)
            }
        }
        fetchCoin();
    }, [currency]);


    return (
        <>
            <div className='bg-gray-900 h-screen'>
                <div className='bg-gray-900 p-4 pt-16 lg:pt-16 flex lg:p-8 flex-col gap-0  lg:gap-8 lg:flex-row ' >



                    <div className='pb-4  lg:pb-28 flex flex-col justify-start items-center rounded-3xl mt-8  bg-slate-950 h-full w-full lg:w-1/3 '>
                        {cpload ? (<CircularProgress style={{
                            // padding: "50px",
                            marginTop: "100px",

                            color: "#d93c67",


                        }}
                            size={200}
                        />
                        ) : (
                            <>
                                <div className='p-4 '>
                                    <img src={coin?.image.large} alt="coinImg" />
                                </div>

                                <div className='text-3xl text-white font-extrabold'>
                                    {coin?.name}
                                </div>

                                <div className='p-4 text-md text-gray-300  '>
                                    {ReactHtmlParser(coin?.description.en.split(". ")[0])}
                                </div>
                                <div className='ml-4 md:ml-16 self-start text-2xl text-prime font-bold'>

                                    Rank : <span className='text-white'> {coin?.market_cap_rank} </span>
                                </div>
                                <div className='ml-4 md:ml-16 self-start text-2xl text-prime font-bold'>
                                    Current Price : <span className='text-white'>{symbol}{" "}
                                        {numbersWithCommas(coin?.market_data.current_price[currency.toLowerCase()])}</span>
                                </div>
                                <div className='ml-4 md:ml-16 self-start text-2xl text-prime font-bold'>
                                    Market Cap : <span className='text-white'>{symbol}{" "}
                                        {numbersWithCommas(
                                            coin?.market_data.market_cap[currency.toLowerCase()]
                                                .toString()
                                                .slice(0, -6)
                                        )}
                                        M</span>
                                </div>
                            </>
                        )}

                    </div>

                    <div className='p-2 pt-8 pb-8 rounded-3xl mt-4 lg:mt-8 bg-slate-950  h-full  w-full lg:w-2/3 '>
                        <CoinChart coin={coin} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoinPage