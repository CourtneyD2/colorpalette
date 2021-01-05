import transitions from "@material-ui/core/styles/transitions";

import sizes from "./sizes"
import bg from  "./bg.svg"

export default {
  "@global":{
    ".fade-exit":{
      opacity: "1"
    },
    ".fade-exit-active":{
      transition: "opacity 0.5s ease-out",
      opacity: "0"
    }
  },

  root:{
    height: "100vh",
    overflow: "scroll",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#000000",
    backgroundImage: `url(${bg})`
    /* background by SVGBackgrounds.com */
  }, 
  heading:{
    fontSize: "2rem"
  },
  container:{
    width: "50%", 
    display: "flex",
    alignItem: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]:{
      width: "55%"
    },
    [sizes.down("lg")]:{
      width: "65%"
    },
    [sizes.down("md")]:{
      width: "60%"
    },
    [sizes.down("sm")]:{
      width: "50%"
    }
  },
  nav:{
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    "& a":{      
      color: "white",    
    },
  },
  palettes:{
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    [sizes.down("md")]:{
      gridTemplateColumns: "repeat(2, 50%)",
      gridGap: "1rem"
    },
    [sizes.down("sm")]:{
      gridTemplateColumns: "repeat(1, 100%)",
    }
  }

};