import "./Post_Day_Post_Input.css";
import React, { useEffect, useState } from 'react';
import PostCard from "../post-card/PostCard";
import { API_LINK } from "../../api/API_LINK";
import DayComponent from "../../component/day/DayComponent";
import Post_input from "../../component/post-input/Post_input";
import axios from "axios";

export default function Post_Day_Post_Input() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get(API_LINK.GET_ALL_POST, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(res => {
                setPosts(res.data);
                console.log(posts, "===posts");
            })
            .catch(err => console.log())
    }, [])

    return (
        <div className='post-day-and-input-container'>
            <DayComponent />
            <div className='post-and-input-container mt-2'>
                <Post_input />
                {
                    posts.map((data, index) => {
                        return (
                            < PostCard key={index} data={data} />
                        )
                    })
                }
            </div>
        </div>
    )
}
