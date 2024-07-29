import axios from 'axios';
import '../style/addData.css';
import React, { useState } from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from "./Footer";

const AddData = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bookId, setBookId] = useState('');
    const [rollNo, setRollNo] = useState('');
    const [startDate, setStartDate] = useState('');
    const [lastDate, setLastDate] = useState('');
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Check if the password is correct
        if (password === '123456789') {
            setIsPasswordCorrect(true);
        } else {
            swal({
                icon: 'error',
                title: 'Access Denied!',
                text: 'Incorrect password. Access denied.',
                showConfirmButton: false,
                timer: 2000
            });
            navigate('/')
        }
    };

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
        });
        navigate('/details');
    };

    if (!isPasswordCorrect) {
        return (
            <>
                <Header />
                <div className='allData' style={{ backgroundColor: "#9EC8B9" }}>
                    <div className='main2' style={{ backgroundColor: "#5C8374" }}>
                        <h2 className='IssueBooks' style={{ color: "white" }}>Only Admin Can Access !</h2>
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/admin-control-panel-4487949-3722637.png" alt="Admin Control Panel" style={{ width:"40rem" }}/>
                        <form onSubmit={handleLogin}>
                        <div className='formInside'>
                        <p>Password:</p>
                        <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                            <div className='btVerify'>
                            <button className='btn px-4 text-white ' type="submit" style={{ backgroundColor: "#ed3320",border:"none", }}>Verify</button>
                            </div>
                            
                        </form>
                        
                    </div>
                    
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <div className='allData' style={{ backgroundColor: "#9EC8B9" }}>
                <div className='main' style={{ backgroundColor: "#5C8374" }}>
                    <h2 className='IssueBooks' style={{ color: "white" }}>Library Service Counter !</h2>
                    <form className='FormCenter'>
                        <p>Enter your Name :</p><input type="text" placeholder="Name" value={name} onChange={(val) => setName(val.target.value)} />
                        {/* <br></br> */}
                        <p>Enter your Email :</p><input type="email" placeholder="Email" value={email} onChange={(val) => setEmail(val.target.value)} />
                        {/* <br></br> */}
                        <p>Enter your Book Id :</p><input type="number" placeholder="Book Id" value={bookId} onChange={(val) => setBookId(val.target.value)} />
                        {/* <br></br> */}
                        <p>Enter Your Roll No. :</p><input type="number" placeholder="Roll No" value={rollNo} onChange={(val) => setRollNo(val.target.value)} />
                        {/* <br></br> */}
                        <p>Enter Books Issuing Date :</p><input type="date" value={startDate} placeholder="Issue Date" className='date1' onChange={(val) => setStartDate(val.target.value)} />
                        {/* <br></br> */}
                        <p>Enter the Due Date :</p><input type="date" value={lastDate} placeholder="Due Date" className='date2' onChange={(val) => setLastDate(val.target.value)} />
                        {/* <br></br> */}
                        <button className='btn px-5 text-white mt-3' style={{ backgroundColor: "#ed3320" }} onClick={data}>Add</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddData;
