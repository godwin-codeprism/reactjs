import React, { Component } from 'react';
import './Album.css';
import Photo from './Photo';
import Axios from 'axios';

export default class Album extends Component {
    state = {
        photolu: null
    }
    // detailRef=null;
    constructor(props) {
        super(props);
        // this.detailRef = React.createRef();
    }
    componentDidMount() {
        Axios.get('https://gist.githubusercontent.com/yannski/3019778/raw/dfb34d018165f47b61b3bf089358a3d5ca199d96/movies.json').then(res => {
            this.setState({ photolu: res.data.filter(i => i.cover_url) });
        })

    }
    onItemClick = (item) => {
        this.detailRef.onItemChanged(item);
    }
    render() {
        return this.state.photolu ? <div className="album-container">
            <h3 style={{ margin: '0px' }}>Photo Album Guys!!!</h3>
            <PhotoList photolu={this.state.photolu} onItemClick={this.onItemClick} detailsComp={() => this.detailRef} />
            <PhotoDetails initialItem={this.state.photolu[0]} ref={ref => { this.detailRef = ref }} />
        </div> : <p>Loading photos...</p>
    }
}

class PhotoList extends Component {
    onListItemClicked(photo) {
        this.props.onItemClick(photo);
    }

    render() {
        return <div className="photo-list-container">
            {this.props.photolu.map(i => <Photo key={Math.random()} imgUrl={i.cover_url} onItemClick={() => { this.onListItemClicked.bind(this)(i) }} />)}
        </div>
    }
}

class PhotoDetails extends Component {
    state = { item: this.props.initialItem }
    onItemChanged(item) {
        this.setState({ item: item });
    }
    render() {
        return <div className="photo-details-container">
            <h3 style={{ fontWeight: 400 }}><b>Title:</b> {this.state && this.state.item && this.state.item.title && this.state.item.title}</h3>
            <small><b>Description:</b> {this.state && this.state.item && this.state.item.description && this.state.item.description} </small>
            <Photo imgUrl={this.state.item.cover_url} className="photo-container-details" />
        </div>
    }
}