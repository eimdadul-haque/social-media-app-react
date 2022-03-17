import React from 'react';
import "./HomeContainer.css";
import Img from "../../asset/003.jpg";
import Post_input from '../post-input/Post_input';
import PostCard from '../post-card/PostCard';
import ActiveList from '../active-list/ActiveList';
import DayComponent from '../day/DayComponent';
import Shortcuts from '../shortcuts/Shortcuts';

export default function () {
    return (
        <div className='container-fluid' style={{ height: "90vh" }}>
            <div className='row row-cus'>
                <div className='col-3 p-0 m-0'>
                    <Shortcuts />
                </div>
                <div className='col-6'>
                    <PostCard />
                </div>
                <div className='col-3 p-0'>
                    <ActiveList />
                </div >
            </div>
        </div>
    )
}
