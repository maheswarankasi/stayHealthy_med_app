import React from 'react';
import './Navbar.css'

const Navbar = () => {

  const handleClick = ()=>{
    const navLinks = document.querySelector(".nav__links");
    const navIcon = document.querySelector(".nav__icon i");

    // Toggle the 'active' class on the navigation links
    navLinks.classList.toggle("active");

    // Toggle the Font Awesome icons (bars and times)
    if (navLinks.classList.contains("active")) {
      navIcon.classList.remove("fa-bars");
      navIcon.classList.add("fa-times");
    } else {
      navIcon.classList.remove("fa-times");
      navIcon.classList.add("fa-bars");
    }
  }

  return (
    <>
      <nav>
        {/*  Navigation logo section  */}
        <div className="nav__logo">
          {/*  Link to the home page  */}
          <a href="/">
            StayHealthy
            {/*  Insert an SVG icon of a doctor with a stethoscope  */}
            <img src="../assets/user-doctor-solid-full.svg" width="30" height="28" alt="doctor with stethoscope"/>
          </a>
          {/*  A span element for styling purposes  */}
          <span>.</span>
        </div>
        {/*  Navigation icon section with an onClick event listener  */}
        <div className="nav__icon" onClick={handleClick}>
          {/*  Font Awesome icon for bars (hamburger menu)  */}
          <i className="fa fa-times fa fa-bars"></i>
        </div>

        {/*  Unordered list for navigation links with 'active' className  */}
        <ul className="nav__links active">
          List item for the 'Home' link
          <li className="link">
            <a href="../Landing_Page/LandingPage.html">Home</a>
          </li>
          {/*  List item for the 'Appointments' link  */}
          <li className="link">
            <a href="#">Appointments</a>
          </li>
          {/*  List item for the 'Sign Up' link with a button  */}
          <li className="link">
            <a href="../Sign_Up//Sign_Up.html">
              <button className="btn1">Sign Up</button>
            </a>
          </li>
          {/*  List item for the 'Login' link with a button  */}
          <li className="link">
            <a href="../Login/Login.html">
              <button className="btn1">Login</button>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar