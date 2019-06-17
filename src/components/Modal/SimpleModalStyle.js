export default theme => ({
    modal:{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    paper: {
        position: 'absolute',
        justifyContent: 'space-around',
        [theme.breakpoints.down('xs')]: {
          width: '85vw',
          height: '60vh'
        },
        [theme.breakpoints.up('sm')]: {
          width: 500,
          height: 280
        },
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: 10,
        outline: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 20,

    },
    avatar:{
        height: 150,
        width: 150,
    },
    button:{
        margin: '5px',
        borderRadius: '20px',
        width: '100px',
    },
    icon:{
        alignSelf: 'flex-start',
        position: 'absolute',
        top: 15
    }

});
