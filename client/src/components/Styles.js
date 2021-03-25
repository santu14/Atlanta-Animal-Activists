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
    backgroundColor: '#38393A',
    padding: theme.spacing(2),
    textAlign: "center",
    verticalAlign: "baseline",

  },

//   ------------- NAV ------------------------------------------
  nav: {
    backgroundImage: "linear-gradient(180deg, #0F0F0F 0%, #38393A 100%)",
    width: "100%",
    paddingTop: "20px",
    boxShadow: " 0px 5px 6px 3px rgba(0, 0, 0, 0.25)",
  },
  logo: {
    width: "60px",
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    fontFamily: 'Tuffy',
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
  },
//   --------- JUMBOTRON -------------------------------------
  jumbotronContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    height: "500px",
    [theme.breakpoints.down("md")]: {
        height: "200px",
      },
    [theme.breakpoints.down("xs")]: {
        height: "100px",
      },
  },
  bull: {
    // flexShrink: '0',
    position: "absolute",
    width: "100%",
    verticalAlign: "baseline",
left: "0px",

    justifyContent: "center",
  },
  jumboText: {
    position: "absolute",
    fontFamily: "Franklin Gothic Heavy",
    fontSize: "150px",
    lineHeight: "150px",
    textAlign: "center",
    color: "#FFFFFF",
    opacity: "0.48",
    textShadow: "0px 5px 5px rgba(0, 0, 0, 0.8)",
  
    [theme.breakpoints.down("md")]: {
      fontSize: "90px",
      lineHeight: "90px",
    },
   
    [theme.breakpoints.down("xs")]: {
        fontSize: "40px",
        lineHeight: "40px",
      },
  },
  imgboxContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  imgCard: {
    margin: "auto",
    height: "250px",
    width: "250px",
    overflow: "hidden",

  },
  imgName: {
    marginTop:"10px",
    width: "200px"
  },
  imgDisplay: {
    marginTop: "auto",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    
  }
}));

export default useStyles;
