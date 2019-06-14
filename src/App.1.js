import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './store/actions/index';
import List from './components/List/List'
import Data from './utilites/data';

import { Container }  from '@material-ui/core';

class App extends Component{
  componentDidMount(){
    this.props.storeInitialData(Data.vinyl_records, 'records')
    this.props.storeInitialData(Data.cds, 'cds')   
  }
  

render(){
  return (
    <Container maxWidth="lg">
      <List listItems=
              {
                this.props.filteredRecordLs.length > 0 ? 
                this.props.filteredRecordLs : 
                this.props.initialRecordItems
              } 
            title= 'Vinyl Records'/>              
      <List listItems=             
              {
                this.props.filteredCdLs.length > 0 ? 
                this.props.filteredCdLs : 
                this.props.initialCdItems
              } 
            title= 'Cds'/>
    </Container>
  );
}
}


const mapStateToProps = state => {
  return {
    initialRecordItems: state.initialRecordItems,
    initialCdItems: state.initialCdItems,
    filteredRecordLs: state.filteredRecordLs,
    filteredCdLs: state.filteredCdLs
  }
}

const mapDispatchToProps = dispatch => {
  return {
      storeInitialData: (list, type) => dispatch(actionCreators.storeInitialData(list, type)),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
