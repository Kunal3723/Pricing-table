import React from 'react'
import Card from './Card'
import { data } from '../data/data'
import Header from './Header'
function Pricing({ toggleModal, setplan }) {

    return (
        <div className=''>
            <Header />
            <section id="pricing" className="my-24">
                <div className="flex flex-wrap items-center flex-col mt-10 space-y-5 md:space-y-0 md:flex-row md:space-x-5 md:mx-10 md:justify-between">
                    {
                        data.map((d) => (
                            <Card key={d.type} data={d} toggleModal={toggleModal} setplan={setplan} />
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default Pricing