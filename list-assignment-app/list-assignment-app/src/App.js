import logo from './logo.svg';
import './App.css';
import Navbar from './NavBar';
import { list } from './list';
import { CgProfile } from 'react-icons/cg';
import { FiMoreVertical } from 'react-icons/fi';
import {AiOutlineAppstore,AiFillCaretDown} from 'react-icons/ai'
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsPersonWorkspace} from 'react-icons/bs';
import {GrSort} from 'react-icons/gr';



function App() {
  return (
    <>
   
    <Navbar></Navbar>
    <div className='heading'>
      <h4>Employee</h4>
      <h4 style={{position:'relative',left:'54%'}}>Dashboard/Employee</h4>
    </div>
    <aside className= 'sidebar'>
      <div className='sidebar-header'>
       <h4 className='side-heading'><AiOutlineAppstore/>Dashboard</h4>
      </div>
      <div className='list'>
      <ul>
  <li style={{backgroundColor:'blue',display:'flex',justifyContent:'space-between',paddingRight:'15%',paddingTop:'3%'}} ><h5 style={{ position: 'relative',left: '28%'}}>< BsPersonWorkspace /></h5>Employee<AiFillCaretDown/></li>
  <li style={{marginBottom:'3%',color:'blue'}}> In house</li>
  <li style={{marginBottom:'3%'}}>Ex Employee</li>
  <li style={{marginBottom:'3%'}}>Add Employee</li>
</ul>
      </div>
    </aside>
      
    
    
   <div className='card'>
   <div className="container">
    
    <div className='heading-top'>
    <button style={{backgroundColor:'blue',width:'14%',borderRadius:'25px'}}>Add Employee</button>
    <h3 style={{position:'relative',marginRight:'78%',right:'-70%'}}><GrSort/></h3>
    <h3 style={{position:'relative',left:'-6%'}}><FiMoreVertical/></h3>
      </div>
    
    <table>
    
    <thead style={{backgroundColor:'lightgray'}}>
            <tr>
                <td><h4>SI NO</h4></td>
                <td><h4>ID</h4></td>
                <td><h4>Image</h4></td>
                <td><h4>Name</h4></td>
                <td><h4>Floor</h4></td>
                <td><h4>Joined On</h4></td>
                <td><h4>Status</h4></td>
                <td><h4>Info</h4></td>
            </tr>
            </thead>
            <tbody>
    {list.map((item) => {
      const {id,mainId,floor,name,joinedOn,status} = item;
      console.log(status==='working');
      const statusData = status==='working';
      console.log(statusData);
      return (
          <tr key={id}>
            <td>{id}</td>
            <td style={{position:'relative',right:'2%'}}>{mainId}</td>
            <td><CgProfile/></td>
            <td>{name}</td>
            <td style={{position:'relative',left:'2%'}}>{floor}</td>
            <td>{joinedOn}</td>
            <td ><button  className={`${statusData ? "color" : "color_selected"}`}>{status}</button></td>
            <td style={{textAlign:'center'}}><FiMoreVertical/></td>
          </tr>
      );
    })}
  </tbody>
           
 
                    
        </table>
        </div>
        <footer>
          <h5>Showing 1 to 5 of 5 Results</h5>
          <input type='number' value='10' className='pageInput'></input>
          <h5 className='rightInput'><BsFillArrowLeftCircleFill/></h5>
          <input type='number' value='1' className='numberInput'></input>
          <h5 className='leftInput'><BsFillArrowRightCircleFill/></h5>
        </footer>
        
        </div>
          
    </>
  );
}

export default App;
