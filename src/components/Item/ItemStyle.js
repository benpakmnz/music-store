export default theme => ({
    button:{
        margin: '5px',
        borderRadius: '20px',
        width: '100px',
    },
    cardMedia: {
        justifyContent: 'space-between',
        position: 'relative',
        flexDirection: 'column',
        height: 'inherit',
        padding: '30px 20px',
        boxSizing: 'border-box',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backgroundBlendMode: 'soft-light',
        display: 'flex',
        boxShadow: '0 10px 30px 0 rgba(207, 217, 230, 0.5), 10px 10px 30px 0 #e8ecf1',
        [theme.breakpoints.down('xs')]: {height: '53vh',width: '91vw'},
        [theme.breakpoints.up('xs')]: {height: '52vh',width: '92vw'},
        [theme.breakpoints.up('sm')]: {height: 400, width: 380, marginRight: 0},
        margin: '0 20px 30px 0' 
    },

    avatar:{
        height: 50,
        width: 50,
    },

    itemCdData:{
        width: '110px!important',
    },

    itemData:{
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '-webkit-fill-available',
    },
    
    dialogBox:{
        position: 'absolute',
        background: '#7d7d7df0',
        width: 'inherit',
        height: 'inherit',
        borderRadius: 'inherit',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        right: 0
    },
})