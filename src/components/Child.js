import React from "react";

const Child =React.memo((props) =>{

    console.log('child')
    return <h1 onClick={props.onClick}>{props.name}</h1>
})

export default Child;