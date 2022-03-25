import React, { useState, useContext } from 'react'
import "./Comment.css";
import axios from "axios";
import { Context } from "../../help/Context";

const INITIAL = {
    commentBody: "",
    PostModelId: "",
    appUserId: ""

}


export default function Comment({ postId }) {
    const [Comment, setcomment] = useState('');
    const { refresh, setrefresh } = useContext(Context);


    const comment = (cmt, postId) => {

        axios.post("http://localhost:5200/api/Comment/addComment", {
            commentBody: cmt,
            PostModelId: postId,
            appUserId: ""
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
            .then(res => {
                setrefresh(!refresh);
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='comment-container'>
            <div className=' form-group comment-input-container'>
                <textarea onChange={(e) => setcomment(e.target.value)} className='form-container' />
                <button onClick={() => comment(Comment, postId)}>Comment</button>
            </div>
        </div>
    )
}
