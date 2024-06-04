import React from 'react';
import './Upcoming.scss';

// Sample data
const upcomingEvents = [
  {
    imageUrl: '/path/to/image1.jpg',
    title: 'Astrophysics',
    dateTime: 'May 10, 2024 10:00 AM',
    meetingLink: 'https://zoom.us/j/1234567890',
  },
  {
    imageUrl: '/path/to/image2.jpg',
    title: 'Quantum Computing',
    dateTime: 'June 15, 2024 2:00 PM',
    meetingLink: 'https://meet.google.com/abc-defg-hij',
  },
  // Add more events as needed
];

function Upcoming() {
  return (
    <div>
      {upcomingEvents.map((event, index) => (
        <div key={index} className="Upcoming-container">
          <div className='upcoming-img'>
            <img src={event.imageUrl} alt={event.title} />
          </div>
          <div>
            <h3 className='upcoming-head'>{event.title}</h3>
            <p className='upcoming-dt'>{event.dateTime}</p>
          </div>
          <div className='upcoming-attend'>
            <a href={event.meetingLink} target="_blank" rel="noopener noreferrer">
              <button>Attend</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Upcoming;
