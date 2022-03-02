import React from 'react'
import bgImage from '../images/foodimage2.jpg'
export default function SignUp() {
  return (
    <>
    <div className="container-fluid m-0 p-0" >
        <div className="row no-gutters">
            <div className="col-7">
                <img className='imgSize w-100 ' src={bgImage} alt="" />
            </div>
            <div className="col-4 mx-5">
                <h1 className='mt-5'>Welcome to RayFoods</h1>
                <h4 className='my-3 text-muted '>SignUp to continue</h4>
                <label>First Name</label>
                <input type="text" className='form-control my-1' />
                <label>Last Name</label>
                <input type="text" className='form-control my-1' />
                <label>Email</label>
                <input type="text" className='form-control my-1' />
                <label>Password</label>
                <input type="text" className='form-control my-2' />
                <input type="checkbox" name="" id="" className='mr-2'/>
                <label htmlFor="">By clicking you agree to the <span className='text-success'>terms and conditions</span></label>
                <button className='w-100 btn btn-success mt-4'>Sign Up</button>
                <p className='text-center my-2' htmlFor="">Already a member, <a href="" className='text-success '>Log in</a></p>
            </div>
        </div>
    </div>
    
    </>
    
  )
}
