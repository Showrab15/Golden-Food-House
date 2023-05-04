import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const {createUser, userUpdateProfile, user} = useContext(AuthContext)

const [error, setError] = useState('');
const [success, setSuccess] = useState('');

const [ accepted, setAccepted] = useState(false)

const navigate = useNavigate();
  // console.log(location);

    const handleRegister =(event)=>{
        
event.preventDefault();
const form = event.target;
// console.log(form.email.value)
const name = form.name.value;
const photoURL = form.photo.value;
const email = form.email.value
const password = form.password.value;

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            updateUserData(loggedUser, name, photoURL)
            // console.log(loggedUser);
            form.reset()
            setSuccess('Account has been created successfully');
            setError('');
                    navigate('/login')

           
        })
        .catch(error =>{
            console.log(error)
            setError(error.message);
            setSuccess('')
        })
    }

 
   
  const updateUserData=(user, name, photoURL)=>{
     userUpdateProfile(user, name, photoURL)
            .then(() => {
            setSuccess(name)
              // ...
            }).catch((error) => {
              // An error occurred
              // ...
              setError(error.message)
            });

  }

    return (
        <div className="my-container">
            <h1 className="font-bold text-4xl text-center">Register Now </h1>
<form  onSubmit={handleRegister} className="hero ">
  <div className="hero-content ">
   
    <div className="card mr-4 md:mr-0 flex-shrink-0 w-96 max-w-sm md:shadow-2xl bg-base-100">
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
          <input name="photo" type="text" placeholder="photo url" className="input input-bordered"  />
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
        <small className="font-semibold">Already Have An Account? <Link to="/login" className="underline text-orange-500 ">Login</Link></small>    
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn  w-48 mx-auto btn-primary">Sign up</button>
        
      
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