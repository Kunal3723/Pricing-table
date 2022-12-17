import React from 'react'

function CardElement({ type, data }) {
    return (
        <li className="flex items-center">
            <div className={type !== "Basic Access+" ? "bg-indigo-900 rounded-full p-1" : "bg-white rounded-full p-1"}>
                <svg
                    className={type !== "Basic Access+" ? "flex-shrink-0 h-4 w-4 text-white" : "flex-shrink-0 h-4 w-4 text-indigo-900"}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden={data[0]}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={data[0] ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"} />
                </svg>
            </div>

            <span className={type !== "Basic Access+" ? "ml-3 text-base text-indigo-900" : "ml-3 text-base text-white"}
            ><b className=''>{data[1]+":"}</b>  {data[2]}</span>
        </li>
    )
}

export default CardElement