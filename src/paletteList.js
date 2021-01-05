import React, { PureComponent } from 'react'
import {Link} from "react-router-dom"
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from "@material-ui/icons/Check"
import CloseIcon from "@material-ui/icons/Close"
import Avatar from '@material-ui/core/Avatar';
import { blue, red } from '@material-ui/core/colors';

import {withStyles} from "@material-ui/styles"
import MiniPalette from "./minipalette"

import styles from "./Styles/PaletteListStyles"



class PaletteList extends PureComponent {
  constructor(props){
    super(props);
    this.state = {deleteDialogOpen: false, deleteID: ""};
    this.toggleDialog = this.toggleDialog.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  toggleDialog(id =""){
    this.setState((st)=> ({deleteDialogOpen: !st.deleteDialogOpen, deleteID:id}));
  }
  handleDelete(){
    this.props.deletePalette(this.state.deleteID);
    this.toggleDialog();
  }

  goToPalette (id){
    this.props.history.push(`/palette/${id}`);
  }
 
  render (){
    const {palettes, classes, deletePalette} = this.props;
    return (
      <div className = {classes.root}> 
        <div className={classes.container}>        
          <nav className= {classes.nav}>
            <h1 className={classes.heading}>Palettes</h1>
            <Link to="/palette/new" onClick={this.props.slideUp}>Create Palette</Link>
          </nav> 
            <TransitionGroup className={classes.palettes}>
            {palettes.map(
              palette=>(
                <CSSTransition key={palette.id} classNames="fade" timeout={500}>               
                  <MiniPalette  id={palette.id} {...palette} handleClick={() =>this.goToPalette (palette.id)} slideDown={this.props.slideDown} openDialog={this.toggleDialog} /> 
                </CSSTransition>
              )
            )}
            </TransitionGroup>
        </div>
        <Dialog open={this.state.deleteDialogOpen} onClose={this.toggleDialog}>
          <DialogTitle>Delete Palette</DialogTitle>
          <List>
            <ListItem button onClick={this.handleDelete}>
              <ListItemAvatar>
                <Avatar style={{backgroundColor:blue[100], color: blue[600]}}>
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='delete' />
            </ListItem>
            <ListItem button onClick={this.toggleDialog}>
              <ListItemAvatar>
                <Avatar style={{backgroundColor:red[100], color: red[600]}}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='cancel' />
            </ListItem>
          </List>      
        </Dialog>  
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);