import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './store/actions/index'
// import Item from './components/Item/Item';
import List from './components/List/List'
import './App.scss';
import Data from './utilites/data';

class App extends Component{
  componentDidMount(){
    this.props.storeInitialData(Data.vinyl_records, 'records')
    this.props.storeInitialData(Data.cds, 'cds')  
      
  }

//   render(){
//     return (
//       <div className="App">
//         <h2 style={{color: 'rgba(0, 0, 0, 0.85)'}}>Vinyl Records</h2>
//         <div>
//           <input></input>
//           <button>search</button>
//           <button>reset</button>
//         </div>
//         <div style={{display: 'flex', flexFlow: 'wrap', justifyContent: 'right', width: '75vw', margin: 'auto'}}>
//           {this.props.initialCdItems.map(item => 
//             <Item 
//                 genre={item.genre}
//                 artist_image={item.artist_image}
//                 artist_name={item.artist_name}
//                 name={item.name}
//                 image={item.image}
//                 tracks_number={item.tracks_number}
//                 quantity_in_stock={item.quantity_in_stock}
//                 quantity={item.quantity}
//             />
//           )}
//         </div>
//         <h2 style={{color: 'rgba(0, 0, 0, 0.85)'}}>Cds</h2>
//         <div>
//           <input></input>
//           <button>search</button>
//           <button>reset</button>
//         </div>
//         <div style={{display: 'flex', flexFlow: 'wrap', justifyContent: 'right', width: '75vw', margin: 'auto'}}>
//           {this.props.initialRecordItems.map(item => 
//             <Item 
//                 genre={item.genre}
//                 artist_image={item.artist_image}
//                 artist_name={item.artist_name}
//                 name={item.name}
//                 image={item.image}
//                 tracks_number={item.tracks_number}
//                 quantity_in_stock={item.quantity_in_stock}
//                 quantity={item.quantity}
//             />
//           )}
//         </div>

//       </div>
//     );
//   }
// }



render(){
  return (
    <div className="App">
      <List listItems={this.props.initialRecordItems} title= 'Vinyl Records'/>              
      <List listItems={this.props.initialCdItems} title= 'Cds'/>
    </div>
  );
}
}


const mapStateToProps = state => {
  return {
    initialRecordItems: state.initialRecordItems,
    initialCdItems: state.initialCdItems
  }
}

const mapDispatchToProps = dispatch => {
  return {
      storeInitialData: (list, type) => dispatch(actionCreators.storeInitialData(list, type))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
