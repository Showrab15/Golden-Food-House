import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

  const { signIn, user, signInWithGoogle , signInWithGithub } = useContext(AuthContext)
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
        // Signed in 
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

        setSuccess('User Login successfully complete');
        setError('')

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
      <h1 className="font-bold text-4xl text-center">Login Now </h1>
      <div className="hero ">
        <div  className="hero-content  ">

          <div className="card  md:mr-0 mr-4 px-4 flex-shrink-0 w-full h-full pb-8 max-w-sm md:shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <small>New to Rannaghor ?  <Link to="/register" className="label-text-alt link link-hover">Register</Link></small>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>

                <p className="mt-2 font-semibold text-xl text-green-600">{success}</p>
                <p className="mt-2 font-semibold text-xl text-red-600">{error}</p>
              </div>
            </form>
              <button onClick={handleGoogleSignIn} className="btn btn-primary mt-2">Login With Google</button>
        <button onClick={handleGithubSignIn} className="btn btn-primary mt-2">Login With GitHub</button>
          </div>
        
        </div>
      
      </div>

    </div>
  );
};

export default Login;