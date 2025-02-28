import axios from 'axios'
import React, { useEffect, useState } from 'react'
import API_URL from '../config'

const Applications = () => {
    const[totalapp, setTotalapp] = useState([])

    const loadData=async()=>{
        let api = `${API_URL}/company/applications/?companyid=${localStorage.getItem("companyid")}`;
        try {
        const response = await axios.get(api);
        setTotalapp(response.data);
        console.log(response.data);

        } 
        catch (error) {
        console.log(error);
        }
    }

    useEffect(()=>{
        loadData();
    },[])


    const ans = totalapp.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.name}</td>
                <td>{key.age}</td>
                <td>{key.address}</td>
                <td>{key.city}</td>
                <td>{key.email}</td>
                <td>{key.contact}</td>
                <td>{key.exp}</td>
            </tr>
            </>
        )
    })
  return (
    <>
      <h1>All Applications</h1>

      <hr />

      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>City</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Experience</th>
            </tr>
        </thead>
        <tbody>
            {ans}
        </tbody>
      </table>
    </>
  )
}

export default Applications
