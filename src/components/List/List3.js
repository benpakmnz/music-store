import React, { Component } from 'react';
import Item from '../Item/Item';
import SearchBar from '../SearchBar/SearchBar';
import { withStyles } from '@material-ui/core/styles';
import { GridList , GridListTile , GridListTileBar , Container }  from '@material-ui/core';
import './List.scss'

const styles = theme => ({
  gridList: {
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'nowrap',
    },
    [theme.breakpoints.up('sm')]: {
      flexWrap: 'wrap',
    },
  },
  gridListTile: {
    
    [theme.breakpoints.down('xs')]: {
      height: '55vh',
      width: '95vw',
    },

    [theme.breakpoints.up('sm')]: {
      height: 400,
      width: 330,
    },
  },
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
      <Container maxWidth="false" >
        
        <h2 style={{color: 'rgba(0, 0, 0, 0.85)'}}>{this.props.title}</h2>
        <SearchBar listType = {this.props.title === 'Vinyl Records' ? 'Vinyl Records' : 'Cd'}/>

        <GridList className={classes.gridList} cellHeight={{xs:306 , sm:400}} cols={{xs:1 , sm:3}} spacing={20}>
        {this.props.listItems.map((item, index) => 
          <GridListTile className={classes.gridListTile} borderRadius="50%" key={index}>
            <img className={classes.imgFullHeight} src={item.image} alt=""/>
          </GridListTile>
            // <button onClick= {() => this.handleDuplicate(this.props.title ,index)}>duplicate</button>
            // <button onClick= {() => this.handleDelete(this.props.title ,index)}>delete</button>
          
        )}
        </GridList>
        </Container >
    );
  }
}


export default withStyles(styles)(List);
