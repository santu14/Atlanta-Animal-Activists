import { makeStyles } from '@material-ui/core';
import theme from './Theme';
const useStyles = makeStyles (() => ({
    typographyStyles :{
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bolder',
        marginTop: '25px',
        marginBottom: '25px',
    },
    paper: {
        backgroundColor: '#363b46',
        padding: theme.spacing(2), 
        textAlign: 'center',  
    },


}));

export default useStyles;