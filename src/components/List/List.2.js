import React, { Component } from 'react';
import Item from '../Item/Item';
import SearchBar from '../SearchBar/SearchBar';
import { Typography }  from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { GridList , Grid}  from '@material-ui/core';

const styles = theme => ({
  gridList: {
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'nowrap',
    },
    [theme.breakpoints.up('sm')]: {
      flexWrap: 'wrap',
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
      <Grid>
          <Typography variant="h2">{this.props.title}</Typography>
          <SearchBar listType = {this.props.title === 'Vinyl Records' ? 'Vinyl Records' : 'Cd'}/>
          <GridList className={classes.gridList}>
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
                  quantity={item.quantity}/>)}
          </GridList>
        </Grid>
    );
  }
}


export default withStyles(styles)(List);
