import * as actionTypes from './actionTypes';


// lowering case names to make sure all items names are looking the same
// and forwarding it to reducer
export const InitialData = (item , itemType) => {
    item.artist_name = item.artist_name.toLowerCase()
    item.name = item.name.toLowerCase() 
    return {
        type: actionTypes.STORE_INITIAL_DATA,
        payload: {
            item: item,
            itemType: itemType
        }
    }
}
// reaciving data from data.Json via componentDidMount from App.js
// and mapping them into single items to be passed to 
// storing via InitialData function above
export const storeInitialData = (list , itemType) => {
    return dispatch => {   
            list.map((item) => { 
                return(
                dispatch(InitialData(item, itemType)))
                })
    }
}
// filtering action:
// lowering case names to make sure all items names are looking the same
export const filterList = (search, listType) => {
    const searchKey = search.toLowerCase();
    const filterActionType = 
        listType === 'Vinyl Records' ? actionTypes.FILTER_RECORDS_LIST : actionTypes.FILTER_CDS_LIST
    return {
        type: filterActionType,
        searchKey
        
    }
}
// reset filtering action:
export const filterReset = (listType) => {
    return {
        type: actionTypes.FILTER_RESET,
        listType
    }
}
// removal items action:
export const itemRemove = (lsType, index) => {
    return {
        type: actionTypes.REMOVE,
        payload: {
            lsType,
            index
        }
    }
}
// duplicate items action:
export const itemDuplicate = (lsType, index) => {
    return {
        type: actionTypes.DUPLICATE,
        payload: {
            lsType,
            index
        }
    }
}