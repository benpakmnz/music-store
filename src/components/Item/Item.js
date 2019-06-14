import React, { Component } from 'react';
import {Box , CardMedia , Avatar, Typography , Chip , Grid }  from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Button }  from '@material-ui/core';
import * as actionCreators from '../../store/actions/index';
import FileCopy from '@material-ui/icons/FileCopy';
import '../List/List.scss'

const styles = theme => ({
    root:{
        display: 'flex', 
        justifyContent: 'space-between',
        flexDirection: 'column',
        overflow: 'unset',
        marginTop: 20,
        // marginRight: 20,
        boxShadow: '0 10px 30px 0 rgba(207, 217, 230, 0.5), 10px 10px 30px 0 #e8ecf1',
        borderRadius: 20,
        boxSizing: 'border-box',
        position: 'relative',
    },
    button:{
        margin: '5px',
        borderRadius: '20px',
        width: '100px',
    },
    cardMedia: {
        borderRadius: 20,
        height: 'inherit',
        padding: 20,
        boxSizing: 'border-box',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backgroundBlendMode: 'soft-light',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        [theme.breakpoints.down('xs')]: {height: '55vh',width: '91vw'},
        [theme.breakpoints.up('xs')]: {height: '55vh',width: '92vw'},
        [theme.breakpoints.up('sm')]: {height: 400, width: '380px'},
    },
    avatar:{
        height: 50,
        width: 50,
    },
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
        <div className={"dialogBox"} display={this.state.dialogBoxVisable? 'flex' : 'none'}>
            <Button color="primary" className={classes.button} variant="contained" aria-label="Add" onClick= {() => this.dialogBoxHandler('duplicate' , this.props.listTitle , this.props.i)}>
            <FileCopy /></Button>
            <Button color="default" className={classes.button} variant="contained" aria-label="Add" onClick= {() => this.dialogBoxHandler('remove' , this.props.listTitle , this.props.i)}>delete</Button>
        </div>
      )
    }

    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                
                <CardMedia
                    className={classes.cardMedia} 
                    image={this.props.image}
                    onMouseEnter={this.dialogBoxOpen} 
                    onClick={this.dialogBoxOpen} 
                    onMouseLeave={this.dialogBoxClose}>
                        {this.state.dialogBoxVisable? this.dialogBox() : null}
                    <Grid container justify="space-between" alignItems="center">
                        <Typography color='textPrimary' className={classes.typography} variant="body1">{this.props.genre}</Typography>
                        <Avatar className={classes.avatar} src={this.props.artist_image}/>
                    </Grid>
                    <Grid align="center">
                        <Typography color='textPrimary' className={classes.typographyf} variant="h2">
                            {this.props.artist_name.split(' ')
                            .map(word => word[0].toUpperCase()+ word.slice(1))
                            .join(' ')}
                        </Typography>
                        <Typography color='textPrimary' className={classes.typography} variant="subtitle1">
                            {this.props.name.split(' ')
                            .map(word => word[0].toUpperCase()+ word.slice(1))
                            .join(' ')}
                        </Typography> 
                    </Grid>
                        <Box display="flex" 
                            justifyContent="space-between" 
                            alignItems="center">
                            <Chip label={this.props.tracks_number} className={classes.chip}/>
                            <Chip label={`${this.props.quantity_in_stock}/${this.props.quantity}`} className={classes.chip}/>
                        </Box>
                </CardMedia>
                
            </div>
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