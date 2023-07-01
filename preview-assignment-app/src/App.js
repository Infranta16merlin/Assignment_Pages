
import './App.css';
import data from './data';

function App() {
  console.log(data);
  return (
    <>
    <div>
      <h2 style={{paddingLeft:'7%'}}>Basic Info</h2>
    </div>
      <div className='alignment'>
      <h4 style={{paddingLeft: '12%'}}>Contact : {data[0].name}</h4>
      <h4 style={{paddingLeft: '31%'}}>Father Name : {data[0].fathername}</h4>
      </div>
      <div className='alignment'>
      <h4 style={{paddingLeft: '12%'}}>Mail id : {data[0].email}</h4>
      <h4 style={{paddingLeft: '30%'}}>Birth date : {data[0].dob}</h4>
      </div>
      <div className='alignment'>
      <h4 style={{paddingLeft: '12%'}}>Gender : {data[0].gender}</h4>
      <h4 style={{paddingLeft: '37%'}}>Martial Status : {data[0].status}</h4>
      </div>
      <div className='alignment'>
      <h4 style={{paddingLeft: '12%'}}>Aadhar ID : {data[0].aadharId}</h4>
      <h4 style={{paddingLeft: '31%'}}>Caste/Religion : {data[0].religion ? data[0].religion : 'None'}</h4>
      </div>
      <div >
      <h4 style={{paddingLeft: '12%'}}>Address : {data[0].address.street},{data[0].address.suite},{data[0].address.zipcode}</h4>
      <h2 class="hr-lines">Bank Account </h2>
      <div className='alignment'>
      <h4 style={{paddingLeft: '12%'}}>Name : {data[0].name}</h4>
      <h4 style={{paddingLeft: '32%'}}>Bank Name : {data[0].account.bankname}</h4>
      </div>
      <div className='alignment'>
      <h4 style={{paddingLeft: '12%'}}>Account No : {data[0].account.accountno}</h4>
      <h4 style={{paddingLeft: '31%'}}>Branch : {data[0].account.branch}</h4>
      </div>
      <h4 style={{paddingLeft: '12%'}}>IFSC  : {data[0].account.ifsccode}</h4>
      <h4 style={{paddingLeft: '12%'}}>PAN : {data[0].account.pan}</h4>
      <h2 class="hr-lines">Pay Scale</h2>
      <h4 style={{paddingLeft: '12%'}}>Basic  :{data[0].payscale.basic}</h4>
      <h4 style={{paddingLeft: '12%'}}>PF : {data[0].payscale.pf}</h4>
      <h4 style={{paddingLeft: '12%'}}>Gross : {data[0].payscale.gross}</h4>
      <h2 class="hr-lines">Position Info</h2>
      <h4 style={{paddingLeft: '12%'}}>Branch  : {data[0].position.branch}</h4>
      <h4 style={{paddingLeft: '12%'}}>Department : {data[0].position.department}</h4>
      <h4 style={{paddingLeft: '12%'}}>Designation : {data[0].position.designation}</h4>
      <h4 style={{paddingLeft: '12%'}}>Reporting To : {data[0].position.reporting}</h4>
      <h4 style={{paddingLeft: '12%'}}>Shift time : {data[0].position.shift}</h4>
      <h2 class="hr-lines-education">Education Qualification</h2>
      <h4 style={{paddingLeft: '12%'}}>Qualification  : {data[0].education.qualification}</h4>
      <h4 style={{paddingLeft: '12%'}}>Department : {data[0].education.department}</h4>

      </div>
      </>
      
   
  );
}

export default App;
