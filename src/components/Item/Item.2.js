import React, { Component } from 'react';
import {Card , CardMedia , Avatar }  from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


import '../List/List.scss'

const styles = theme => ({
    cardMedia: {
      [theme.breakpoints.down('xs')]: {
        height: '55vh',
        width: '95vw',
      },
  
      [theme.breakpoints.up('sm')]: {
        height: 400,
        width: 330,
      },
    },
    avatar:{
        height: 50,
        width: 50,

    },
    card:{
        overflow: 'unset',
        margin: 5,
    }
  });

class Item extends Component {
    render(){
        const { classes } = this.props;
        return(
            <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={this.props.image}>
                    <Avatar className={classes.avatar} src={this.props.artist_image}/>
                <p>{this.props.genre}</p>
                <p>{this.props.artist_name.split(' ')
                .map(word => word[0].toUpperCase()+ word.slice(1))
                .join(' ')}</p>

                <p>{this.props.name.split(' ')
                .map(word => word[0].toUpperCase()+ word.slice(1))
                .join(' ')}</p>

                <p>{this.props.tracks_number}</p>
                <p>{this.props.quantity_in_stock}/{this.props.quantity}</p>
                </CardMedia>
                </Card>
        //     <GridListTile className={classes.gridListTile}>
        //     {/* <img className={classes.imgFullHeight} src={this.props.image} alt=""/> */}
        //     {/* <p>{this.props.genre}</p>
        //         <p>{this.props.artist_name.split(' ')
        //         .map(word => word[0].toUpperCase()+ word.slice(1))
        //         .join(' ')}</p>

        //         <p>{this.props.name.split(' ')
        //         .map(word => word[0].toUpperCase()+ word.slice(1))
        //         .join(' ')}</p>

        //         <p>{this.props.tracks_number}</p>
        //         <p>{this.props.quantity_in_stock}/{this.props.quantity}</p> */}
        //   </GridListTile>
        )
    }
}

export default withStyles(styles)(Item); 