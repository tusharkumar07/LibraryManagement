import { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import '../style/departments.css';
import Footer from "./Footer";
import HomeRules from "./HomeRules";


const Issued = () => {
    const [data, setData] = useState([]);
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        getInfo();
        getIssuedBooks();
    }, []);

    const getInfo = () => {
        axios.get("http://localhost:5000/apiCse")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const getIssuedBooks = () => {
        axios.get("http://localhost:5000/details")
            .then((res) => {
                setDetail(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const updateBookQuantity = (bookId) => {
        axios.put(`http://localhost:5000/apiCse/${bookId}`)
            .then(() => {
                setData(prevData => {
                    return prevData.map(item => {
                        if (item.bookId === bookId) {
                            return { ...item, quantity: item.quantity - 1 };
                        }
                        return item;
                    });
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const isBookAvailable = (bookId) => {
        return detail.some(item => item.bookId === bookId);
    }

    return (
        <div style={{backgroundColor:"#9EC8B9"}}>
            <Header />
            <div className='CSE' style={{backgroundColor:"#9EC8B9"}}>
                {data.map((item) => {
                    const isAvailable = isBookAvailable(item.bookId);
                    if (isAvailable) {
                        return (
                            <div key={item.bookId} className='semesters'>
                                <img src={item.img} alt={item.bookName} />
                                <div className='semData'>
                                    <p className='course'>{item.course}</p>
                                    <p className='bookName'>Author: {item.author}</p>
                                    {/* <p className='bookName'>Books: {item.quantity}</p> */}
                                    <p className='semester'>Semester: {item.semester}</p>
                                    {/* <button onClick={() => updateBookQuantity(item.bookId)}>Issue Book</button> */}
                                </div>
                            </div>
                        );
                    } else {
                        return null; 
                    }
                })}
            </div>
            <div style={{paddingTop:"3rem"}}>
            <HomeRules />
            </div>
            <Footer />
        </div>
    );
}

export default Issued;
