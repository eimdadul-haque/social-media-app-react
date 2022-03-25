import "./PostCard.css";
import React, { useEffect } from 'react';
import Img from "../../asset/003.jpg";
import Post_input from "../post-input/Post_input";
import DayComponent from "../day/DayComponent";
import axios from "axios";
import { API_LINK } from "../../api/API_LINK";
import { useNavigate } from "react-router-dom";

export default function PostCard({ data }) {
    const navigate = useNavigate();
    const post = (id) => {
        navigate("/post/" + id);
    }

    return (
        <div onClick={()=>post(data.id)} className="post-scroll">
            <div className="card-container">
                <div className="card-custom border">
                    <div className="card-cust-head">
                        <div className="pic-name">
                            <img src={"http://localhost:5200/Images/" + data.photoName} />
                            <span>Eimdail Haque</span>
                        </div>
                        <div className="post-icon-container-fb">
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                    </div>
                    <div className="card-cus-body">
                        {data.postBody}
                    </div>
                    <div className="card-image-container">
                        <img src={"http://localhost:5200/Images/" + data.photoName} />
                    </div>
                    <div className="post-interaction ">
                        <div className="like-share">
                            <span>6</span>
                            <div>6 Shares</div>
                        </div>
                        <h1></h1>
                        <div className="like-comment">
                            <div>
                                <i className="fa-solid fa-thumbs-up"></i>
                            </div>
                            <div>
                                <i className="fa-solid fa-comment"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-share"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
