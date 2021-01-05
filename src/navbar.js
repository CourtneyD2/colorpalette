import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Snackbar from "@material-ui/core/Snackbar"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import {withStyles} from "@material-ui/styles"
import Slider from "rc-slider"

import "rc-slider/assets/index.css"
import styles from "./Styles/NavBarStyles"




class NavBar extends Component {
  constructor(props){
    super(props);
    this.state ={open: false}
    this.handleChange = this.handleChange.bind(this);
    this.closeSB = this.closeSB.bind(this);
  }

  handleChange(e){
    this.setState({open:true})
    this.props.handleChange(e.target.value);
  }

  closeSB (){
    this.setState({open: false});
  }


  
  render (){
    const {level, changeLevel, format, showSlider, classes} = this.props;
    return (
      <header className={classes.NavBar}>
        <div className={classes.logo}>
          <Link to="/" onClick={this.props.slideUp}>Color Palette</Link>
        </div>
        {showSlider &&
        <div>
          <span>Level: {level}</span>        
          <div className={classes.slider}>
            <Slider defaultValue={level} min={100} max={900} step={100} onChange={changeLevel} />
          </div>
        </div>}
        <div className={classes.selectContainer}>
          <Select value={format} onChange={this.handleChange} >
            <MenuItem value="hex">Hex - #ffffff </MenuItem>
            <MenuItem value="rgb">RGB - rgb(red,green,blue) </MenuItem>
            <MenuItem value="rgba">RGBA - rgba(red,green,blue,alpha)</MenuItem>
          </Select>
        </div>
        <Snackbar 
          anchorOrigin={{vertical:"bottom", horizontal: "center"}} 
          open={this.state.open} 
          autoHideDuration={2000} 
          message={<span id= "messageID">Format Changed: {format} </span>}
          ContentProps={{"aria-describedby": "messageID"}} 
          onClose={this.closeSB} 
          action={[
            <IconButton onClick={this.closeSB} color="inherit" >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    );
  }
}

export default withStyles(styles)(NavBar);