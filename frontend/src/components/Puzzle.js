import React, { useState } from "react";

function Puzzle(){
    
    const answer="shimla";
    const [data,setData]=useState();
    function checkData(){
        const realData=data.toLowerCase();
        if(realData===answer){
            window.alert("Well done, correct answer");
            console.log("Correct");
           
        }else{
            window.alert("Good Guess, Try again later");
            console.log("Incorrect");
        }
    }
    return(
        <>
            <h1>This is Puzzle page</h1>
            <br/><br/>
            <h3>What is the capital of Himachal pradesh</h3>
            <form>
                <input type="text" name="result" onChange={(e)=>{setData(e.target.value)}}/>
                <input type="submit" onClick={checkData}/>
            </form>
        </>
    )
}
export default Puzzle;