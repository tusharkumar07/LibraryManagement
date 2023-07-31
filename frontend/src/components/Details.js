import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "../style/setdetails.css";
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
  }, []);
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
          setClk(!clk);
          clk?navigate("/details"):navigate("/");
        }
      })
      .catch((err) => {
        console.log(`Error in Deleting Data from frontend : ${err}`);
      });
  };

  const backHome=()=>{
    navigate("/")
  }
  return (
    <>
    <button onClick={backHome} className="btn btn-danger">Back</button>
    <div className="base">
        <h5 className='lb1'>Name</h5>
        <h5 className='lb2'>Email</h5>
        <h5 className='lb3'>Book Id</h5>
        <h5 className='lb4'>Roll No</h5>
        <h5 className='lb5'>Issue Date</h5>
        <h5 className='lb6'>Submission Date</h5>
    </div>
      {details.map((item) =>{
        return( 
            <div className="container">
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
            <button
              onClick={() => {
                removeEntry(item._id);
              }}
              className="btn btn-primary"
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
