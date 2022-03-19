import React from 'react';
import "./Post_Day_Post_Input.css";
import DayComponent from "../../component/day/DayComponent";
import Post_input from "../../component/post-input/Post_input";
import PostCard from "../post-card/PostCard";
export default function Post_Day_Post_Input() {
    return (
        <div className='post-day-and-input-container'>
            <DayComponent />
            <div className='post-and-input-container'>
                <Post_input />
                <PostCard />
            </div>
        </div>
    )
}
