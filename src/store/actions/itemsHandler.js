import * as actionTypes from './actionTypes';


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

export const storeInitialData = (list , itemType) => {
    return dispatch => {   
            list.map((item) => {
                console.log(itemType) 
                return(
                dispatch(InitialData(item, itemType)))
                })
    }
}

export const filterList = (search, listType) => {
    const filterActionType = 
        listType === 'Vinyl Records' ? actionTypes.FILTER_RECORDS_LIST : actionTypes.FILTER_CDS_LIST
    return {
        type: filterActionType,
        search
        
    }
}

export const filterReset = (listType) => {
    return {
        type: actionTypes.FILTER_RESET,
        listType
    }
}

export const itemRemove = (lsType, index) => {
    return {
        type: actionTypes.REMOVE,
        payload: {
            lsType,
            index

        }
    }
}

export const itemDuplicate = (lsType, index) => {
    return {
        type: actionTypes.DUPLICATE,
        payload: {
            lsType,
            index

        }
    }
}

// export const setSelectedMovieData = (payload) => {
//     const durationHandler = formatDuration(payload.contentDetails.duration) 
//     const publishedDateHandler = new Date(payload.snippet.publishedAt).toString().split(' ')
//     const viewsHandler = formatViews(payload.statistics.viewCount)
//     return {
//         type: actionTypes.SET_SELECTED_MOVIE_INFO,
//         payload:{
//             Title: payload.snippet.title,
//             ChannelTitle: payload.snippet.channelTitle,
//             ChannelId: payload.snippet.channelId,
//             PublishedAt: `${publishedDateHandler[1]} ${publishedDateHandler[2]}, ${publishedDateHandler[3]}`,
//             FormatedDur: durationHandler,
//             Duration: payload.contentDetails.duration,
//             ViewCount: viewsHandler,
//             SourceVC: payload.statistics.viewCount,
//             VideoUrl: payload.snippet.thumbnails.medium.url,
//             LikeCount:Number(payload.statistics.likeCount),
//             DislikeCount: Number(payload.statistics.dislikeCount),
//             FavoriteCount:Number(payload.favoriteCount),
//             CommentsCount: payload.statistics.commentCount,
//             Description: payload.snippet.description,
//             DescriptionShorten: description(payload.snippet.description),
//             VideoIdEmbedUrl: `https://www.youtube.com/embed/${payload.id}`,
//             VideoIdId: payload.id,
//             ReactionMode: null
//             }
//     }
// }

// export const fetchWatchMovie = (payload) => {
//     return dispatch => { 
//             axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${payload}&key=${API_KEY}`)
//             .then(res => {
//                 dispatch(setSelectedMovieData(res.data.items[0]))
//                 dispatch(initChannelData(res.data.items[0].snippet.channelId))})
//             .catch(error => console.log(error))  
//     }
// }

// export const setChannelData = (payload) => {
//     return {
//         type: actionTypes.SET_CHANNEL_DATA,
//         payload: {
//              Thumbnail: payload.snippet.thumbnails.default.url,
//              Title:payload.snippet.title,
//             }
//     }
// }

// export const initChannelData = (ChannelID) => {
//     return dispatch => { 
//         axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${ChannelID}&key=${API_KEY}`)
//              .then(res => {
//                  dispatch(setChannelData(res.data.items[0]))})
//                 .catch(error => console.log(error))       
//     }
// }

// export const setSelectedMovieComments = (payload) => {
//     const pubdate = formatDate(payload.snippet.topLevelComment.snippet.publishedAt)

//     return {
//         type: actionTypes.SET_MOVIE_COMMENTS,
//         payload:{
//             CommentId:payload.id,
//             Comment: payload.snippet.topLevelComment.snippet.textDisplay,
//             UserPic: payload.snippet.topLevelComment.snippet.authorProfileImageUrl.replace('s28','s40'),
//             AuthorDisplayName: payload.snippet.topLevelComment.snippet.authorDisplayName,
//             LikeCount: payload.snippet.topLevelComment.snippet.likeCount,
//             DislikeCount: payload.snippet.topLevelComment.snippet.dislikeCount? payload.snippet.topLevelComment.snippet.dislikeCount : 0 ,
//             ReactionMode: null,
//             PublishdAtSource: payload.snippet.topLevelComment.snippet.publishedAt,
//             PublishedAt: pubdate
//         }
        
//     }
// }

// export const setSelectedMovieDataComments = (payload) => {
//     return {
//         type: actionTypes.SET_MOVIE_DATA_COMMENTS,
//         payload    
//     }
// }

// export const clearCommentsList = (dataMode) => {
//     return {
//     type: actionTypes.CLEAR_COMMENTS_LIST,
//     payload: dataMode
//     }
// }

// export const initMovieComments = (movieId) => {
//     return dispatch => {   
//         axios.all([
//             axios.get(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${movieId}&key=${API_KEY}`),
//             axios.get(`https://yt-clone-e7862.firebaseio.com/comments/${movieId}.json`)
//         ])
//         .then(axios.spread((res1, res2) => {
//             res1.data.items.map(comment => 
//                 dispatch(setSelectedMovieComments(comment)))
//             Object.values(res2.data).map(comment =>
//                 dispatch(setSelectedMovieDataComments(comment)))
//             }))
//             .catch(error => console.log(error))
//     }
// }

// export const reactionHandler = (reactionMode,reactiontype,reactionid) => {
//         if (reactiontype === 'movie'){ 
//         return {
//             type: actionTypes.MOVIE_REACTION_ADJUSMENTS,
//             reaction: reactionMode
//         }
//         }else if (reactiontype === 'comment'){
//             return{
//             type: actionTypes.COMMENT_REACTION_ADJUSMENTS,
//             reaction: reactionMode,
//             id:reactionid
//         }
// }
// }

// export const handleCommentSubmit = (comment,movieId) => {
//     const time = new Date(Date.now()).toISOString()
//     const timeConverted = formatDate(time)
//     const commentPayload = {
//         AuthorDisplayName:'Benny Pakman',
//         Comment: comment,
//         CommentId: comment,
//         DislikeCount: 0,
//         LikeCount: 0,
//         PublishedAt: timeConverted,
//         ReactionMode: "",
//         UserPic: 'https://yt3.ggpht.com/-PcciNQlrmUE/AAAAAAAAAAI/AAAAAAAAAAA/D1j1-rfjOpw/s88-c-k-no-mo-rj-c0xffffff/photo.jpg',
//       }
//       axios.post(`https://yt-clone-e7862.firebaseio.com/comments/${movieId}.json`,commentPayload)

//       return (
//         {
//         type: actionTypes.ADD_COMMENT,
//         payload: commentPayload
//         }
//     )
// }