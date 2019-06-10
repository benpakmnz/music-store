import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './store/actions/index';
import List from './components/List/List'
import './App.scss';
import Data from './utilites/data';

class App extends Component{
  componentDidMount(){
    this.props.storeInitialData(Data.vinyl_records, 'records')
    this.props.storeInitialData(Data.cds, 'cds')   
  }
  

render(){
  return (
    <div className="App">
      <List listItems=
              {
                this.props.filteredRecordLs.length > 0 ? 
                this.props.filteredRecordLs : 
                this.props.initialRecordItems
              } 
            title= 'Vinyl Records'
            remove= {this.props.itemRemove}
            dulipcate= {this.props.itemDuplicate}/>              
      <List listItems=             
              {
                this.props.filteredCdLs.length > 0 ? 
                this.props.filteredCdLs : 
                this.props.initialCdItems
              } 
            title= 'Cds'
            remove= {this.props.itemRemove}
            dulipcate= {this.props.itemDuplicate}/>
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
      itemRemove: (lsType, index) => dispatch(actionCreators.itemRemove(lsType, index)),
      itemDuplicate: (lsType, index) => dispatch(actionCreators.itemDuplicate(lsType, index)) 
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
