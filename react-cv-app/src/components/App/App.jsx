import React from 'react'
import './App.css'
import DataDisplayed from '../DataDisplayed/DataDisplayed';

function App() {
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [dataset,setDataset] = React.useState([]);
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
    const nextData = [fullName, email, phone];
    setDataset(nextData);
    setShowData(true);
    setFullName('');
    setEmail('');
    setPhone('');
    /* setSchool('');
    setTitle('');
    setDateStudy('');
    setPosition('');
    setMainResp('');
    setTimelineCompany('');
    setCompany(''); */
  }
  function handleEditOfData(){
    setFullName(dataset[0]);
    setEmail(dataset[1]);
    setPhone(dataset[2]);
  }
  return (
    <>
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" name='fullName' required value={fullName}
        onChange={(event)=>{setFullName(event.target.value)}}/>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" name='email' required value={email}
        onChange={(event)=>{setEmail(event.target.value)}}/>
      </div>
      <div>
        <label htmlFor="phone">Phone number:</label>
        <input type="text" name='phone' required value={phone}
        onChange={(event)=>{setPhone(event.target.value)}}/>
      </div>
      <button>Submit</button>
    </form>
    <button onClick={handleEditOfData}>Edit</button>
    {showData &&<DataDisplayed dataset={dataset}/>} 
    </>
  )
}

export default App
