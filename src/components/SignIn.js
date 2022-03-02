import React,{useState} from 'react'

export default function SignIn() {
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
  return (
    <>
    <div className="container-fluid m-0 p-0" >
        <div className="row no-gutters">
            <div className="col-7">
                <img className='imgSize w-100 ' src={bgImage} alt="" />
            </div>
            <div className="col-4 mx-5">
                <h1 className='mt-5'>Welcome to RayFoods</h1>
                <h4 className='my-3 text-muted '>Log in to continue</h4>
                <label>Email</label>
                <input type="text" className='form-control my-1'  />
                <label>Password</label>
                <input type="text" className='form-control my-2' />
                <input type="checkbox" name="" id="" className='mr-2'/>
                <label htmlFor="">Remember me<span className='text-success float-right'>terms and conditions</span></label>
                <button className='w-100 btn btn-success mt-4'>Sign Up</button>
                <p className='text-center my-2' htmlFor="">Not a member, <a href="" className='text-success '>Sign Up</a></p>
            </div>
        </div>
    </div>
    
    </>
  )
}
