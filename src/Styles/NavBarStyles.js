import sizes from "./sizes";

export default {
NavBar: {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start", 
  height: "6vh",
},

logo: {
  marginRight: "15px",
  padding: "0 13px",
  fontSize: "22px",
  backgroundColor: "aliceblue ",
  height: "100%",
  display: "flex",
  alignItems: "center",
  "& a": {
    textDecoration: "none",
    color:"black",
  },
  [sizes.down("sm")]:{
    fontSize: "1rem",
    fontWeight: "500",
  }
},

  slider: {
    width: "350px",
    margin: "0 10px",
    display: "inline-block",

"& .rc-slider-track": {
  background: "transparent",
},

"& .rc-slider-rail": {
  height: "8px",
},

"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover,.rc-slider-handle:focus": {
  background:"green",
  outline: "none",
  border: "2px solid green",
  boxShadow: "none",
  width:"13px",
  height: "13px",
  marginLeft: "0px",
  marginTop: "-2px",
},
  [sizes.down("lg")]:{
    width:"250px"
  },
  [sizes.down("md")]:{
    width:"200px"
  },
  [sizes.down("sm")]:{
    width:"125px"
  },
  [sizes.down("xs")]:{
    width:"75px"
  }
},
selectContainer:{
  marginLeft: "auto",
  marginRight: "1rem"
}
};