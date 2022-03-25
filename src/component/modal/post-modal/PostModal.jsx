import "./PostModal.css";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { API_LINK } from "../../../api/API_LINK";


const Initial = {
    postBody: "",
    photoName: "",
    comments: null,
    appUser: null,
    imageFile: null,
    title: ""

}
export default function PostModal(props) {

    const [post, setPost] = useState(Initial);

    const postHandle = (e) => {
        const { value, name } = e.target;
        setPost({
            ...post,
            [name]: value
        })
    }

    const imageHandle = (e) => {
        if (e.target.files && e.target.files[0]) {

            setPost({
                ...post,
                imageFile: e.target.files[0]
            })
        }
    }

    const submitHandle = (data) => {
        const formData = new FormData();
        formData.append('postBody', data.postBody);
        formData.append('imageFile', data.imageFile);

        axios.post(API_LINK.POST, formData, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }

        )
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <>
            <Modal show={props.show} >
                <Modal.Header onClick={props.handleModal} closeButton>
                    <div className="post-modal-title">
                        <h4>Create Post</h4>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group form-cus">
                        <textarea name="postBody" onChange={(e) => postHandle(e)} className="form-control "></textarea>
                    </div>
                    <div className="form-group mt-2">
                        <input onChange={(e) => imageHandle(e)} className="form-control" type="file" accept="*/image" />
                    </div>
                    <div className="form-group mt-2">
                        <button onClick={() => submitHandle(post)} className="btn btn-primary form-control">Post</button>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    );
}