import React, { Component } from 'react';

// import styles
import {InputAdornment , Input , Grid, withStyles, Button }  from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import styles from './SearchBarStyle';

// import redux
import * as actionCreators from '../../store/actions/index';
import { connect } from 'react-redux';

class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state= {
            inputValue: ''
        }
    }
// chatching and storing input value
    updateInputValue(evt) {
        this.setState({
          inputValue: evt.target.value
        });
    }
// this.props.filterList - dispatch actions
// reset state input value
    onSubmit = () => {
        this.props.filterList(this.state.inputValue, this.props.listType)
        this.setState({
            inputValue: ''
          });
    }

    render(){
        const { classes } = this.props;
        return(
            <Grid container className={classes.root}>
                <Grid item xs={6} sm={9} md={10}>
                    <Input fullWidth className={classes.input} 
                        value={this.state.inputValue}
                        onChange={event => this.updateInputValue(event)}
                        placeholder = {`Search for ${this.props.listType}`}
                        endAdornment={
                            <InputAdornment position="end">
                            <SearchIcon/>
                            </InputAdornment>}/>
                </Grid>
                <Grid item> 
                    <Button 
                        size="small" variant="contained"
                        className={classes.button} 
                        color="primary" 
                        onClick = {event => this.onSubmit(event)}>search
                    </Button>
                    <Button 
                        size="small" 
                        variant="outlined" 
                        aria-label="Add" 
                        className={classes.button} 
                        color="primary" 
                        onClick = {() => this.props.filterReset(this.props.listType)}>reset
                    </Button>
                </Grid>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => {
  return {
      filterList: (search, listType) => dispatch(actionCreators.filterList(search, listType)),
      filterReset: (listType) => dispatch(actionCreators.filterReset(listType))
  }
}

export default connect('',mapDispatchToProps)(withStyles(styles)(SearchBar))
