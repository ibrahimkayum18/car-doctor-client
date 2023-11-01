import { Link } from "react-router-dom";
import img from '../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const NavBar = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleSignOut = () => {
    logOut()
    .then(() => alert('Log Out Successfull'))
    .catch()
  }

    const navValues = <>
    <li><Link to={'/'}>Home</Link></li>
    <li><Link to={'/booking'}>Booked</Link></li>
    <li><Link to={'/services'}>Services</Link></li>
    <li><Link to={'/contact'}>Contact</Link></li>
    {
      user?.email ? <li onClick={handleSignOut}><Link to={'/login'}>Sign Out</Link></li> : <li><Link to={'/login'}>Log In</Link></li>
    }
    
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navValues}
      </ul>
    </div>
    <div>
        <img src={img} alt="" />
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navValues}
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-outline btn-secondary">Secondary</button>
  </div>
</div>
    );
};

export default NavBar;