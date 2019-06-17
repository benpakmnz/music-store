import React, { Component } from 'react';
import Item from '../Item/Item';
import SearchBar from '../SearchBar/SearchBar';

import { Typography }  from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { GridList , Container}  from '@material-ui/core';
import styles from './ListStyle'; 


class List extends Component{   
  render(){ 
    const { classes } = this.props;
    return (
      <Container className={classes.root}>
        <Typography variant="h2">{this.props.title}</Typography>
        <SearchBar listType = {this.props.title === 'Vinyl Records' ? 'Vinyl Records' : 'Cd'}/>
        <GridList className={classes.gridList}>
            {this.props.listItems.map((item, index) => 
              <Item 
                  listType={this.props.title}
                  listTitle = {this.props.title}
                  key = {index}
                  indexItem = {index}
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
        </Container>
    );
  }
}


export default withStyles(styles)(List);

