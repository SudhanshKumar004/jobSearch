import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Registration from './pages/Registration'
import CompanyLogin from './pages/CompanyLogin'
import CompanyDashboard from './CompanyDashboard'
import Search from './pages/Search'
import Jobapplication from './pages/Jobapplication'
import Applications from './pages/Applications'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='home' element={<Home />}/>
        <Route path='register' element={<Registration />}/>
         <Route path='companylogin' element={<CompanyLogin />}/>
        <Route path='companysearch' element={<Search />} />
        <Route path='jobapplication/:id' element={<Jobapplication />} />
       </Route>
      </Routes>

      <Routes>
        <Route path='companydashboard' element={<CompanyDashboard />}>
        <Route path='applications' element={<Applications />} />
        </Route>
      </Routes>

      
      </BrowserRouter>
    </>
  )
}

export default App
