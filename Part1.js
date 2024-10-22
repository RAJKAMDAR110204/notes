import React,{useState} from 'react';



function Part1(props){

const[text,setText]=useState("Type here");


const handle=(e)=>{
    setText(e.target.value);
}

return(
<div>
<h1>Text Area of {props.name}</h1>

<textarea onChange={handle}  value={text} rows="10"  placeholder="Type message here"   />



</div>
);
}

export default Part1;