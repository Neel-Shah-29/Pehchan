import React from "react";
import Editimg from "./Editimg";
import Navb from "./Navb";

const Result=()=>{
    const ans = localStorage.getItem("data")
   
    return(
        <>
     <Navb/>
        <div style={{backgroundImage: "url('https://images.unsplash.com/photo-1461360228754-6e81c478b882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80')" }}>
        <h5 style={{color:'white',textAlign:'center',paddingTop:'1rem'}}>Image quality - {ans}</h5>
            <Editimg/>
        </div>
           
        </>
    )
}

export default Result;