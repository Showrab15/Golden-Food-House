import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { user,  logOut} = useContext(AuthContext)
  console.log(user);
//  console.log(updateProfile);

    const handleLogOut = ()=>{
        logOut()
        .then()
        .catch(error => console.log(error.message))
    }
    
   

    return (
        <div className='my-container'>
        <div className='relative bg-slate-400 flex items-center justify-between'>
            <Link
                to='/'
                aria-label='Rannaghor'
                title='Rannaghor'
                className='inline-flex items-center'
            >
                <div className='flex items-center justify-center '>
                    <h1 className="text-2xl font-bold">Rannaghor</h1>
                </div>

            </Link>
            <ul className='items-center text-base font-medium hidden space-x-8 lg:flex'>
                <li>
                    <NavLink
                        to='/'
                        aria-label='Home'
                        title='Home'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        Home
                    </NavLink>
                </li>
              
            

                <li>
                    <NavLink
                        to='blogs'
                        aria-label='blogs'
                        title='blogs'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        Blogs
                    </NavLink>
                </li>
                <li>
                </li>
            </ul>
            <div className="flex items-center">        
                {
                    user && <img title={user.displayName} className="w-[30px] lg:block hidden h-[30px] rounded-full mr-4" src={user.photoURL} alt="" />
                }         
            {
                                user ?
                                    <button onClick={handleLogOut} style={{ background: 'linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)' }} className=' hidden border-none btn lg:block  text-white text-base'>Logout</button>
                                    :

                                    <Link to="login">  <button style={{ background: 'linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)' }} className=' hidden border-none btn lg:block  text-white text-base'>Login</button></Link>

                            }
            </div>
            <div className='lg:hidden'>
                <button
                    aria-label='Open Menu'
                    title='Open Menu'
                    className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                    onClick={() => setIsMenuOpen(true)}
                >
                    <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                        <path
                            fill='currentColor'
                            d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                        />
                        <path
                            fill='currentColor'
                            d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                        />
                        <path
                            fill='currentColor'
                            d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                        />
                    </svg>
                </button>
                {isMenuOpen && (
                    <div className='absolute z-10 top-0 left-0 w-full'>
                        <div className='p-5 bg-white border rounded shadow-sm'>
                            <div className='flex items-center justify-between mb-4'>

                                <h1 className="text-2xl font-bold">Rannaghor</h1>
                                <div>
                                    <Link
                                        to='/'
                                        aria-label='Rannaghor'
                                        title='Rannaghor'
                                        className='inline-flex items-center'
                                    >
                                        <div className='flex items-center justify-center '>
                                            <img src="https://ibb.co/JKBmD8g" alt="" />
                                        </div>

                                    </Link>
                                </div>
                                <div>
                                    <button
                                        aria-label='Close Menu'
                                        title='Close Menu'
                                        className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                            <path
                                                fill='currentColor'
                                                d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <nav>
                                <ul className='space-y-4'>
                                    <li>
                                        <Link
                                            to='/'
                                            aria-label='home'
                                            title='home'
                                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                        >
                                            Home
                                        </Link>
                                    </li>
                              
                                  


                                    <li>
                                        <Link
                                            to='/blogs'
                                            aria-label='blogs'
                                            title='blogs'
                                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                        >
                                            Blogs
                                        </Link>
                                    </li>



                                </ul>
                                <div>
                              
                                
                            





                                {
                    user && <img title={user.displayName} className="w-[30px] h-[30px] lg:block rounded-full mr-4" src={user.photoURL} alt="" />
                }         
            {
                                user ?
                                    <button onClick={handleLogOut} style={{ background: 'linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)' }} className=' mt-4 border-none btn lg:block  text-white text-base'>Logout</button>
                                    :

                                    <Link to="login">  <button style={{ background: 'linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)' }} className='  border-none btn lg:block  text-white text-base'>Login</button></Link>

                            }
                                </div>
                            </nav>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
    );
};

export default Navbar;