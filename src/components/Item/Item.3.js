import React, { Component } from 'react';
import {Box , Card , CardMedia , Avatar, Typography , Chip }  from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Button }  from '@material-ui/core';
import * as actionCreators from '../../store/actions/index';
import FileCopy from '@material-ui/icons/FileCopy';

import '../List/List.scss'


const styles = theme => ({
    button:{
        margin: '5px',
        borderRadius: '20px',
        width: '100px'
    },
    cardMedia: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backgroundBlendMode: 'soft-light',
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
        position: 'relative',
        boxShadow: '0 10px 30px 0 rgba(207, 217, 230, 0.5), 10px 10px 30px 0 #e8ecf1'
    },
    fab:{
        width: 100,
        margin: 5
    },
    chip:{
        color:'white',
        fontFamily: `'Varela Round', sans-serif`,
        backgroundColor: 'hsla(0, 0%, 85.1%, 0.5)'
    }
  });

class Item extends Component {
    constructor(props){
        super(props);
        this.state= {
            dialogBoxVisable: false
        }
    }

    dialogBoxOpen = () => {
        this.setState({
            dialogBoxVisable: true
        })
    }

    dialogBoxClose = () => {
        this.setState({
            dialogBoxVisable: false
            
        })
    }

    dialogBoxHandler = (handleType ,listType, index ) => {
        this.dialogBoxClose()
        handleType === 'remove'? 
        this.props.itemRemove(listType , index) : this.props.itemDuplicate(listType , index)
    }

    dialogBox = () => {
        const { classes } = this.props;
        return(
        <Box className="dialogBox" display={this.state.dialogBoxVisable? 'flex' : 'none'} justifyContent="center" alignItems="center">
            <Button color="primary" className={classes.button} variant="contained" aria-label="Add" onClick= {() => this.dialogBoxHandler('duplicate' , this.props.listTitle , this.props.i)}>
            <FileCopy /></Button>
            <Button color="default" className={classes.button} variant="contained" aria-label="Add" onClick= {() => this.dialogBoxHandler('remove' , this.props.listTitle , this.props.i)}>delete</Button>
        </Box>
      )
    }

    render(){
        const { classes } = this.props;
        return(
            <Card className={classes.card} 
                onMouseEnter={this.dialogBoxOpen} 
                onClick={this.dialogBoxOpen} 
                onMouseLeave={this.dialogBoxClose}>
                {this.state.dialogBoxVisable? this.dialogBox() : null}
                <CardMedia className={classes.cardMedia} image={this.props.image}>
                    <Box display="flex" 
                        height="92%" 
                        flexDirection="column" 
                        justifyContent="space-between" p={2}>
                        <Box display="flex" 
                            justifyContent="space-between" 
                            alignItems="center">
                            <Typography className={classes.typography} variant="body1">{this.props.genre}</Typography>
                            <Avatar className={classes.avatar} src={this.props.artist_image}/>
                        </Box>
                        <Box>
                            <Typography className={classes.typographyf} variant="h2">
                                {this.props.artist_name.split(' ')
                                .map(word => word[0].toUpperCase()+ word.slice(1))
                                .join(' ')}
                            </Typography>
                            <Typography color='textPrimary' className={classes.typography} variant="subtitle1">
                                {this.props.name.split(' ')
                                .map(word => word[0].toUpperCase()+ word.slice(1))
                                .join(' ')}
                            </Typography> 
                        </Box>
                        <Box display="flex" 
                            justifyContent="space-between" 
                            alignItems="center">
                            <Chip label={this.props.tracks_number} className={classes.chip}/>
                            <Chip label={`${this.props.quantity_in_stock}/${this.props.quantity}`} className={classes.chip}/>
                        </Box>
                    </Box>
                </CardMedia>
        </Card>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        itemRemove: (lsType, index) => dispatch(actionCreators.itemRemove(lsType, index)),
        itemDuplicate: (lsType, index) => dispatch(actionCreators.itemDuplicate(lsType, index)) 
    }
  }
 
  export default connect('', mapDispatchToProps)(withStyles(styles)(Item));