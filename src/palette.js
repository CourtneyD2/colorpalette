import React, { Component } from 'react'
import ColorBox from "./colorbox"
import NavBar from "./navbar"
import {withStyles} from "@material-ui/styles"
import styles from "./Styles/PaletteStyles"

class Palette extends Component {
  constructor(props){
    super(props);
    this.state ={level: 500}
    this.changeLevel = this.changeLevel.bind(this);    
  }

  changeLevel (newLevel){
    this.setState({level: newLevel})
  }

  render (){
    const {level} =this.state;
    const {colors, paletteName, emoji, id} = this.props.palette;
    const {format, classes} = this.props;
    const colorBoxes = colors[level].map (
      color => 
      (<ColorBox 
        key={color.id} 
        background={color[format]} 
        name={color.name} 
        id={color.id}  
        paletteID = {id}
        showLink = {true}
      />));

    return (
       <div className={classes.Palette}>
         <NavBar level={level} changeLevel={this.changeLevel} handleChange={this.props.handleChange} format={format} showSlider={true} slideUp={this.props.slideUp}/>
         <div className={classes.PaletteColors}>
          {colorBoxes}
         </div>
        <footer className={classes.PaletteFooter}>{paletteName}<span className={classes.emoji}>{emoji}</span></footer>
       </div> 
    );
  }
}

export default withStyles(styles)(Palette);