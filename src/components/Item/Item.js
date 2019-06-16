import React, { Component } from 'react';
import {Box , Avatar, Typography , Chip , Grid }  from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Button }  from '@material-ui/core';
import * as actionCreators from '../../store/actions/index';
import FileCopy from '@material-ui/icons/FileCopy';
// import '../List/List.scss'
import './Item.scss'

const styles = theme => ({
    button:{
        margin: '5px',
        borderRadius: '20px',
        width: '100px',
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
        console.log(this.props.listType)
        const { classes } = this.props;
        const itemType = this.props.listType === 'Vinyl Records'
        return(
            <div className={itemType ? 'itemContainer' : 'itemContainer itemCd'}
                style={{backgroundImage: `url(${this.props.image}`}}
                onMouseEnter={this.dialogBoxOpen} 
                onClick={this.dialogBoxOpen} 
                onMouseLeave={this.dialogBoxClose}
            >
                {this.state.dialogBoxVisable? this.dialogBox() : null}
                <Grid container style={{width: itemType ? null: 150}} justify="space-between" alignItems="center">
                    <Typography color='textPrimary' className={classes.typography} variant="body1">
                        {this.props.genre}
                    </Typography>
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
                <Grid container style={{width: itemType ? null: 150}} justify="space-between" alignItems="center">
                        <Chip label={this.props.tracks_number} className={classes.chip}/>
                        <Chip label={`${this.props.quantity_in_stock}/${this.props.quantity}`} className={classes.chip}/>
                    </Grid>             
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