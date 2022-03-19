import React from 'react'
import {Link} from 'react-router-dom';
import "./Shortcuts.css";
import Img from "../../asset/003.jpg";
import { AccessAlarm, AccessTime, ArrowDownward, ArrowDropDownCircle, Groups, OndemandVideo, PeopleAlt, Storefront } from '@mui/icons-material';

export default function shortcuts() {
    return (
        <div className='shortcuts-container'>
            <div className='list-container'>
                <Link to="/profile" className='short-list-header'>
                    <img src={Img} /> <span>Eimdadul Haque</span>
                </Link>
                <div className='short-list-header'>
                    <PeopleAlt />
                    <span>Friends</span>
                </div>
                <div className='short-list-header'>
                    <Groups />
                    <span>Group</span>
                </div>
                <div className='short-list-header'>
                    <Storefront />
                    <span>MarketPalce</span>
                </div>
                <div className='short-list-header'>
                    <OndemandVideo />
                    <span>Watch</span>
                </div>
                <div className='short-list-header'>
                    <AccessTime />
                    <span>Memories</span>
                </div>
                <div className='short-list-header'>
                    <ArrowDropDownCircle />
                    <span>Memories</span>
                </div>

                <div className='short-group-list-container' >
                    <h6>Your Shortcuts</h6>
                    <div className='short-group-list'>
                        <img src={Img} /> <span>Eimdadul Haque</span>
                    </div>
                    <div className='short-group-list'>
                        <img src={Img} /> <span>Eimdadul Haque</span>
                    </div>
                    <div className='short-group-list'>
                        <img src={Img} /> <span>Eimdadul Haque</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
