import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

class SearchBar extends Component{
    constructor(props){
        super(props)
        
        this.search = React.createRef()

      }
    
      onSubmit = () => {
        console.log(this.props.listType)
        this.props.filterList(this.search.current.value, this.props.listType)
        this.search.current.value = ''
    
    }
    render(){
        console.log(this.search)
        return(
            <div>
                    <input 
                    label = 'search'  
                    ref={this.search} 
                    placeholder = {`Search for ${this.props.listType}`} 
                    />
                    <button onClick = {event => this.onSubmit(event)}>search</button>
                    <button onClick = {() => this.props.filterReset(this.props.listType)}>reset</button>
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

export default connect('',mapDispatchToProps)(SearchBar)
