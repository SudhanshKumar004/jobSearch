import React, { useEffect, useState } from 'react'
import axios from 'axios'
import API_URL from '../config'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom'

const Home = () => {

  const[mydata , setMydata] = useState([])
  const nav = useNavigate();



  const loadData =async()=>{
    let api =`${API_URL}/company/jobdisplay`
    
    try {
    let response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data)
console.log(mydata);

    
    } catch (error) {
      console.log(error);
    }
    
  }

  const jobapply=(id)=>{
    nav(`/jobapplication/${id}`)
  }

  let ans = mydata.map((key)=>{
    return(
      <>
      <Card id='card'>
      <Card.Body>
        <Card.Title id='title'>{key.title}</Card.Title>
        <Card.Subtitle id='name'>{key.name}</Card.Subtitle>
        <Card.Text>
           Address: {key.address} <br />
           City: {key.city} <br />
           Salary: {key.salary} <br />
           {key.email}
           <hr />
           <h3 style={{fontWeight:"500"}}>Description:</h3>
           {key.description} <br />
           <hr />
        </Card.Text>
        <Button variant="primary" onClick={()=>{jobapply(key._id)}}>Apply Now</Button>
      </Card.Body>
    </Card>
      </>
    )
  })
  useEffect(()=>{
    loadData()
  },[])
  return (
    <>


      <div id='parent'>

        <div id="title">
          <h1>Looking For a</h1>
        </div>

    <div id='hero'>
      {/* <img src="https://www.pngarts.com/files/1/Career-Transparent-Background-PNG.png" alt="" /> */}
      <img src="https://www.pinclipart.com/picdir/big/2-22120_clip-art-transparent-library-jobs-job-announcement-find.png" alt="" />
      </div>

    <div id='title'>
      <h1>Find Job in easiest way</h1>
    </div>
      </div>
      <hr />
      <h1 align="center">Jobs For You:</h1>
      <div className='mainbody'>
        {ans}
      </div>
    </>
  )
}

export default Home
