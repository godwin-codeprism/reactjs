import React, { Component } from 'react';

export default class Photo extends Component {
    constructor(props) {
        super(props);
    }
    onClickImg(){
        this.props.onItemClick && this.props.onItemClick();
    }
    render() {
        return (
            <div className={this.props.className ? this.props.className : 'photo-container'} onClick={this.onClickImg.bind(this)}>
                <img src={this.props.imgUrl} alt='' />
            </div>
        );
    }
}
