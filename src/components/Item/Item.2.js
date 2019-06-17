import React, { Component } from 'react';
import { CardMedia , Avatar, Typography , Chip , Grid }  from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Button }  from '@material-ui/core';
import * as actionCreators from '../../store/actions/index';
import FileCopy from '@material-ui/icons/FileCopy';
import styles from './ItemStyle';
import Modal from '@material-ui/core/Modal';

class Item extends Component {
    constructor(props){
        super(props);
        this.state= {
            dialogBoxVisable: false,
            open: false,
            openModal: true,
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
        this.handleClose()
        handleType === 'remove'? 
        this.props.itemRemove(listType , index) : this.props.itemDuplicate(listType , index)
    }

    dialogBox = () => {
        const { classes } = this.props;
        return(
        <Grid className={ classes.dialogBox }>
            <Button color="primary" 
                    className={classes.button} 
                    variant="contained" aria-label="Add" 
                    onClick={() => this.handleOpen('duplicate')}>
                    <FileCopy/>
            </Button>
            <Button color="default" 
                    className={classes.button}
                    variant="contained" 
                    aria-label="Add" 
                    onClick={() => this.handleOpen('remove')}>
                        delete
            </Button>
        </Grid>
      )
    }

    handleOpen = (type) => {
        console.log(type)
        this.setState({
          open: true,
        })
        this.modalMode(type)
      }
    
      handleClose = () => {
        this.setState({
          open: false
        })
      }


    modalMode = (type) => {
        const { classes } = this.props;
        switch(type){
          case 'remove':
            return(
              <div className={classes.paper}>
              <Typography variant="h6" id="modal-title">
                Are you sure you would like to remove this item ? 
              </Typography>
              <Button color="primary" 
                      className={classes.button} 
                      variant="contained" aria-label="Add" 
                      onClick={this.dialogBoxHandler('remove' , this.props.listTitle , this.props.i)}>yes</Button>
              <Button color="primary" 
                      className={classes.button} 
                      variant="contained" aria-label="Add" 
                      onClick={this.handleClose}>no</Button>
                        
            </div>
            )
            case 'duplicate':
                return(
                  <div className={classes.paper}>
                  <Typography variant="h6" id="modal-title">
                    this item was added
                  </Typography>
                  <Button color="primary" 
                            className={classes.button} 
                            variant="contained" aria-label="Add" 
                            onClick={this.dialogBoxHandler('duplicate' , this.props.listTitle , this.props.i)}>ok</Button>
                  </div>
                )
              default:
                 break;
        }
      }

    render(){
        const { classes } = this.props;
        const itemType = this.props.listType === 'Cds'
        return(
        <div>
                   <Modal aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            onClose={this.handleClose}
            open={this.state.open}
        >
            {this.state.open ? this.modalMode() : null} 
        </Modal>
        
        <li>
             <CardMedia
                className= {classes.cardMedia}
                style={itemType ? {borderRadius: '50%'} : {borderRadius: 20}} 
                image={this.props.image}
                onMouseEnter={this.dialogBoxOpen} 
                onClick={this.dialogBoxOpen} 
                onMouseLeave={this.dialogBoxClose}>
                {this.state.dialogBoxVisable? this.dialogBox() : null}
                <Grid className={ itemType ? `${classes.itemData} ${classes.itemCdData}` : classes.itemData} >
                    <Typography color='textPrimary' variant="body1">{this.props.genre}</Typography>
                    <Avatar className={classes.avatar} src={this.props.artist_image}/>
                </Grid>
                <Grid align="center">
                    <Typography color='textPrimary' variant="h2">
                        {this.props.artist_name.split(' ')
                        .map(word => word[0].toUpperCase()+ word.slice(1))
                        .join(' ')}
                    </Typography>
                    <Typography color='textPrimary' variant="subtitle1">
                        {this.props.name.split(' ')
                        .map(word => word[0].toUpperCase()+ word.slice(1))
                        .join(' ')}
                    </Typography>
                </Grid>
                <Grid className={ itemType ? `${classes.itemData} ${classes.itemCdData}` : classes.itemData} >
                    <Chip label={this.props.tracks_number} className={classes.chip}/>
                    <Chip label={`${this.props.quantity_in_stock}/${this.props.quantity}`} className={classes.chip}/>
                </Grid>
            </CardMedia>
        </li>
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