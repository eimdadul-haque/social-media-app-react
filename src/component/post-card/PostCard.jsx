import "./PostCard.css";
import React from 'react';
import Img from "../../asset/003.jpg";
import Post_input from "../post-input/Post_input";
import DayComponent from "../day/DayComponent";

export default function PostCard() {
    return (
        <div className="post-scroll pt-3">
            <DayComponent />
            <Post_input />
            {
                [...Array(40).keys()].map(x =>
                    <div className="card-container">
                        <div className="card-custom border">
                            <div className="card-cust-head">
                                <div className="pic-name">
                                    <img src={Img} />
                                    <span>Eimdail Haque</span>
                                </div>
                                <div className="post-icon-container-fb">
                                    <i className="fa-solid fa-ellipsis-vertical"></i>
                                </div>
                            </div>
                            <div className="card-cus-body">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, vitae veritatis? Atque laudantium nulla quibusdam tenetur illum ex eveniet numquam ipsam vel repellendus vitae rerum officia aliquam qui animi laborum, rem cum fuga architecto modi consequuntur? Voluptas illo, obcaecati quae, inventore, id assumenda rem repellat optio consectetur quod nisi quos.
                            </div>
                            <div className="card-image-container">
                                <img src={Img} />
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
                )
            }
        </div>
    )
}
