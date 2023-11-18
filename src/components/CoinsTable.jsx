import React, { useEffect, useState } from 'react'
import { CryptoState } from '../CryptoContext'
import { CoinList } from '../config/api'
import Pagination from '@mui/material/Pagination';
import { Container, TableContainer, LinearProgress, Table, TableHead, TableCell, TableRow, TableBody } from '@mui/material';
import { Link } from 'react-router-dom';
import { numbersWithCommas } from './Trending';
import { useNavigate } from 'react-router-dom';

const CoinsTable = () => {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")
    const { currency, symbol } = CryptoState();
    const [page, setPage] = useState(1)
    const navigate = useNavigate();


    useEffect(() => {
        setLoading(true);
        const fetchCoins = async () => {
            setLoading(true);
            try {
                // const response = await fetch(`https://api.binance.com/`);
                console.log(currency)
                const response = await fetch(CoinList(currency));
                const result = await response.json();

                setCoins(result);
                console.log(result);
            } catch (e) {
                console.log(e);
            }
            finally {
                setLoading(false);
            }
        }
        fetchCoins();
    }, [currency]);


    // const useStyles = makeStyles({
    //     row: {
    //         backgroundColor: "#16171a",
    //         cursor: "pointer",
    //         "&:hover": {
    //             backgroundColor: "#131111",
    //         },
    //         fontFamily: "Montserrat",
    //     },
    //     pagination: {
    //         "& .MuiPaginationItem-root": {
    //             color: "gold",
    //         },
    //     },
    // });


    const handleSearch = () => {
        return coins.filter(
            (coin) =>
                coin.name.toLowerCase().includes(search) ||
                coin.symbol.toLowerCase().includes(search)
        );
    };
    return (
        <>
            <div id="cointable" className='pb-4  w-max px-4 text-center py-8 md:py-8 md:px-20 md:text-left   text-4xl font-extrabold  text-gray-400'>Coins <span className='text-prime'>Database</span></div>
            <div className='w-full p-4'>
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search Crypto Here'
                    className='w-full text-white text-xl bg-gray-800 border-prime focus:bg-slate-800 rounded-xl'
                    type="text" name="" id="inp" />
            </div>
            <Container style={{ textAlign: "center" }}>
                <TableContainer>
                    {
                        loading ? (
                            <LinearProgress style={{ backgroundColor: "prime" }} />
                        ) : (
                            <Table>
                                <TableHead
                                    className='bg-prime '>
                                    <TableRow >
                                        {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                                            <TableCell
                                                style={{
                                                    color: "prime",
                                                    fontWeight: "700",
                                                    fontFamily: "Montserrat",
                                                    backgroundColor: "prime"
                                                }}
                                                key={head}
                                                align={head === "Coin" ? "" : "right"}>
                                                {head}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        // coins.map(row => {
                                        handleSearch().slice((page - 1) * 10, (page - 1) * 10 + 10).map((row) => {
                                            const profit = row.price_change_percentage_24h > 0;
                                            return (
                                                <TableRow
                                                    onClick={() => navigate(`/coins/${row.id}`)}
                                                    className='text-xs  sm:text-md hover:bg-gray-800'
                                                    // style={{
                                                    //     width: "700px",
                                                    //     backgroundColor: "#16171a",
                                                    //     cursor: "pointer",
                                                    //     "&:hover": {
                                                    //         backgroundColor: "#131111",
                                                    //     },
                                                    //     fontFamily: "Montserrat",
                                                    // }}
                                                    key={row.name}>
                                                    <TableCell component='th' scope='row'
                                                        style={{
                                                            display: "flex",
                                                            // justifyContent: "center",
                                                            alignItems: "center",
                                                            gap: "15",
                                                        }}>
                                                        <img
                                                            src={row?.image}
                                                            alt={row.name}

                                                            className='mb-10 h-12 p-1 items-center '

                                                        />
                                                        <div className='flex flex-col'>
                                                            <span className='text-md text-white uppercase '>
                                                                {row.symbol}
                                                            </span>
                                                            <span className='text-sm text-gray-400'>
                                                                {row.name}
                                                            </span>

                                                        </div>
                                                    </TableCell>
                                                    <TableCell
                                                        className='text-white'
                                                        align="right"
                                                        style={{
                                                            // fontSize: "",
                                                            color: "white"
                                                        }}
                                                    >
                                                        {symbol}{" "}
                                                        {numbersWithCommas(row.current_price.toFixed(2))}
                                                    </TableCell>

                                                    <TableCell align="right"
                                                        style={{
                                                            color: profit > 0 ? "rgb(14,203,129)" : "red",
                                                            fontWeight: 200,

                                                        }}
                                                    >
                                                        {profit && "+"}
                                                        {row.price_change_percentage_24h.toFixed(2)}%
                                                    </TableCell>
                                                    <TableCell align="right"
                                                        style={{
                                                            color: "white"
                                                        }}>
                                                        {symbol}{" "}
                                                        {numbersWithCommas(row.market_cap.toString().slice(0, -6))}M
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })
                                    }

                                </TableBody>
                            </Table>
                        )
                    }
                </TableContainer>
                <Pagination
                    style={{
                        padding: "20",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        color: "white",
                        backgroundColor: "#d93c67",

                    }}

                    count={(handleSearch()?.length / 10).toFixed(0)}
                    onChange={(_, value) => {
                        setPage(value);
                        window.scroll(0, 1200);

                    }}
                />
            </Container>
        </>
    )
}

export default CoinsTable