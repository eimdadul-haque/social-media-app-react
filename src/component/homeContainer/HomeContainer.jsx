import React from 'react';
import "./HomeContainer.css";
import Img from "../../asset/003.jpg";
import Post_input from '../post-input/Post_input';
import PostCard from '../post-card/PostCard';
import ActiveList from '../active-list/ActiveList';
import DayComponent from '../day/DayComponent';

export default function () {
    return (
        <div className='container-fluid' style={{ height: "90vh" }}>
            <div className='row d-flex justify-content-center aligent-item-center'>
                <div style={{ backgroundColor: "#f8f8f8", height: "90vh", overflow: "scroll" }} className='col-3'>
                    {
                        [...Array(100).keys()].map(x =>
                            <p>Hello...</p>
                        )
                    }
                </div>
                <div className='col-6'>
                    <PostCard />
                </div>
                <div style={{ backgroundColor: "#f8f8f8", height: "90vh" }} className='col-3 p-0 rounded'>
                    <ActiveList />
                </div >
            </div>
        </div>
    )
}
