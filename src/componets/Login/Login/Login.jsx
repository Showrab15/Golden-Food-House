import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {

  const { signIn, user, signInWithGoogle, signInWithGithub } = useContext(AuthContext)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('');
  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()

  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const from = location.state?.from?.pathname || '/'


  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;


    signIn(email, password)
      .then((result) => {
       
        const loggedUser = result.user;
        console.log(loggedUser)
        form.reset()
        setSuccess('User Login successfully complete');
        setError('')
        navigate(from, { replace: true })
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
        setSuccess('')
      });
  }


  const handleGoogleSignIn = () => {

    signInWithGoogle(googleProvider)
      .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, { replace: true })

        setSuccess('User Login Successful By  google Account');
        setError('');

      })
      .catch(error => {
        const errorMessage = error.message;
        setError(errorMessage)
        setSuccess('');
      })
  }



  const handleGithubSignIn = () => {

    signInWithGithub(githubProvider)
      .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, { replace: true })

        setSuccess('User Login successfully complete');
        setError('')

      })
      .catch(error => {
        const errorMessage = error.message;
        setError(errorMessage)
        setSuccess('');
      })
  }


  return (
    <div className="my-container">
      
        <div className="hero-content p-0">
<div className="card lg:w-[1200px] p-8 flex-shrink-0 w-full max-w-sm outline outline-offset-2 outline-pink-500  bg-base-100">
<form onSubmit={handleSignIn} >
          <h1 className="font-bold text-4xl text-center">Login Please </h1>
          <hr className="long-line" />
          <hr className="short-line" />

            <div  className="w-full">
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control mt-2">
                <label className="label">
                  <span className="label-text  font-semibold">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <small className="font semibold">New to Golden Food House ?  <Link to="/register" className="underline text-orange-500 ">Register</Link></small>
                </label>
              </div>
              <div className="form-control ">
                
              <p className="mb-2 font-semibold text-xl text-green-600">{success}</p>
                <p className="mb-2 font-semibold text-xl text-red-600">{error}</p>
                <button className="btn btn-primary">Login</button>

              </div>
            </div>
          
          </form>
          <button onClick={handleGoogleSignIn} className="btn  btn-primary mt-2"><FaGoogle className="mr-1 text-orange-400 "></FaGoogle>Login With Google</button>
            <button onClick={handleGithubSignIn} className="btn btn-primary mt-2"><FaGithub className="text-black mr-1"></FaGithub>Login With GitHub</button>
</div>
         

        </div>

      </div>

  );
};

export default Login;


