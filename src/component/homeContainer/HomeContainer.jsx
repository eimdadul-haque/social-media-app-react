import React from 'react';
import "./HomeContainer.css";
import Img from "../../asset/003.jpg";
import Post_input from '../post-input/Post_input';
import PostCard from '../post-card/PostCard';
import ActiveList from '../active-list/ActiveList';
import DayComponent from '../day/DayComponent';
import Shortcuts from '../shortcuts/Shortcuts';
import Post_Day_Post_Input from '../post-day-post-input/Post_Day_Post_Input';
import Navbar from '../navbar/Navbar';

export default function () {
    return (
        <>
            <Navbar />
            <div className='container-fluid' >
                <div className='row row-cus'>
                    <div className='col-3 p-0 m-0'>
                        <Shortcuts />
                    </div>
                    <div className='col-6 '>
                        <Post_Day_Post_Input />
                    </div>
                    <div className='col-3 p-0'>
                        <ActiveList />
                    </div >
                </div>
            </div>
        </>
    )
}
