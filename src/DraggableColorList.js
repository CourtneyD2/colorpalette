import React from "react";
import DraggableColorBox from "./DraggableColorBox";
import { SortableContainer } from "react-sortable-hoc";
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {withStyles} from "@material-ui/styles"

const styles ={
  "@global":{
    ".fade-exit":{
      opacity:"1"
    },
    ".fade-exit-active":{
      transition: "opacity 0.5s ease-out",
      opacity: "0"
    }

  }
}

const DraggableColorList = SortableContainer(({ colors, removeColor }) => {
  return (
    <TransitionGroup style={{ height: "100%" }}>
      {colors.map((color, i) => (
        <CSSTransition key={color.name} classNames="fade" timeout={500}>
          <DraggableColorBox
            index={i}          
            color={color.color}
            name={color.name}
            handleClick={() => removeColor(color.name)}
          />
        </CSSTransition>
      ))}
      </TransitionGroup>
  );
});
export default withStyles(styles)(DraggableColorList);