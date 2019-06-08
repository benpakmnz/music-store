import * as actionTypes from '../actions/actionTypes';

const initialState = { 
    initialCdItems:[],
    initialRecordItems:[],
};

const itemsListReducer = (state= initialState, action) => {
    switch(action.type){
        case actionTypes.STORE_INITIAL_DATA:
            if(action.payload.itemType === 'records'){ 
                return ({
                    ...state,
                    initialRecordItems: [action.payload.item, ...state.initialRecordItems]
                })
            }else if(action.payload.itemType === 'cds'){ 
                return ({
                    ...state,
                    initialCdItems: [action.payload.item, ...state.initialCdItems]
                })
            }        
        default: return state
    }
    
}

export default itemsListReducer;