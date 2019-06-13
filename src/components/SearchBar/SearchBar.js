import React, { Component } from 'react';
import { connect } from 'react-redux';
import {InputAdornment , Input }  from '@material-ui/core';
import * as actionCreators from '../../store/actions/index';
import { Button }  from '@material-ui/core';
import '../List/List.scss';

import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    button:{
        margin: 2,
        borderRadius: 20
    },
    textField:{
        width: '80%',
    },
    palette: {
        primary: {
          main: 'red',
        }
    }
  });
  

class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state= {
            inputValue: ''
        }
    }

    updateInputValue(evt) {
        this.setState({
          inputValue: evt.target.value
        });
      }

      onSubmit = () => {
        this.props.filterList(this.state.inputValue, this.props.listType)
        this.setState({
            inputValue: ''
          });
    }

    render(){
        const { classes } = this.props;
        return(
            <div style={{display: 'flex' , alignItems: 'center' , justifyContent: 'space-between' , padding: '0 5px', margin: '0 0 15px 0'}}>
                    <Input fullWidth
                        className={classes.textField}
                        id="adornment-password"
                        value={this.state.inputValue}
                        onChange={event => this.updateInputValue(event)}
                        placeholder = {`Search for ${this.props.listType}`}
                        endAdornment={
                            <InputAdornment position="end">
                            <SearchIcon />
                            </InputAdornment>
                        }
                    />
                    <Button 
                        size="medium" 
                        variant="contained" 
                        aria-label="Add" 
                        className={classes.button} 
                        color="primary" 
                        onClick = {event => this.onSubmit(event)}>search
                    </Button>
                    <Button 
                        size="medium" 
                        variant="outlined" 
                        aria-label="Add" 
                        className={classes.button} 
                        color="primary" 
                        onClick = {() => this.props.filterReset(this.props.listType)}>reset
                    </Button>
                </div>  
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
