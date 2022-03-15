import "./PostModal.css";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function PostModal(props) {
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
                        <textarea className="form-control "></textarea>
                    </div>
                    <div className="form-group mt-2">
                        <input className="form-control" type="file" />
                    </div>
                    <div className="form-group mt-2">
                        <button className="btn btn-primary form-control">Post</button>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    );
}