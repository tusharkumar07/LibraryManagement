import axios from 'axios';
import '../style/addData.css';
import React,{useState} from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
const AddData=()=>{
    const navigate=useNavigate();
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [bookId,setBookId]=useState();
    const [rollNo,setRollNo]=useState();
    const [startDate,setStartDate]=useState();
    const [lastDate,setLastDate]=useState();
    const data = () => {
    // Check if any of the input fields are empty
    if (!name || !email || !bookId || !rollNo || !startDate || !lastDate) {
        // If any field is empty, show an alert to fill all fields
        swal({
            icon: 'error',
            title: 'Error!',
            text: 'Please fill all fields.',
            showConfirmButton: false,
            timer: 2000
        });
        return; // Exit the function without proceeding
    }

    // If all fields are filled, proceed with the data submission
    console.log(name, email, bookId, rollNo, startDate, lastDate);
    axios.post("http://localhost:5000/entry", {
        iname: name,
        iemail: email,
        ibookId: bookId,
        irollNo: rollNo,
        istartDate: startDate,
        ilastDate: lastDate
    }).then((res) => {
        if (res.data === true) {
            swal({
                icon: 'success',
                title: 'Added!',
                text: `${name}'s data has been added.`,
                showConfirmButton: false,
                timer: 2000
            });
            console.log(res.data);
        }
    }).catch((err) => {
        console.log(`Error in response :${err}`);
    })
    navigate('/details');
}

    return (
        <>
        <Header/>
    <div className='allData' style={{backgroundColor:"#9EC8B9"}}>  
        <div className='main' style={{backgroundColor:"#5C8374"}} >
        <h2 className='IssueBooks' style={{color:"white"}}>Library Service Counter !</h2>
        <form>
        <p>Name :</p><input type="text" placeholder="Enter your Name" value={name} onChange={(val)=>{setName(val.target.value)}}/>
            <br></br>
            <p>Email :</p><input type="email" placeholder="Enter your Email" value={email}  onChange={(val)=>{setEmail(val.target.value)}}/>
            <br></br>
            <p>Book Id :</p><input type="number" placeholder="Enter your Book Id" value={bookId}  onChange={(val)=>{setBookId(val.target.value)}}/>
            <br></br>
            <p>Roll No. :</p><input type="number" placeholder="Roll No" value={rollNo}  onChange={(val)=>{setRollNo(val.target.value)}}/>
            <br></br>
            <p>Start Date :</p><input type="date" value={startDate}  placeholder="Issue Date" className='date1' onChange={(val)=>{setStartDate(val.target.value)}}/>
            <br></br>
            <p>Last Date :</p><input type="date" value={lastDate} placeholder="Last Submission Date" className='date2' onChange={(val)=>{setLastDate(val.target.value)}}/> 
            <br></br>
            <button className='btn px-5 text-white' style={{backgroundColor:"#1B4242"}}  onClick={()=>data()}>Add</button>
        </form>
        </div>
       
    </div>
    </>
    )
}

export default AddData;