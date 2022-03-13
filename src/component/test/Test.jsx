import "./Test.css";
import React from 'react'

export default function Test() {
    return (
        <div>
            <nav>

                <div class='nav__left'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png' />
                    <div class='nav__search'>
                        <i class="material-icons">search</i>
                        <input type='text' placeholder="Search Facebook" />
                    </div>
                </div>

                <div class='nav__mid'>
                    <a href='#' class='icon'>
                        <i class='material-icons'>home</i>
                    </a>
                    <a href='#' class='icon'>
                        <i class='material-icons'>slideshow</i>
                    </a>
                    <a href='#' class='icon'>
                        <i class='material-icons'>groups</i>
                    </a>
                    <a href='#' class='icon'>
                        <i class='material-icons'>gamepad</i>
                    </a>
                </div>

                <div class="nav__right">
                    <a href='#' class="avatar">
                        <img class='avatar__img' src='https://image.cnbcfm.com/api/v1/image/106330923-1578676182018gettyimages-1178141599.jpeg?v=1584633147&w=1400&h=950' />
                        <span><strong>Mark</strong></span>
                    </a>
                    <div class="buttons">
                        <a href="#"><i class='material-icons'>add</i></a>
                        <a href="#"><i class='material-icons'>messenger</i></a>
                        <a href="#"><i class='material-icons'>notifications</i></a>
                        <a href="#"><i class='material-icons'>arrow_drop_down</i></a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
