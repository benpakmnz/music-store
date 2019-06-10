import React, { Component } from 'react';
import Item from '../Item/Item';
import SearchBar from '../SearchBar/SearchBar';


class List extends Component{
  handleDelete = (lsType, index) => {
    this.props.remove(lsType, index)
  }

  handleDuplicate = (lsType, index) => {
    this.props.dulipcate(lsType, index)
  }

  render(){ 
    return (
      <div>
        <h2 style={{color: 'rgba(0, 0, 0, 0.85)'}}>{this.props.title}</h2>
        <SearchBar listType = {this.props.title === 'Vinyl Records' ? 'Vinyl Records' : 'Cd'}/>
        <div style={{display: 'flex', flexFlow: 'wrap', justifyContent: 'right', width: '75vw', margin: 'auto'}}>
          {this.props.listItems.map((item, index) => 
            <div key = {index}>
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
            <button onClick= {() => this.handleDuplicate(this.props.title ,index)}>duplicate</button>
            <button onClick= {() => this.handleDelete(this.props.title ,index)}>delete</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default List;
