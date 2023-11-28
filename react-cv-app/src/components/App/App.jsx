import React from 'react'
import './App.css'
import DataDisplayed from '../DataDisplayed/DataDisplayed';

function App() {
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [showData, setShowData] = React.useState(false);
  /* const [school, setSchool] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [dateStudy, setDateStudy] = React.useState('');
  const [position, setPosition] = React.useState('');
  const [mainResp, setMainResp] = React.useState('');
  const [timelineCompany, setTimelineCompany] = React.useState(''); */
  console.log(fullName);
  function handleFormSubmit(event){
    event.preventDefault();
    setShowData(true);
    //setFullName('');
    //setEmail('');
    //setPhone('');
    /* setSchool('');
    setTitle('');
    setDateStudy('');
    setPosition('');
    setMainResp('');
    setTimelineCompany('');
    setCompany(''); */
  }
  function resetStates(){
    setFullName('');
    setEmail('');
    setPhone('');
  }
  return (
    <>
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" name='fullName' value={fullName}
        onChange={(event)=>{setFullName(event.target.value)}}/>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" name='email' value={email}
        onChange={(event)=>{setEmail(event.target.value)}}/>
      </div>
      <div>
        <label htmlFor="phone">Phone number:</label>
        <input type="text" name='phone' value={phone}
        onChange={(event)=>{setPhone(event.target.value)}}/>
      </div>
      <button>Submit</button>
      <button>Edit</button>
    </form>
    {showData &&<DataDisplayed fullName={fullName}
    email={email} phone={phone} setFullName={setFullName}
    setEmail={setEmail} setPhone={setPhone}/>} 
    </>
  )
}

export default App
