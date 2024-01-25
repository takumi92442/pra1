export const List=  (props) =>{
    const {A,setA} = props
    const Delete = (index) =>{
        const newArray1 = [...A]
        console.log(index)
        console.log(newArray1)
        // setA(newArray1.filter((item)=>{item.key !==index}))
        setA(newArray1.filter((item) => item && item.key !== index));

    }
    return(
        <>
        <ul>
            {A.map((name,index) =>{
                return( <div key ={index}>
            <li  >{name}</li>
            <button onClick={() =>{Delete(index)}}>削除</button>
            </div>)})}
        </ul>
        </>
    )
}

