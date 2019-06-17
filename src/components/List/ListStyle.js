export default theme => ({
        root:{
          margin: '30px auto'
        },
        gridList: {
          justifyContent: 'space-between',
          [theme.breakpoints.down('xs')]: {
            flexWrap: 'nowrap',
          },
          [theme.breakpoints.up('sm')]: {
            flexWrap: 'wrap',
          },
        },
      });