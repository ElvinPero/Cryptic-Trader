import React, { useState } from 'react'
import { SiHiveBlockchain } from "react-icons/si";
import { Link } from 'react-router-dom';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { CryptoState } from '../CryptoContext';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Header = () => {
    const { currency, setCurrency } = CryptoState()

    return (
        <nav class=" bg-gray-900 z-50  fixed w-full top-0 start-0 border-b border-gray-600">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <SiHiveBlockchain size="40" />
                    <span class="text-gray-400 self-center text-2xl font-bold whitespace-nowrap  ">Cryptic <span className='text-prime'>Trader</span></span>
                </Link>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 border-prime rounded-md bg-gray-900 px-3 py-2 text-sm font-bold text-prime shadow-sm ring-1 ring-inset ring-prime hover:bg-prime hover:text-white">
                            {currency}
                            <ChevronDownIcon className="-mr-1 h-5 w-5 text-white hover:text-white" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-1 mr-2 w-20 origin-top-right rounded-md bg-prime shadow-lg ring-1 ring-prime ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item >
                                    {({ active }) => (
                                        <span onClick={() => setCurrency('USD')}
                                            className='hover:bg-gray-900 font-semibold text-white  block px-4 py-2 text-sm'
                                        >
                                            USD
                                        </span>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <span onClick={() => setCurrency('INR')}

                                            className='hover:bg-gray-900 font-semibold text-white  block px-4 py-2 text-sm'
                                        >
                                            INR
                                        </span>
                                    )}
                                </Menu.Item>


                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </nav>
    )
}

export default Header