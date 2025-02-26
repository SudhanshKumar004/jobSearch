import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Registration from './pages/Registration'
import CompanyLogin from './pages/CompanyLogin'
import CompanyDashboard from './CompanyDashboard'
import Search from './pages/Search'

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
       </Route>
      </Routes>

      <Routes>
        <Route path='companydashboard' element={<CompanyDashboard />} />
      </Routes>

      
      </BrowserRouter>
    </>
  )
}

export default App
