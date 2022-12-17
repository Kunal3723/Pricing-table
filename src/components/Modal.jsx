import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Modal.css";

export default function Modal({ toggleModal, modal, plan }) {

    const { price, type } = plan;
    return (
        <>
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <div className="text-content">
                            <h2 className="title">
                                Order Summary
                            </h2>
                            <p className="subtitle">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, debitis?
                            </p>

                            <div className="plan-box">
                                <div className="plan-box-left">
                                    <img className="w-10 h-10 mr-2 rounded-full" src="https://cdn-icons-png.flaticon.com/512/8771/8771568.png" alt="" />
                                    <div>
                                        <span><b className="text-[20px]">{price[0]} {" "}</b> <span className="text-[14px] text-gray-500">{price[1]}</span></span>
                                        <p>{type}</p>
                                    </div>
                                </div>
                            </div>
                            <Link to="/confirm" className="proceed-btn" onClick={toggleModal}>Proceed to Payment</Link>
                            <a className="cancel-btn cursor-pointer" onClick={toggleModal}>Cancel Order</a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}