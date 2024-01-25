import React, { useState } from "react";
import { List } from "./components/List"
import { Button } from "./components/Button"
import { Input } from "./components/Input"

const App = () =>{
  const [A,setA]=useState([]) 
  const[text,setText] =useState()

  return(
  <>
  <div>hello</div>
  {/* <input type="text" onChange={(text) =>{setText(text.target.value)}} ></input> */}
  <Input setText = {setText}/>
  <Button text={text} A={A} setA={setA}/>
  <List A={A} setA={setA}/>
  </>
  )
}

export default App