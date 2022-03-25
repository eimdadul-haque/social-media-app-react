import "./Sign_Up.css";
import axios from "axios";
import React, { useState } from 'react';
import { API_LINK } from "../../api/API_LINK";
import { useNavigate } from "react-router-dom";

const regData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gendar: "",
    password: ""
}

export default function Sign_Up() {
    const navigate = useNavigate();
    const [info, setInfo] = useState(regData);
    const [gender, setGender] = useState("");

    const handleInfo = (event) => {
        const { name, value } = event.target;
        setInfo({
            ...info,
            [name]: value
        })
    }

    const handleSubmint = async (data) => {
        data.gendar = gender;
        axios.post(API_LINK.SIGNUP, {
            ...data
        })
            .then(res => {
                if (res.status == 200) {
                    navigate("/login");
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="signup-page-container">
            <div className="signup-page">
                <div className="form-group mt-2">
                    <input name="firstName" onChange={(event) => handleInfo(event)} placeholder="First Name" className="form-control" />
                </div>
                <div className="form-group mt-2">
                    <input name="lastName" onChange={(event) => handleInfo(event)} placeholder="Last Name" className="form-control" />
                </div>
                <div className="form-group mt-2">
                    <input name="email" type="email" onChange={(event) => handleInfo(event)} placeholder="Email" className="form-control" />
                </div>
                <div className="form-group mt-2">
                    <input name="phone" onChange={(event) => handleInfo(event)} placeholder="Phone Number" className="form-control" />
                </div>
                <div className="form-group mt-2">
                    <select value={gender} onChange={(event) => setGender(event.target.value)} className="form-control" >
                        <option >Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                <div className="form-group mt-2">
                    <input name="password" placeholder="Password" onChange={(event) => handleInfo(event)} type="password" className="form-control" />
                </div>
                <div className="form-group mt-2">
                    <input name="confirmPassword" placeholder="Confirm Password" onChange={(event) => handleInfo(event)} type="password" className="form-control" />
                </div>
                <hr />
                <div className="form-group">
                    <button onClick={() => handleSubmint(info)} style={{ backgroundColor: "#C9F889" }} className="form-control">Sign Up</button>
                </div>
            </div>
        </div>
    )
}
