import React, { Component } from 'react';
import { CardMedia , Avatar, Typography , Chip , Grid, Button }  from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import FileCopy from '@material-ui/icons/FileCopy';
import styles from './ItemStyle';
import SimpleModal from '../Modal/SimpleModal'


class Item extends Component {
    constructor(props){
        super(props);
        this.state= {
            dialogBoxVisable: false,
            modalType: '',
            open: false,
            checked: false
        }
    }
    modalOpen = (type) => {
        this.setState({  modalType: type, open: true })
    }

    modalClose = () => {
        this.setState({  open: false })
    }
    dialogBoxOpen = () => {
        this.setState({ dialogBoxVisable: true })
    }
    dialogBoxClose = () => {
        this.setState({ dialogBoxVisable: false })
    }

    dialogBox = () => {
        const { classes } = this.props;
        return(
        <Grid className={ classes.dialogBox }>
            <Button color="primary" 
                    className={classes.button} 
                    variant="contained" aria-label="Add" 
                    onClick={() => this.modalOpen('duplicate')}>
                    <FileCopy/>
            </Button>
            <Button color="default" 
                    className={classes.button}
                    variant="contained" 
                    aria-label="Add" 
                    onClick={() => this.modalOpen('remove')}>
                        delete
            </Button>
        </Grid>
      )
    }
   
    render(){
        const { classes } = this.props;
        const itemType = this.props.listType === 'Cds'
        return(
                
        <li>
            {this.state.open ?
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
    )
}
}

  export default (withStyles(styles)(Item));