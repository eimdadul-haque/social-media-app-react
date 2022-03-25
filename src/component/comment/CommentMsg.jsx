import "./Comment.css";
import React from 'react';

export default function CommentMsg({data}) {
    return (
        <>
            <div className="cmt-msg-container">
                <div className="cmt">
                    <div className="cmter-pic"></div>
                    <span className="">{data.commentBody}</span>
                </div>
            </div>

        </>
    )
}
