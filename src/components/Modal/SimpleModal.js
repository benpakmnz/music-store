import React, { Component , Fragment } from 'react';

// import styles
import { Avatar, Typography, Grid, IconButton, Box, Modal, Button ,withStyles }  from '@material-ui/core';
import styles from './SimpleModalStyle';
import CloseIcon from '@material-ui/icons/Close';

// import redux
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

class SimpleModal extends Component {
    constructor(props){
        super(props);
        this.state= {
            open: true,
        }
    }
    
// this.props.itemRemove, this.props.itemDuplicate - dispatch actions
// this.props.close - function passed from parent component (Item)
    dialogBoxHandler = (handleType) => {
        if(handleType === 'remove'){
            this.props.itemRemove(this.props.listTitle , this.props.indexItem) 
            this.props.close()
        }else{ 
            this.props.itemDuplicate(this.props.listTitle , this.props.indexItem)
        }
    }
// dynamic items to be rendered into modal   
    modalMode = (modalType) => {
        const { classes } = this.props;
        switch(modalType){
          case 'remove':
            return(
                <Fragment>
                    <Button 
                        color="primary" 
                        className={classes.button} 
                        variant="contained" aria-label="Add" 
                        onClick={() => this.dialogBoxHandler('remove')}>
                        yes
                    </Button>
                    <Button 
                        color="primary" 
                        variant="outlined" 
                        aria-label="Add" 
                        className={classes.button} 
                        onClick={this.props.close}>
                        no
                    </Button>
                </Fragment> 
            )
            case 'duplicate':
                this.dialogBoxHandler('duplicate')
                return(
                    <Button 
                        color="primary" 
                        className={classes.button} 
                        variant="contained" aria-label="Add" 
                        onClick={this.props.close}>
                        thanxxxx
                    </Button>
                    )
            default:
                break;
        }
      }

    render(){
        const { classes } = this.props;
        return(
        <Fragment>
            <Modal className={classes.modal}aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                onClose={this.props.close}
                open={this.state.open}>
                    <Box className={classes.paper}>
                       <IconButton aria-label="Delete" className={classes.icon}>
                           <CloseIcon fontSize="small" onClick={this.props.close}/>
                       </IconButton>     
                        <Avatar className={classes.avatar} src={this.props.image}/> 
                        <Grid>
                        <Typography align="center" variant="h2">
                            {this.props.modalType === 'remove'?
                            'Are you sure you would like to remove' : 'you have just duplicate:'}
                        </Typography>
                        <Typography align="center" variant="body1">
                            {this.props.artist_name} | {this.props.name} 
                            {this.props.modalType === 'remove'? '?' : null}
                        </Typography>
                        </Grid>
                        <Grid>
                        {this.modalMode(this.props.modalType)}
                        </Grid>  
                    </Box>
            </Modal>  
        </Fragment>
    )
}
}

const mapDispatchToProps = dispatch => {
    return {
        itemRemove: (lsType, index) => dispatch(actionCreators.itemRemove(lsType, index)),
        itemDuplicate: (lsType, index) => dispatch(actionCreators.itemDuplicate(lsType, index)) 
    }
  }
 
  export default connect('', mapDispatchToProps)(withStyles(styles)(SimpleModal));