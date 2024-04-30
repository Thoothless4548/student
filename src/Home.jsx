import React from 'react';
import studentImage from './img/immigration_3125856.png';
import calenderImage from './img/calendar_8922329.png';
import profile from './img/profile_9479047.png';
import check from './img/check_3468503.png';

function Home() {
  return (
    <div className='main1-container'>
      <div className="main1-cards">
        {/* Profile Information Card */}
        <div className="card1 profile-card" style={{height:"210px", width:"450px",backgroundColor:'#e0e4ff'}}>
          <div className="card1-inner">
            <img src={profile} alt="Student" className="card1-icon" style={{ width: '50px', height: '50px' }} />
            <h3>User Information</h3>
          </div>
          <h3>Name:</h3>
          <h3>DOB:</h3>
          <h3>Room no:</h3>
        </div>

        {/* Attendance Card */}
        <div className="card1 attendance-card" style={{backgroundColor:'#e0e4ff'}}>
          <div className="card1-inner">
            <img src={studentImage} alt="Student" className="card1-icon" style={{ width: '50px', height: '50px' }} />
            <h3>Attendance</h3>
          </div>
          <h1>0%</h1>
        </div>

        {/* Today's Events Card */}
        <div className="card1 events-card" style={{height:"480px", width:"350px",backgroundColor:'#e0e4ff'}}>
          <div className="card1-inner" style={{marginTop:'5px'}}>
            <img src={calenderImage} alt="Student" className="card1-icon" style={{ width: '50px', height: '50px' }} />
            <h3>Today's Events</h3>
            <div className="events-list">
              <div className="event-item">
                
                <div className="event-details">
                  <h4>Event 1</h4>
                  <p>Description of Event 1</p>
                </div>
              </div>
              <div className="event-item">
                
                <div className="event-details">
                  <h4>Event 2</h4>
                  <p>Description of Event 2</p>
                </div>
              </div>
              <div className="event-item">
              
                <div className="event-details">
                  <h4>Event 3</h4>
                  <p>Description of Event 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br></br>
        {/* Attendance Card */}
        <div className="card1 attendance-card" style={{backgroundColor:'#e0e4ff', marginTop:'-250px',height:"210px", width:"450px"}}>
          <div className="card1-inner">
            <img src={check} alt="Student" className="card1-icon" style={{ width: '50px', height: '50px' }} />
            <h3>Complaint Status</h3>
          </div>
          <h1>0%</h1>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
