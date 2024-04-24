  //method to handle the click event
  //and set the openColumn state
  //opening one will close the rest

import { Dispatch, SetStateAction } from "react";

  /**
   * 
   * @param index - index of the clicked column
   * @param openColumn - state of the columns
   * @param setOpenColumn - function to set the state
   */
  export const handleClick = (index:number, openColumn: boolean[], setOpenColumn:Dispatch<SetStateAction<boolean[]>>) => {
    const currentOpenColumn = openColumn;
    console.log("currentOpenColumn", currentOpenColumn);
    //check the value of clicked column
    const currentState = currentOpenColumn[index];
    console.log("currentState", currentState);
    if (currentState) {
      setOpenColumn([false, false, false]);
    } else {
      //set the index of clicked column to true
      //and set the rest to false
      setOpenColumn([false, false, false]);
      const newOpenColumn = [false, false, false];
      newOpenColumn[index] = true;
      setOpenColumn(newOpenColumn);
    }
  };