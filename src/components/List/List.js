import React, { Component } from 'react';
import Item from '../Item/Item';


class List extends Component{
  render(){
    return (
      <div>
        <h2 style={{color: 'rgba(0, 0, 0, 0.85)'}}>{this.props.title}</h2>
        <div>
          <input></input>
          <button>search</button>
          <button>reset</button>
        </div>
        <div style={{display: 'flex', flexFlow: 'wrap', justifyContent: 'right', width: '75vw', margin: 'auto'}}>
          {this.props.listItems.map(item => 
            <Item 
                genre={item.genre}
                artist_image={item.artist_image}
                artist_name={item.artist_name}
                name={item.name}
                image={item.image}
                tracks_number={item.tracks_number}
                quantity_in_stock={item.quantity_in_stock}
                quantity={item.quantity}
            />
          )}
        </div>
      </div>
    );
  }
}

export default List;
