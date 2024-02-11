import React from "react";
import Header from './components/Header';
import HomeFeatures from "./components/HomeFeatures";
import imgIt from "../src/img/itImg.png"
import imgEce from "../src/img/eceImg.jpeg"
import imgCse from "../src/img/cseImg.jpg"
import HomeBenefits from "./components/HomeBenefits";
import HomeRules from "./components/HomeRules";
import Footer from "./components/Footer";

function App(){
    const friendlySystem={
        data1:"Simple And Easy To Use",
        data2:"Automatically Updates",
        data3:"Tracking Of The Library Functions"
    }

    const easyManage={
        data1:"Eliminates The Need For Manual Entries",
        data2:"Eliminate The Need For Extensive Paperwork",
        data3:"Data lose is less"
    }
    return (
        <div style={{backgroundColor:"#9EC8B9"}}>
        <Header />
        <h3 className="containerHead" style={{backgroundColor:'#43766C',color:"white"}}>Departments In College</h3>
        <div className="features">
        <HomeFeatures Branch="CSE" Tittle="Computer Science Engineering" img={imgCse} />
        <HomeFeatures Branch="ECE" Tittle="Electronics and Communication" img={imgEce}  />
        <HomeFeatures Branch="IT" Tittle="Information Technology" img={imgIt}  />
        </div>

        <h3 className="containerHead" style={{backgroundColor:'#43766C',color:"white"}}>Benefits Of Library Automation System</h3>
        <div className="features">
            <HomeBenefits head="User-Friendly System" friendlySystem={friendlySystem}/>
            <HomeBenefits head="Easy-To_Manage" friendlySystem={easyManage}/>
        </div>
        <HomeRules/>
        <Footer/>
        </div>
    )
}
export default App;