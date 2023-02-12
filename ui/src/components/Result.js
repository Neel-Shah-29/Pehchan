import React from "react";

const Result=()=>{
    const ans = localStorage.getItem("data")
   
    return(
        <>
            <h3>{ans}</h3>
        </>
    )
}

export default Result;