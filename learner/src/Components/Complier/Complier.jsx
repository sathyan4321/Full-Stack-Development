import React from 'react'
import Home from '../../Pages/Home/Home'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import LiveClasses from '../../Pages/LiveClasses/LiveClasses'
import Course from '../../Pages/Course/CourseList/Course'
import CourseMain from '../../Pages/Course/CourseMain'
import DashBoard from '../../Pages/DashBoard/DashBoard'
import LoginPage from '../../Login/LoginPage/LoginPage'
import SignUp from '../../Login/SignUpPage/SignUp'

function Complier() {
  return (
    <div>
      <SignUp/>
      {/* <LoginPage/> */}
      {/* <Course/>
      <div className='header'><Header/></div>
      <div className='body'><Home/></div>
      <div className='body'><LiveClasses/></div>
      <div className='body'><CourseMain/></div>
      <div className='body'><DashBoard/></div>
      <div className='footer'><Footer/></div> */}
      
    </div>
  )
}

export default Complier
