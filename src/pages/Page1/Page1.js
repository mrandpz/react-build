import React, { Component } from 'react';
import style from './Page1.css';
import image from './p.png';
export default class Page1 extends Component {
    render () {
        return (
            <div className={style.pageBox}>
                this is page1asd123123
                <img src={image}/>
            </div>
        )
    }
}