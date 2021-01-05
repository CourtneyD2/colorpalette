import { Component } from "react"
import {Route, Switch, withRouter} from "react-router-dom"
import {TransitionGroup, CSSTransition} from "react-transition-group"
import Palette from "./palette"
import PaletteList from "./paletteList"
import SCPalette from "./singlecolorpalette"
import NewPaletteForm from "./NewPaletteForm"
import Page from "./page"

import seedColors from "./seedcolors"
import {generatePalette} from "./colorHelper"
import './App.css'


class App extends Component {
  constructor (props){
    super(props);
    
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = { palettes: savedPalettes || seedColors, format:"hex", dir:"down" };
    
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
    this.slideUp = this.slideUp.bind(this);
    this.slideDown = this.slideDown.bind(this);

  }

  findPalette(id) {
    return this.state.palettes.find(function(palette) {
      return palette.id === id;
    });
  }
  deletePalette(id) {
    this.setState(
      st => ({ palettes: st.palettes.filter(palette => palette.id !== id) }),
      this.syncLocalStorage
    );
  }
  savePalette(newPalette) {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  }
  syncLocalStorage() {
    //save palettes to local storage
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  }

  changeFormat (val){
    this.setState({format:val});
  }

  slideUp(){
    this.setState(()=>({dir: "up"}));
  }
  slideDown(){
    this.setState(()=>({dir: "down"}));
  }

  render(){
  return (
    <div className="App">
      <Route render={({location})=>(
        <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={500}>
        <Switch location={location}>
        <Route 
          exact 
          path="/palette/new" 
          render={
            (routeProps)=> 
                <Page dir={this.state.dir}   >
                <NewPaletteForm
                  savePalette={this.savePalette}
                  palettes={this.state.palettes}
                  slideDown={this.slideDown}
                  {...routeProps}
                />
                </Page>
            } 
        />
        <Route 
          exact 
          path="/" 
          render={
            (routeProps)=><Page dir={this.state.dir} ><PaletteList 
                            deletePalette ={this.deletePalette}
                            palettes={this.state.palettes} 
                            slideUp={this.slideUp}
                            slideDown={this.slideDown}
                            {...routeProps} 
                          /></Page>
          } 
        />
        <Route 
          exact 
          path="/palette/:id" Page
          render= {
            routeProps=><Page dir={this.state.dir} ><Palette
                          format = {this.state.format} 
                          handleChange={this.changeFormat}
                          slideUp ={this.slideUp}
                          palette = {generatePalette(this.findPalette(routeProps.match.params.id))} 
                        /></Page>
          } 
        />
        <Route 
          exact 
          path="/palette/:paletteId/:colorId" 
          render={
            (routeProps)=><Page dir={this.state.dir}  ><SCPalette
                            format = {this.state.format}
                            handleChange={this.changeFormat}
                            colorId ={routeProps.match.params.colorId}  
                            slideUp={this.slideUp}
                            palette = {generatePalette(this.findPalette(routeProps.match.params.paletteId))} 
                          /></Page>}
       /> 
        <Route 
          render={
            (routeProps)=><Page dir={this.state.dir} ><PaletteList 
                            deletePalette ={this.deletePalette}
                            palettes={this.state.palettes} 
                            slideUp={this.slideUp}
                            slideDown={this.slideDown}
                            {...routeProps} 
                          /></Page>
          } 
        />
      </Switch>
      </CSSTransition>
      </TransitionGroup>
      )} />
      
    </div>
  );
  }
}

export default withRouter(App);
