import React, { useEffect } from 'react'
import CardElement from './CardElement';

function Card({ data, toggleModal, setplan }) {
    const { tag, type, info, Price } = data;
    const handleClick = () => {
        setplan({
            type: type, price: Price
        })
        toggleModal()
    }

    return (
        <div className="min-w-[275px] mb-8 mx-4 max-w-[400px] flex-1 shadow-xl transform transition duration-500 hover:scale-[1.08]">
            <div className={type !== "Basic Access+" ? "bg-gradient-to-t from-gray-50 to-gray-300 p-10 rounded-lg" : "bg-gradient-to-t from-indigo-100 to-indigo-900 p-10 rounded-lg"}>
                <div className="flex justify-between items-center">
                    <div>
                        <h4 className={type !== "Basic Access+" ? "text-2xl font-bold text-gray-900" : "text-2xl font-bold text-white"}>{type}</h4>
                        <p className={type !== "Basic Access+" ? "text-xs text-gray-900" : "text-xs text-gray-300"}>{tag}</p>
                    </div>
                    <div>
                        <div className={type !== "Basic Access+" ? "bg-gray-100 p-2 rounded-lg text-center" : "bg-white p-2 rounded-lg text-center"}>
                            <h4 className="text-2xl font-bold text-gray-900">{Price[0]}</h4>
                            <p className="text-xs text-gray-500">{Price[1]}</p>
                        </div>
                    </div>
                </div>
                <hr className={type !== "Basic Access+" ? "text-gray-100 mt-5" : "text-gray-800 mt-5"} />
                {/* <!-- START LIST SECTION--> */}
                <div className="mt-10">
                    <ul role="list" className="space-y-4">

                        {
                            info.map((d) => (
                                <CardElement key={type} type={type} data={d} />
                            ))
                        }
                    </ul>
                </div>
                {/* <!-- END LIST SECTION--> */}
                <div className="mt-10">
                    <button
                        className="bg-orange-400 text-lg text-white w-full py-3 rounded-lg
                        inline-block px-6 font-medium leading-tight uppercase shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg transition duration-150 ease-in-out
                        "
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        onClick={handleClick}
                    >
                        Get started
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card