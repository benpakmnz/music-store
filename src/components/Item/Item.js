import React, { Component } from 'react';


class Item extends Component {
    render(){
        return(
            <div style={{color: 'white', width: 300, margin: 10, padding: 10, backgroundImage: `url(${this.props.image}), linear-gradient(rgba(69, 69, 69, 0.6) 0%, rgba(0, 0, 0, 0.5) 100%)`,filter: 'grayscale(100%)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <p>{this.props.genre}</p>
                <img style={{width: 100, height: 100, borderRadius: 100}} src={this.props.artist_image} alt='artist'/>
                <p>{this.props.artist_name.split(' ')
                .map(word => word[0].toUpperCase()+ word.slice(1))
                .join(' ')}</p>

                <p>{this.props.name.split(' ')
                .map(word => word[0].toUpperCase()+ word.slice(1))
                .join(' ')}</p>

                <p>{this.props.tracks_number}</p>
                <p>{this.props.quantity_in_stock}/{this.props.quantity}</p>
            </div>
        )
    }
}

export default Item; 