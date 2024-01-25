export const Input = (props) =>{
    const {setText} = props
    return <input type="text" onChange={(text) =>{setText(text.target.value)}} ></input>
}