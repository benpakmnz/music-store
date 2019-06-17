import React, { Component } from 'react';

// import components
import SimpleModal from '../Modal/SimpleModal';
import DialogBox from './DialogBox';

// import styles
import { CardMedia, Avatar, Typography, Chip, Grid, withStyles }  from '@material-ui/core';
import styles from './ItemStyle';

class Item extends Component {
    constructor(props){
        super(props);
        this.state= {
            dialogBoxVisable: false,
            modalType: null,
        }
    }
    // set modal type that will also handle it to render 
    modalOpen = (type) => {
        this.setState({  modalType: type })
    }
    // set modal state type to null that will also handle to be removed
    modalClose = () => {
        this.setState({ modalType: null })
    }
    // switch dialog state to be render/removed
    dialogBoxHandle = (boolean) => {
        this.setState({ dialogBoxVisable: boolean})
    }
 
    render(){
        const { classes } = this.props;
        // shortcut to ternery operator
        const itemType = this.props.listType === 'Cds';
        // upper case names
        const artistName = this.props.artist_name.split(' ').map(word => word[0].toUpperCase()+ word.slice(1)).join(' ');
        const itemName = this.props.name.split(' ').map(word => word[0].toUpperCase()+ word.slice(1)).join(' ')
        return(
                
        <li>
            {this.state.modalType ?
            <SimpleModal 
                close={this.modalClose}
                modalType={this.state.modalType}
                listTitle={this.props.listTitle}
                indexItem={this.props.indexItem}
                image={this.props.image}
                name={this.props.name}
                artist_name={this.props.artist_name}
                /> : null}
            <CardMedia
                className= {classes.cardMedia}
                style={itemType ? {borderRadius: '50%', alignItems: 'center'} : {borderRadius: 20}} 
                image={this.props.image}
                onMouseEnter={()=> this.dialogBoxHandle(true)} 
                onClick={()=> this.dialogBoxHandle(true)} 
                onMouseLeave={()=> this.dialogBoxHandle(false)}>
                {this.state.dialogBoxVisable? <DialogBox modalOpen={this.modalOpen}/> : null}
                <Grid className={ itemType ? `${classes.itemData} ${classes.itemCdData}` : classes.itemData} >
                    <Typography color='textPrimary' variant="body1">{this.props.genre}</Typography>
                    <Avatar className={classes.avatar} src={this.props.artist_image}/>
                </Grid>
                <Grid align="center">
                    <Typography color='textPrimary' variant="h2">
                        {artistName}
                    </Typography>
                    <Typography color='textPrimary' variant="subtitle1">
                        {itemName}
                    </Typography>
                </Grid>
                <Grid className={ itemType ? `${classes.itemData} ${classes.itemCdData}` : classes.itemData} >
                    <Chip label={this.props.tracks_number} className={classes.chip}/>
                    <Chip label={`${this.props.quantity_in_stock}/${this.props.quantity}`} className={classes.chip}/>
                </Grid>
            </CardMedia>
        </li>
    )
}
}

  export default (withStyles(styles)(Item));