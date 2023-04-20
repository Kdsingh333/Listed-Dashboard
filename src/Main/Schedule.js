import React from 'react';
import './Schedule.css';
import {Space} from "antd";

function Schedule() {
    
    const meetings = [
        { id: 1, title: 'Design Review', time: '10:00 AM', location: 'Conference Room A', date: '4/20/2023' },
        { id: 2, title: 'Client Meeting', time: '11:30 AM', location: 'Conference Room B', date: '4/20/2023' },
      ];
    
      return (
        <div className="meeting-schedule">
          <h2>Meeting Schedule</h2>
          {meetings.length > 0 ? (
            meetings.map((meeting) => (
              <div className="meeting" key={meeting.id}>
                <Space className="set"  directino="horizontal">
                <div class="vl"></div>
                <div>
                <h3>{meeting.title}</h3>
                <p>Time: {meeting.time}</p>
                <p>Location: {meeting.location}</p>
                </div>
                </Space>
              </div>
            ))
          ) : (
            <p>No meetings scheduled.</p>
          )}
        </div>
      );
}


export default Schedule;