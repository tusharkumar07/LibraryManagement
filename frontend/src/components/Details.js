import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "../style/setdetails.css";
import Header from "./Header";
const Details = () => {
  const [details, setDetails] = useState([]);
  const [clk,setClk]=useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    try {
      axios.get("http://localhost:5000/details").then((res) => {
        setDetails(res.data);
        console.log(res.data);
      });
    } catch (err) {
      console.log(`Error in details page GET request : ${err}`);
    }
  }, [clk]);
  const removeEntry = (index) => {
    axios
      .post("http://localhost:5000/removeData", { indexData: index })
      .then((res) => {
        console.log(res.data);
        if (res.data === true) {
          swal({
            icon: "success",
            title: "Deleted!",
            text: `Entry has been Deleted`,
            showConfirmButton: false,
            timer: 2000,
          });
          setClk(true);
          clk?navigate("/details"):navigate("/");
        }
      })
      .catch((err) => {
        console.log(`Error in Deleting Data from frontend : ${err}`);
      });
  };
  const fullDate=new Date();
  const currentDate=fullDate.toLocaleDateString();
  const currentTime=fullDate.toLocaleTimeString();
  const sendMail=(emailInfo,dateInfo)=>{
    const data={
      email:emailInfo,
      date:dateInfo
    }
    axios.post("http://localhost:5000/sendMail",data).then((res)=>{
      if(res.data===true){
        console.log("Sent mail");
        swal({
          icon: "success",
          title: "Sent",
          text: `Mail has been Sent`,
          showConfirmButton: false,
          timer: 2000,
        });

      }
    }).catch((err)=>{
      console.log(`Error in sending mail : ${err}`);
    })
  }
  return (
    <>
    <Header/>
    <div className="today">
    <h4 className="currentDate">Current Date : {currentDate}</h4>
    <h4 className="currentTime">Current Time : {currentTime}</h4>
    </div>
    <div className="base">
        <h5 className='lb1'>Name</h5>
        <h5 className='lb2'>Email</h5>
        <h5 className='lb3'>Book Id</h5>
        <h5 className='lb4'>Roll No</h5>
        <h5 className='lb5'>Issue Date</h5>
        <h5 className='lb6'>submit Date</h5>
        <h5 className='lb7'>Send Mail</h5>
        <h5 className='lb8'>submited</h5>
    </div>
      {details.map((item) =>{
        return( 
            <div className="container" style={{marginLeft:"0px"}}>
            <p key={item.id} className="name" style={{color: 'black'}}>
              {item.name}
            </p>
            <p key={item.id} className="email" style={{color: 'black'}}>
              {item.email}
            </p>
            <p key={item.id} className="bookId" style={{color: 'black'}}>
              {item.bookId}
            </p>
            <p key={item.id} className="rollNo" style={{color: 'black'}}>
              {item.rollNo}
            </p>
            <p key={item.id} className="startDate" style={{color: 'black'}}>
              {item.startDate}
            </p>
            <p key={item.id} className="lastDate" style={{color: 'black'}}>
              {item.lastDate}
            </p>
            
            {/* <p key={item.id} className="fine" style={{color: 'black'}}>
              {Math.floor(new Date()-new Date(item.lastDate) / (1000 * 60 * 60 * 24))}
            </p> */}
            <button
              onClick={() => {
                sendMail(item.email,item.startDate);
              }}
              className="btn btn-primary mail"
              style={{height:'2em'}}
            >
              send
            </button>

            <button
              onClick={() => {
                removeEntry(item._id);
              }}
              className="btn btn-danger delete"
              style={{height:'2em'}}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};
export default Details;
