import React, { useState } from 'react'
import Navbar from './Navbar'

const Displaydata = () => {
const [data,changedata]=useState(

   [
     {"name":"Abhijith","username":"abhijithp778","email":"abhijithp778@gmail.com","phonenumber":7356452815,"website":"www.facebook.com" },
     {"name":"Abhijith","username":"abhijithp778","email":"abhijithp778@gmail.com","phonenumber":7356452815,"website":"www.facebook.com" },
     {"name":"Abhijith","username":"abhijithp778","email":"abhijithp778@gmail.com","phonenumber":7356452815,"website":"www.facebook.com" },
     {"name":"Abhijith","username":"abhijithp778","email":"abhijithp778@gmail.com","phonenumber":7356452815,"website":"www.facebook.com" },
     {"name":"Abhijith","username":"abhijithp778","email":"abhijithp778@gmail.com","phonenumber":7356452815,"website":"www.facebook.com" },
     {"name":"Abhijith","username":"abhijithp778","email":"abhijithp778@gmail.com","phonenumber":7356452815,"website":"www.facebook.com" },
     {"name":"Abhijith","username":"abhijithp778","email":"abhijithp778@gmail.com","phonenumber":7356452815,"website":"www.facebook.com" },
     {"name":"Abhijith","username":"abhijithp778","email":"abhijithp778@gmail.com","phonenumber":7356452815,"website":"www.facebook.com" },
     {"name":"Abhijith","username":"abhijithp778","email":"abhijithp778@gmail.com","phonenumber":7356452815,"website":"www.facebook.com" },
     {"name":"Abhijith","username":"abhijithp778","email":"abhijithp778@gmail.com","phonenumber":7356452815,"website":"www.facebook.com" },










   ]

)    
  return (
    <div>
      <Navbar/>
    <div className="container">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


            <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Website</th>
    </tr>
  </thead>
  <tbody>
    
      {
        data.map(
            (value,index)=>{
                return <tr>
                <th scope="row">{value.name}</th>
                <td>{value.username}</td>
                <td>{value.email}</td>
                <td>{value.phonenumber }</td>
                <td>{value.website}</td>
              </tr>




            }
        )
      }



    
  </tbody>
</table>






            </div>
        </div>
    </div>



    </div>
  )
}

export default Displaydata
