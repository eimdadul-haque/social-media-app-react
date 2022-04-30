import React, { useEffect, useState } from "react";
import Img from "../../asset/003.jpg"
import Post_input from "../../component/post-input/Post_input";
import PostCard from "../../component/post-card/PostCard";
import "./Profile.css"
import { API_LINK } from "../../api/API_LINK";
import axios from "axios";
import Navbar from "../../component/navbar/Navbar";

export default function Profile(params) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get(API_LINK.GET_POST_BY_USER, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(res => {
                setPosts(res.data);
            })
            .catch(err => console.log())
    }, [])

    return (
        <>
            <Navbar />
            <div className="profile-container">
                <img src={Img} />
                <div className="profile-page-name ">
                    <div className="pro-img-name">
                        <img className="profile-img" src={Img} />
                        <h1>Eimdadul Haque Rumi</h1>
                    </div>
                    <div className="pro-btn">
                        <button className="btn btn-primary">Add To Story</button>
                        <button className="btn btn-secondary">Edit Profile</button>
                    </div>
                </div>
                <div className="divider">
                    <div className="pro-short-list">
                        <div>Post</div>
                        <div>About</div>
                        <div>Friends</div>
                        <div>Videos</div>
                        <div>Photos</div>
                    </div>
                    <div className="dot-menu-contaioner">
                        <div>
                            <i class="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-3 pro-row-cust">
                <div className="col-5 m-0 ">
                    <div className="info-container border">
                        <h5>Intro</h5>
                        <div className="bio-con">
                            <p>Bio</p>
                            <button>Edit Bio</button>
                            <div className="info-data-container">
                                <p>University</p>
                                <p>Collage</p>
                                <p>School</p>
                                <p>Live in</p>
                                <p>From ...</p>
                            </div>
                        </div>
                    </div>
                    <div className="info-photo-container border mt-2">
                        <h5>Photos</h5>
                        <div className="photos-container">
                            <div className="photo-cluster">
                                {
                                    [...Array(9).keys()].map(x => {
                                        if (x == 0) {
                                            return <img src={Img} style={{ borderTopLeftRadius: "10px" }} />
                                        } else if (x == 2) {
                                            return <img src={Img} style={{ borderTopRightRadius: "10px" }} />
                                        } else if (x == 6) {
                                            return <img src={Img} style={{ borderBottomLeftRadius: "10px" }} />
                                        } else if (x == 8) {
                                            return <img src={Img} style={{ borderBottomRightRadius: "10px" }} />
                                        }
                                        return <img src={Img} />
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className="info-friend-container border mt-2">
                        <h5>Friends</h5>
                        <div className="friend-container">
                            <div className="friend-cluster">
                                {
                                    [...Array(9).keys()].map(x => {
                                        return (
                                            <div>
                                                <img src={Img} />
                                                <p>Eimdadul</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-7 m-0 p-0">
                    <div className="info-container overflow-scroll">
                        <Post_input />
                        {
                            posts.map((data, index) => {
                                return (
                                    <PostCard data={data} />
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}