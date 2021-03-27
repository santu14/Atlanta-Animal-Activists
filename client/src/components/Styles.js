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
    backgroundColor: "#444546",
    padding: theme.spacing(2),
    textAlign: "center",
    verticalAlign: "baseline",
    borderRadius: '0',
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
    [theme.breakpoints.down("xs")]: {
      width: "25px",
    },
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
    display: `flex`,
    height: '27px',

  },
  linkDisplay: {
    display: `flex`,
    justifyContent: `space-between`,
    height: '27px',
    top: '15px',


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


  },
  bull: {
    // flexShrink: '0',
    position: "relative",
    width: "100%",

 
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
      fontSize: "100px",
      lineHeight: "100px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
      lineHeight: "40px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "24px",
      lineHeight: "40px",
    },

  },
  // --------------  About ------------------------------
  aboutCont: {
    marginBottom: "150px",
    display: "flex",
  },
  aboutPaper: {
    backgroundColor: "#444546",
    padding: theme.spacing(2),
    textAlign: "center",
    height: "129px",
    left: "314px",
    top: "624px",
    borderBottom: '10px solid #E25201',
    borderRadius: '0',
    [theme.breakpoints.down("xs")]: {

      height: "20px",
      marginBottom: "10px",
    },
  },
  aboutTitle: {
    fontFamily: 'Varela Round',
    position: "relative",
    fontSize: '38px',
    fontWeight: '400',
    lineHeight: '230px',
    letterSpacing: '0em',
    display: "flex",
    flexDirection: "column",
    marginTop: 'auto',
    color: '#FF8E26',
    [theme.breakpoints.down("md")]: {
      fontSize: "26px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      lineHeight: '50px',
    },
  },
  aboutText: {
    position: 'relative',
    width: '70%',
    left: '50px',
    right: '50px',
    top: '103px',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'flex-end',
    color: '#C4C4C4',
    
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      lineHeight: "17px",
      top: '33px',

    },
    [theme.breakpoints.down("xs")]: {
      left: '13px',
      right: '13px',
      width: '90%',
      alignItems: 'center',


    },


  },




  // --------------  IMG Uploader ------------------------------
  imgboxContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  imgCard: {
    margin: "auto",
    height: "200px",
    width: "300px",

    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      height: "150px",
      width: "200px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "200px",
      width: "300px",
    },
  },
  imgName: {
    marginTop: "10px",
    width: "200px",
    [theme.breakpoints.down("md")]: {
      width: "150px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "200px",
    },
  },
  imgDisplay: {
    marginTop: "auto",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  // --------------- Gallery ------------------------------
  galleryImgCard: {
    margin: "auto",
    height: "650px",
    width: "1000px",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      height: "450px",
      width: "700px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "200px",
      width: "300px",
    },
  },

  galleryImgDisplay: {
    marginTop: "auto",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  imgTextDiv: {
    position: "absolute",
    bottom: "30px",
    backgroundColor: "rgba(0,0,0,0.60)",
    width: "1000px",
    fontSize: "20px",
    color: "#E0E0E0",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      width: "700px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
      width: "300px",
    },

  },
  imgText: {
    paddingLeft: "20px",

  },
}));

export default useStyles;
