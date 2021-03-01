import { makeStyles } from "@material-ui/core";
import theme from "./Theme";
const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bolder",
    marginTop: "25px",
    marginBottom: "25px",
  },
  paper: {
    backgroundColor: "#363b46",
    padding: theme.spacing(2),
    textAlign: "center",
  },

  nav: {
    backgroundImage: "linear-gradient(180deg, #0F0F0F 0%, #38393A 100%)",
    height: '100px',
    paddingTop: '20px'
  },

  logo: {
    width: "50px",
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
  linkDisplay: {
    display: `flex`,
    justifyContent: `space-between`,
    
   
  },
  menuSelections: {
    justifyContent: `center`,
    textTransform: `uppercase`,
  }
}));

export default useStyles;
