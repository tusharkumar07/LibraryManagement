import { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import '../style/departments.css';

const Availability=()=>{
   
    const [data,setData]=useState([]);
    const [detail,setDetail]=useState([]);
    
    useEffect(()=>{
        getInfo();
        axios.get("http://localhost:5000/details").then((res)=>{
        setDetail(res.data)
        console.log(res.data);
    })
    },[])

    const getInfo=()=>{
        axios.get("http://localhost:5000/apiCse").then((res)=>{
        // console.log(res.data);
        setData(res.data);
    }).catch((err)=>{
        console.log(err);
    })
    }
    
    return(
        <>
            <Header/>
            <div className='CSE'>
            {
                data.map((item)=>{
                    return(
                    <div className='semesters'>
                        <img src={item.img}/>
                        <div className='semData'>
                            <p className='course'>{item.course}</p>
                            <p className='bookName'>Author: {item.author}</p>
                            <p className='bookName'>Books: {item.quantity}</p>
                            <p className='semester'>Semester: {item.semester}</p>
                        </div>
                    </div>
                    )})}
            </div>
        </>
        
    )
}
export default Availability;