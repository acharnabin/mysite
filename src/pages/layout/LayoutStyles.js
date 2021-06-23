import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 240;
 const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      background: "white",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      background: "#fcfbff",
      border: "none",
    },
    drawerPaper: {
      width: drawerWidth,
      background: "#fcfbff",
      border: "none",
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      // backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    appbarRight: {
      display: "flex",
      justifyContent: "space-evenly",
      flexDirection: "row",
      alignItems: "center",
      position: "absolute",
      right: "0px",
    },
    profile: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    logo: {
      display: "flex",
    },
    logoIcon: {
      height: "40px",
      width: "40px",
      left: "17px",
      top: "17px",
      borderRadius: "35px",
      padding: "5px",
      background: "linear-gradient(42.28deg, #330B86 32.9%, #7329C6 97.3%)",
      color: "white",
    },
    logoText: {
      height: "21.31147575378418px",
      width: "100px",
      left: "80px",
      top: "26px",
      borderRadius: "0px",
      fontSize: "28px",
      fontWeight: "bold",
      textTransform: "uppercase",
      color: "#330B86",
    },
  }));
   
export default  useStyles