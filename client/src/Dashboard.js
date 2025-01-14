import React, { useContext, useState } from 'react';
import  "./DashboardStyle.css";
import { ProfileContext } from './Profile';
import ShowMonth from "./ShowMonth";
import Calendar from "./Calendar";


function Dashboard() {
 
  const { activeProfile, selectedDate, setSelectedDate } = useContext(ProfileContext);
  
  const [savedDates, setSavedDates] = useState([]);

  if (!activeProfile) {
    return 'Select a Child Profile';
  }
  const updateSelectedDate = (date) => {
    setSelectedDate(date); 
    setSavedDates([...savedDates, date]);
  };
  return (
    <div >
    <div style={bodyStyle()}>
    <div className='dashboardStyle'> </div>
    <h2>Dashboard</h2>
    <div className='dashboardStyle'>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '4px', padding: '20px' }}>
    <h4>{activeProfile ? ` ${activeProfile.childName} Pocket Money` : 'Select a profile'}</h4>
     
    <div>
    <h4>Pick a date   <Calendar selectedDate={selectedDate} updateSelectedDate={updateSelectedDate} /></h4></div>
     </div>  
     </div>

    {savedDates.map((date, index) => (
        <ShowMonth key={index} selectedDate={date} />
      ))}
        
</div>
</div>

     
   
  );
}
function bodyStyle() {
  return {
    
    padding: "0 10px",
    alignItems:"top",
    maxHeight:"100vh",
    overflowY:"auto",
    justifyContent:"space-between",
    flexDirection: 'column',
    
    };
}
export default Dashboard;