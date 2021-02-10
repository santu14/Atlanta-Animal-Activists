import { createMuiTheme } from '@material-ui/core';
import { orange, lightGreen } from '@material-ui/core/colors';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: orange[500]

        },
        secondary: {
            main: lightGreen['A400']
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
            backgroundColor: lightGreen['A400'],
            '&:hover': {
                backgroundColor: lightGreen['A200'],
            }
        }
    },
    MuiTooltip: {
        tooltip: {
           
            border: '2px solid ${theme.palette.primary.main}',
            color: theme.palette.primary.main
        },
        arrow: {
            color: theme.palette.primary.main
        }
    },
    MuiInput:{
        root:{
            top: theme.spacing(2),
            border: '1px solid ${grey[500]}',
        }
    },


}

export default theme;
