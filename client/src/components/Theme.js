import { createMuiTheme } from '@material-ui/core';
import { orange, lightGreen, grey } from '@material-ui/core/colors';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: orange[500]

        },
        secondary: {
            main: '#38393A'
        },
        type: "dark",

    }
});

theme.props = {
    MuiButton: {
        disableElevation: false
    },
    MuiTooltip: {
        arrow: true
    },
    MuiInput: {
   disableUnderline: true,
    },



};

theme.overrides = {
    MuiButton: {
        root: {
            backgroundColor: orange[500],
            '&:hover': {
                backgroundColor: orange[300],
            },

        },
        containedPrimary: {
            backgroundColor: orange[300],
            '&:hover': {
                backgroundColor: orange[500],
            },

        },
        containedSecondary: {
            backgroundColor: '#38393A',
            '&:hover': {
                backgroundColor: '#808081',
            }
        }
    },
    MuiTooltip: {
        tooltip: {
           
            border: `2px solid ${theme.palette.primary.main}`,
            color: theme.palette.primary.main
        },
        arrow: {
            color: theme.palette.primary.main
        }
    },
    MuiInput:{
        root:{
            top: theme.spacing(2),
            border: `1px solid ${grey[500]}`,
        }
    },
    


}

export default theme;
