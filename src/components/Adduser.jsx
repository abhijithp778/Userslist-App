import React from 'react'
import Navbar from './Navbar'

const Adduser = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder='Enter Name' />
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">Username</label>
                    <input type="text" className="form-control" placeholder='Enter Username' />

                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">Email</label>
                    <input type="text" className="form-control" placeholder='Enter Email' />

                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" placeholder='Enter Phone Number' />

                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        
                    <label htmlFor="" className="form-label">Website</label>
                    <input type="text" className="form-control" placeholder='Enter Website' />

                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className=" btn btn-success">Submit</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Adduser
