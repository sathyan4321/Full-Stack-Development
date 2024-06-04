import React from 'react';
import './Profile.scss';

function Profiles() {
  const profile = [
    {
      id: 1,
      name: "Sathya Narayanan",
      email: "sathya@123.com",
      phone: 1234567890,
      dob: "01-01-2000",
      gender: "Male",
      rollnumber: 1234567890,
      password: "123456",
    },
  ]

  return (
    <div>
      <div className="profile-con">
        <div className="profile-details">
          {profile.map((profile) => (
            <div key={profile.id}>
              <p>Name: {profile.name}</p>
              <p>Email: {profile.email}</p>
              <p>Phone: {profile.phone}</p>
              <p>Date of Birth: {profile.dob}</p>
              <p>Gender: {profile.gender}</p>
              <p>Roll Number: {profile.rollnumber}</p>
              <p>Password: {profile.password}</p>
            </div>
          ))}
        </div>
        <div className="profile-edit">
          <button>Edit Profile</button>
        </div>
      
      </div>
    </div>
  )
}

export default Profiles