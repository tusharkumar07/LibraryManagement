
import Header from './Header';
import "../style/departments.css";
const Departments=()=>{
    var x=5;
    return(<>
        <Header />
        <div className='CSE'>
            <h4 className='cseMain'>This Is CSE Departments</h4>
            <h5>Semester 1</h5>
            <div className='semester1'>
            <div className='sem1Maths'>
                <img src='https://m.media-amazon.com/images/I/81WnSrp6DWL._AC_UF1000,1000_QL80_.jpg' className='sem1MathsImg' id='sem1Img' alt='Book Name'/>
                <p>Fundamentals of Maths</p>
                <p>Author : Ranjit Singh</p>
                <p>Quantity : {x}</p>
            </div>

            <div className='sem1Elet'>
                <img src='https://m.media-amazon.com/images/I/81WnSrp6DWL._AC_UF1000,1000_QL80_.jpg' className='sem1PhyImg' id='sem1Img' alt='Book Name'/>
                <p>Basics of Electrical and Electronics</p>
                <p>Author : Ranjit Singh</p>
                <p>Quantity : {x}</p>
            </div>

            <div className='sem1Chem'>
                <img src='https://m.media-amazon.com/images/I/81WnSrp6DWL._AC_UF1000,1000_QL80_.jpg' className='sem1ChemImg' id='sem1Img' alt='Book Name'/>
                <p>Author : Ranjit Singh</p>
                <p>Quantity : {x}</p>
            </div>

            <div className='sem1Biotech'>
                <img src='https://m.media-amazon.com/images/I/81WnSrp6DWL._AC_UF1000,1000_QL80_.jpg' className='sem1ChemImg' id='sem1Img' alt='Book Name'/>
                <p>Author : Ranjit Singh</p>
                <p>Quantity : {x}</p>
            </div>

            <div className='sem1Linux'>
                <img src='https://m.media-amazon.com/images/I/81WnSrp6DWL._AC_UF1000,1000_QL80_.jpg' className='sem1ChemImg' id='sem1Img' alt='Book Name'/>
                <p>Author : Ranjit Singh</p>
                <p>Quantity : {x}</p>
            </div>
            </div>
        </div>
        <div className='ECE'>
            <h4 className='eceMain'>This Is ECE Departments</h4>
        </div>
        <div className='IT'>
            <h4 className='itMain'>This Is IT Departments</h4>
        </div>
    </>)
}
export default Departments;