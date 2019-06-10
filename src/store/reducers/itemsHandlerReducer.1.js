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

            return {
                ...state,
                filteredRecordLs: state.initialRecordItems.filter(item => {
                    return (item.artist_name.includes(searchedRecord) || item.name.includes(searchedRecord))
            })
            }
            case actionTypes.FILTER_CDS_LIST:
            const searchedCd = action.search.toLowerCase();
            return {
                ...state,
                filteredCdLs: state.initialCdItems.filter(item => {
                    return (item.artist_name.includes(searchedCd) || item.name.includes(searchedCd))
            })
            }   
        case actionTypes.FILTER_RESET:
            return {
                ...state,
                filteredRecordLs: action.listType === 'Vinyl Records' ? [] : state.filteredRecordLs,
                filteredCdLs: action.listType === 'Cd' ? [] : state.filteredCdLs
            } 
        case actionTypes.REMOVE:
                const recordFilterdCase = state.initialRecordItems.indexOf(state.filteredRecordLs[action.payload.index])
                const cdFilterdCase = state.initialCdItems.indexOf(state.filteredCdLs[action.payload.index])
                console.log(recordFilterdCase)
                console.log(cdFilterdCase)
            return {
                ...state,
                initialRecordItems: action.payload.lsType === 'Vinyl Records' ?
                    state.initialRecordItems.filter((item, i) => i !== action.payload.index) : state.initialRecordItems,
                initialCdItems: action.payload.lsType === 'Cds' ?
                    state.initialCdItems.filter((item, i) => i !== action.payload.index) : state.initialCdItems,
                filteredRecordLs:action.payload.lsType === 'Vinyl Records' ?
                    state.filteredRecordLs.filter((item, i) => i !== action.payload.index) : state.filteredRecordLs,
                filteredCdLs:action.payload.lsType === 'Cds' ?
                    state.filteredCdLs.filter((item, i) => i !== action.payload.index) : state.filteredCdLs
            } 
        case actionTypes.DUPLICATE:
                const addedRecordItem =state.initialRecordItems[action.payload.index]
                const addedCdItem =state.initialCdItems[action.payload.index]
                return {
                    ...state,
                    initialRecordItems: action.payload.lsType === 'Vinyl Records' ?
                        [...state.initialRecordItems, addedRecordItem] : state.initialRecordItems,
                    initialCdItems: action.payload.lsType === 'Cds' ?
                        [...state.initialCdItems, addedCdItem] : state.initialCdItems,
                } 
        default: 
            return state;
    };
    
};

export default itemsListReducer;