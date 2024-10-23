import React,{useState} from 'react';



function Part1(props){
    const[text,setText]=useState("");
    
    const handle=(e)=>{
        setText(e.target.value);
    }

return(
<div>
    <h1>text Area of {props.name}</h1>
    <textarea onChange={handle} placeholder='Write Something' value={text}></textarea>

</div>
);
}


export default Part1;