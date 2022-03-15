import React from 'react';
import "./DayComponent.css";
import Img from "../../asset/003.jpg";

export default function DayComponent() {
    return (
        <div className='day-container'>
            <div className='day-img-container'>
                <div className='day-icon-container'>
                    <i className="fa-solid fa-circle-plus fa-3x day-add"></i>
                </div>
                <img src={Img} />
            </div>
            {
                [...Array(4).keys()].map(x =>
                    <>
                        <div className='day-img-container'>
                            <img src={Img} className="day-pro-img" />
                            <img src={Img} />
                        </div>
                    </>
                )
            }
            <div className='rignt-arrow'>
            <i className="fa-solid fa-arrow-right-long"></i>
            </div>
        </div>
    )
}
