import React, { Component } from 'react';
import Item from '../Item/Item';
import SearchBar from '../SearchBar/SearchBar';
import { withStyles } from '@material-ui/core/styles';
import { GridList , Container}  from '@material-ui/core';
import './List.scss'

const styles = theme => ({
  gridList: {
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'nowrap',
      
    },
    [theme.breakpoints.up('sm')]: {
      flexWrap: 'wrap',
      margin: 'unset!important'
    },
  }
});

class List extends Component{
  

  handleDelete = (lsType, index) => {
    this.props.remove(lsType, index)
  }

  handleDuplicate = (lsType, index) => {
    this.props.dulipcate(lsType, index)
  }

  render(){ 
    const { classes } = this.props;
    return (
      <Container m={0} maxWidth={false}>
        
        <h2 style={{color: 'rgba(0, 0, 0, 0.85)'}}>{this.props.title}</h2>
        <SearchBar listType = {this.props.title === 'Vinyl Records' ? 'Vinyl Records' : 'Cd'}/>

        <GridList className={classes.gridList} spacing={20}>
        {this.props.listItems.map((item, index) => 
            <Item 
            listTitle = {this.props.title}
            key = {index}
            i = {index}
            genre={item.genre}
            artist_image={item.artist_image}
            artist_name={item.artist_name}
            name={item.name}
            image={item.image}
            tracks_number={item.tracks_number}
            quantity_in_stock={item.quantity_in_stock}
            quantity={item.quantity}/>
        )}
        </GridList>
        </Container >
    );
  }
}


export default withStyles(styles)(List);
