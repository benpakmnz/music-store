import * as actionTypes from '../actions/actionTypes';

const initialState = { 
    initialCdItems:[],
    initialRecordItems:[],
    filteredRecordLs:[],
    filteredCdLs:[]
};

const itemsListReducer = (state= initialState, action) => {
    switch(action.type){
        case actionTypes.STORE_INITIAL_DATA:
            if(action.payload.itemType === 'records'){ 
                return ({
                    ...state,
                    initialRecordItems: [action.payload.item, ...state.initialRecordItems]
                })
            }else{ 
                return ({
                    ...state,
                    initialCdItems: [action.payload.item, ...state.initialCdItems]
                })
            }
        case actionTypes.FILTER_RECORDS_LIST:
            const searchedRecord = action.search.toLowerCase();
            const itemsToFilter = state.initialRecordItems.filter(item => {
                return (item.artist_name.includes(searchedRecord) || item.name.includes(searchedRecord))
            })
            itemsToFilter.length <=0 ? alert('no items as been found'): alert(`${itemsToFilter.length} items found`)

            return {
                ...state,
                filteredRecordLs: itemsToFilter
            }
            case actionTypes.FILTER_CDS_LIST:
                    const searchedCd = action.search.toLowerCase();
                    const itemsToFilterCd = state.initialCdItems.filter(item => {
                        return (item.artist_name.includes(searchedCd) || item.name.includes(searchedCd))
                    })
                    itemsToFilterCd.length <=0 ? alert('no items as been found'): alert(`${itemsToFilterCd.length} items found`)
        
                    return {
                        ...state,
                        filteredCdLs: itemsToFilterCd
                    }
  
        case actionTypes.FILTER_RESET:
            return {
                ...state,
                filteredRecordLs: action.listType === 'Vinyl Records' ? [] : state.filteredRecordLs,
                filteredCdLs: action.listType === 'Cd' ? [] : state.filteredCdLs
            } 
        case actionTypes.REMOVE:
                let updateList = []
                const recordFilterdCase = state.initialRecordItems.indexOf(state.filteredRecordLs[action.payload.index])
                const cdFilterdCase = state.initialCdItems.indexOf(state.filteredCdLs[action.payload.index])
                if(action.payload.lsType === 'Vinyl Records'){
                    if(recordFilterdCase >= 0){
                        updateList = state.initialRecordItems.filter((item, i) => i !== recordFilterdCase)
                    }else{
                        updateList = state.initialRecordItems.filter((item, i) => i !== action.payload.index)  
                    }
                }else if(action.payload.lsType === 'Cds'){
                    if(cdFilterdCase >= 0){
                        updateList = state.initialCdItems.filter((item, i) => i !== cdFilterdCase)
                    }else{
                        updateList = state.initialCdItems.filter((item, i) => i !== action.payload.index)  
                    }
                }
            return {
                ...state,
                initialRecordItems: action.payload.lsType === 'Vinyl Records' ?
                    updateList : state.initialRecordItems,
                initialCdItems: action.payload.lsType === 'Cds' ?
                    updateList : state.initialCdItems,
                filteredRecordLs:action.payload.lsType === 'Vinyl Records' ?
                    state.filteredRecordLs.filter((item, i) => i !== action.payload.index) : state.filteredRecordLs,
                filteredCdLs:action.payload.lsType === 'Cds' ?
                    state.filteredCdLs.filter((item, i) => i !== action.payload.index) : state.filteredCdLs
            } 
        case actionTypes.DUPLICATE:
                let updateFilter = '' 
                if(state.filteredRecordLs.length > 0 && action.payload.lsType === 'Vinyl Records'){
                     updateFilter= 'RecordsLs'
                }else if(state.filteredCdLs.length > 0 && action.payload.lsType === 'Cds'){
                     updateFilter= 'CdLs'
                }
         
                return {
                    ...state,
                    initialRecordItems: action.payload.lsType === 'Vinyl Records' ?
                        [...state.initialRecordItems, state.initialRecordItems[action.payload.index]] : state.initialRecordItems,
                    initialCdItems: action.payload.lsType === 'Cds' ?
                        [...state.initialCdItems, state.initialCdItems[action.payload.index]] : state.initialCdItems,
                    filteredRecordLs: updateFilter === 'RecordsLs' ?
                        [...state.filteredRecordLs, state.filteredRecordLs[action.payload.index]] : state.filteredRecordLs,
                    filteredCdLs: updateFilter === 'CdLs' ?
                        [...state.filteredCdLs, state.filteredCdLs[action.payload.index]] : state.filteredCdLs

                } 
        default: 
            return state;
    };
    
};

export default itemsListReducer;