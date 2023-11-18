import React from 'react'

const SelectButton = ({ children, selected, onClick }) => {
    return (
        <button className={"text-xs text-white md:text-md p-2 rounded-xl hover:shadow-lg hover:shadow-prime " + (selected ? "bg-prime text-black font-bold " : "bg-black border-2 border-prime ")}

            onClick={onClick}>
            {children}
        </button>
    )
}

export default SelectButton