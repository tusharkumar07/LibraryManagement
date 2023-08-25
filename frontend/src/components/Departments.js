
import Header from './Header';
import "../style/departments.css";
import axios from "axios";
import { useEffect, useState } from 'react';
const Departments=()=>{
    
    const [cse,setCse]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5000/apiCse").then((res)=>{
            // console.log(res.data);
            setCse(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    },[cse]);

    return(<>
        <Header />
        <h4 className='cseMain'>CSE Departments</h4>
        <div className='CSE'>
            {
                cse.map((item)=>{
                    return(
                    <div className='semesters'>
                        <img src={item.img}/>
                        <div className='semData'>
                            <p className='course'>{item.course}</p>
                            <p className='bookName'>Author : {item.author}</p>
                            {/* <p className='bookName'>Book : {item.bookName}</p> */}
                            <p className='semester'>Semester : {item.semester}</p>
                        </div>
                    </div>
                    )
                })
            }
        </div>
        {/* <div className='ECE'>
            <h4 className='eceMain'>This Is ECE Departments</h4>
        </div>
        <div className='IT'>
            <h4 className='itMain'>This Is IT Departments</h4>
        </div> */}
    </>)
}
export default Departments;