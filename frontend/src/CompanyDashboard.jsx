import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'



const CompanyDashboard = () => {

  const nav = useNavigate();

  const logouthandle=()=>{
    localStorage.clear();
    nav("/companylogin")
  }

  useEffect(()=>{
if(!localStorage.getItem("name"))
{
  nav("/companylogin")
}
  },[])

  return (
    <>
    <div id="topdash">
        <h1>Welcome to Dashboard</h1>
        <h2>Welcome: {localStorage.getItem("name")}</h2>
        <button onClick={logouthandle}>Log out</button>
      </div>

      <div className="dash">
        <div id="dashleft">
          <h2>Menu</h2>
          <hr />
          <Link to={"applications"}>Browse Applications</Link>
        </div>

        <div className="jobdata">
          <Outlet />
        </div>
      </div>

    </>
  )
}

export default CompanyDashboard

