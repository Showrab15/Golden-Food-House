import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext)

const [error, setError] = useState('');
const [success, setSuccess] = useState('');

const [ accepted, setAccepted] = useState(false)



    const handleRegister =(event)=>{
        
event.preventDefault();
const form = event.target;
console.log(form.email.value)
const name = form.name.value;
const photoUrl = form.photo.value;
const email = form.email.value
const password = form.password.value;

        createUser(email, password,name, photoUrl)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset()
            setSuccess('Account has been created successfully');
            setError('');

        })
        .catch(error =>{
            console.log(error)
            setError(error.message);
            setSuccess('')
        })
    }

  

    return (
        <div className="my-container">
            <h1 className="font-bold text-4xl text-center">Register Now </h1>
<form  onSubmit={handleRegister} className="hero ">
  <div className="hero-content ">
   
    <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" type="text" placeholder="name" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input name="photo" type="text" placeholder="photo url" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="text" placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
        <small>Already Have An Account? <Link to="/login" className="label-text-alt link link-hover">Login</Link></small>    
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign up</button>
        
      
          <p className="mt-2 font-semibold text-xl text-green-600">{success}</p>
          <p  className="mt-2 font-semibold text-xl text-red-600">{error}</p>
        </div>
      </div>
    </div>
  </div>
</form>     
   </div>
    );
};

export default Register;