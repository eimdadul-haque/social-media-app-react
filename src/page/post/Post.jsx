import React, { useContext, useEffect, useState } from 'react';
import Img from "../../asset/003.jpg"
import "./Post.css";
import Comment from "./../../component/comment/Comment";
import CommentMsg from '../../component/comment/CommentMsg';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { API_LINK } from '../../api/API_LINK';
import { Context } from "../../help/Context";

export default function Post() {
    const [post, setpost] = useState({})
    const [comments, setcomments] = useState([])
    const param = useParams();
    const { refresh, setrefresh } = useContext(Context);

    useEffect(() => {
        getPost();
        getComment();
    }, [refresh])

    const getPost = () => {
        axios.get(API_LINK.GET_POST_BY_ID + param.id, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(res => {
                setpost(res.data);
            })
            .catch(err => console.log(err))
    }

    const getComment = () => {
        axios.get(API_LINK.GET_COMMENT_BY_POST_ID + param.id, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(res => {
                setcomments(res.data)
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='container mt-2'>
            <div className='row'>
                <div className='col-8 p-0'>
                    <div className='post-detail-container'>
                        <div className='post-detail-photo-container'>
                            <img src={Img} />
                        </div>
                        <div className='post-detail-desc-container'>
                            <span>{post.postBody}</span>
                        </div>
                    </div>
                </div>
                <div className='col-4 '>
                    {
                        localStorage.getItem('token') === null ? <></> :
                            <>
                                <Comment postId={post.id} />
                                <hr />
                            </>
                    }
                    {
                        comments.map((data, index) => {
                            return (
                                <CommentMsg data={data} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
