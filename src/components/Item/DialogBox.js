import React, { Component } from 'react';

// import styles
import { Grid, Button, withStyles }  from '@material-ui/core';
import FileCopy from '@material-ui/icons/FileCopy';
import styles from './ItemStyle';

class DialogBox extends Component {
   
    render(){
        const { classes } = this.props;
        return(
            <Grid className={ classes.dialogBox }>
            <Button color="primary" 
                    className={classes.button} 
                    variant="contained" aria-label="Add" 
                    onClick={() => this.props.modalOpen('duplicate')}>
                    <FileCopy/>
            </Button>
            <Button color="default" 
                    className={classes.button}
                    variant="contained" 
                    aria-label="Add" 
                    onClick={() => this.props.modalOpen('remove')}>
                        delete
            </Button>
        </Grid>
    )
}
}

  export default (withStyles(styles)(DialogBox));