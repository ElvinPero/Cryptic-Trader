import React, { useEffect, useState } from 'react'
import { HistoricalChart } from '../config/api';
import { CryptoState } from '../CryptoContext';
import { CircularProgress } from '@mui/material';
import { chartDays } from '../config/data.js'
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import SelectButton from './SelectButton.jsx';

ChartJS.register(...registerables);


const CoinChart = ({ coin }) => {

    const [historicalData, setHistoricalData] = useState()
    const [days, setDays] = useState(1)
    const { currency, symbol } = CryptoState()
    useEffect(() => {

        const fetchHistoricalData = async () => {

            try {

                const response = await fetch(HistoricalChart(coin?.id, days, currency));

                if (response.ok) {
                    const result = await response.json();
                    setHistoricalData(result.prices);
                    // console.log(result.prices);
                }
            } catch (e) {
                console.log(e);
            }
            // finally {
            //     set(false)
            // }
        }
        fetchHistoricalData();
    }, [days, coin]);

    return (
        <>{
            !historicalData ? (<div
                className='ml-20 sm:ml-40 md:ml-56 lg:ml-80'
            ><CircularProgress style={{
                marginTop: "100px",
                color: "#d93c67",
                // marginLeft: "10em"
            }}


                size={200}
                /></div>
            ) : (
                <>

                    <Line
                        data={{

                            labels: historicalData.map((coin) => {
                                let date = new Date(coin[0]);
                                let time =
                                    date.getHours() > 12
                                        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                                        : `${date.getHours()}:${date.getMinutes()} AM`;
                                return days === 1 ? time : date.toLocaleDateString();
                            }),

                            datasets: [
                                {
                                    data: historicalData.map((coin) => coin[1]),
                                    label: `Price (Past  ${days} Days) in ${currency}`,
                                    borderColor: "#d93c67"
                                },
                            ],
                        }}
                        options={
                            {
                                elements: {
                                    point: {
                                        radius: 1,
                                    }
                                }
                            }
                        }


                    />
                    <div className='w-full flex  justify-center gap-2'>
                        {chartDays.map(day => (
                            <SelectButton
                                key={day.value}
                                onClick={() => setDays(day.value)}
                                selected={day.value === days}
                            >
                                {day.label}
                            </SelectButton>
                        ))}
                    </div>

                </>
            )
        }
        </>
    )
}

export default CoinChart