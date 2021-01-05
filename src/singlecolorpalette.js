import React, { Component } from 'react'
import ColorBox from "./colorbox"
import NavBar from "./navbar"
import {Link} from "react-router-dom"
import styles from "./Styles/PaletteStyles"

import {withStyles} from "@material-ui/styles"




class SCPalette extends Component {
  constructor(props){
    super(props);
      this._shades = this.gatherShades (this.props.palette, this.props.colorId);      
  }

  gatherShades(palette, filtercolor){
    let shades =[];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(allColors[key].filter(color => color.id === filtercolor))
    }
    return shades.slice(1);
  }
  

  render (){
    const colorbox = this._shades.map(color => (<ColorBox key={color.name} name={color.name} background={color[this.props.format]} showLink={false} /> ))
    const {classes} = this.props;
    return (
       <div className={`SC-Palette ${classes.Palette}`}>
         <NavBar handleChange={this.props.handleChange} format={this.props.format} showSlider={false} slideUp={this.props.slideUp} />
         <div className={classes.PaletteColors}>
           {colorbox}
           <div className={classes.goBack}><Link to={`/palette/${this.props.palette.id}`} onClick={this.props.slideUp}>Go Back</Link></div>
          </div>
         <footer className={classes.PaletteFooter}>{this.props.palette.paletteName}<span className={classes.emoji}>{this.props.palette.emoji}</span></footer>
       </div> 
    );
  }
}

export default withStyles(styles)(SCPalette);