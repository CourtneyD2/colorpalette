import React, { Component } from 'react'
import {CopyToClipboard} from "react-copy-to-clipboard"
import {Link} from "react-router-dom"
import {withStyles} from "@material-ui/styles"
import styles from "./Styles/ColorBoxStyles"

class ColorBox extends Component {
  constructor(props){
    super(props);
    this.state={copied: false}
    this.handleCopy =this.handleCopy.bind(this);
  }

  handleCopy(){
    this.setState(
      {copied:true}, 
      ()=> {setTimeout(
        ()=> this.setState(
          {copied:false}),
           1250)});
  }

  render (){
    const {name, background, paletteID, id, showLink, classes} = this.props;
    const {copied} = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.handleCopy}>
         <div style={{background: background}} className={classes.ColorBox}>
           <div style={{background: background}} className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} />
           <div className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
             <h1>copied!</h1>
             <p className={classes.copyText}>{this.props.background}</p>
           </div>
           <div>
             <div className={classes.boxContent}>
               <span className= {classes.colorName}>{name}</span>
             </div>
             <button className={classes.copyBtn}> Copy </button>
           </div>
           {showLink &&
           <Link to={`/colorpalette/palette/${paletteID}/${id}`} onClick={e => e.stopPropagation()}>
            <span className ={classes.seeMore}>More</span>
           </Link> 
          }
        </div> 
       </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);