import React, { Component } from 'react';

// import components
import List from './components/List/List';
import Data from './utilites/data';

// import redux
import { connect } from 'react-redux';
import * as actionCreators from './store/actions/index';

class App extends Component{

  // this.props.storeInitialData, this.props.storeInitialData - dispatch actions
  // to store data in different Arreys inside the global store
  componentDidMount(){
    this.props.storeInitialData(Data.vinyl_records, 'records')
    this.props.storeInitialData(Data.cds, 'cds')   
  }
  
  render(){
    return (
      <div className="App">
        <List listItems= { 
          this.props.filteredRecordLs.length > 0 ? 
          this.props.filteredRecordLs : 
          this.props.initialRecordItems} 
          title= 'Vinyl Records'/>              
        <List listItems={
          this.props.filteredCdLs.length > 0 ? 
          this.props.filteredCdLs : 
          this.props.initialCdItems} 
          title= 'Cds'/>
      </div>
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
