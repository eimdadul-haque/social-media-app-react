import React, { useState } from 'react';
import Img from "../../asset/003.jpg";
import PostModal from '../modal/post-modal/PostModal';
import "./Post_input.css"
export default function Post_input() {

    const [show, SetShow] = useState(false);

    const modalShow = () => {
        SetShow(true);
    }
    const handleModal = () => {
        SetShow(false);
    }

    return (
        <>
            <div className='post-container '>
                <div className='write-post-container border'>
                    <div className='write-post'>
                        <img src={Img} />
                        <div className='input-container'>
                            <div onClick={() => modalShow()}>Whst's on your mind? Eimdadul</div>
                        </div>
                    </div>
                    <h1></h1>
                    <div className='post-icon-container'>
                        <div>
                            <i class="fa-solid fa-video"></i>
                        </div>
                        <div>
                            <i className="fa-solid fa-photo-film"></i>
                        </div>
                        <div>
                            <i className="fa-solid fa-face-grin"></i>
                        </div>
                    </div>
                </div>
            </div>
            <PostModal show={show} handleModal={handleModal} />
        </>
    )
}
