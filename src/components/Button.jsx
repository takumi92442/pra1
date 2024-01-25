export const Button =(props) =>{
    const {text,A,setA} = props
    const Changebutton = (inputText) =>{
        setA([...A, inputText])
      }
      return(
       <button onClick = {() =>Changebutton(text)}>in</button>
      )
    }


