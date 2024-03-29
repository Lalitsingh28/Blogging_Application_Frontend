import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import { signUp } from '@/services/user-service';
export default function signup() {

    const [data, setData] = useState({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  
    const [error, setError] = useState({
      errors: {},
      isError: false,
    });

    const handleChange = (event, property) => {
      setData({ ...data, [property]: event.target.value });
    };
  
  
    const submitForm = (event) =>{
        event.preventDefault();
        // console.log(data);
        signUp(data).then((resp) => {
          console.log(resp);
          alert("Sign up Successful");
          setData({
            name: "",
            email: "",
            password: "",
            about: ""
          })
        }).catch((error) =>{
          setError({
            errors: error,
            isError: true
          })
        })

    }
  
  return (
    <>
    
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create new account
            </h2>
          </div>
            {/* Name section */}
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={submitForm} className="space-y-6" >
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Enter Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    type="text"
                    placeholder='Enter Name Here'
                    onChange={(e) => handleChange(e,"name")}
                    value={data.name}
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

                {/* Email Section */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    placeholder='Enter Email Here'
                    onChange={(e) => handleChange(e,"email")}
                    value={data.email}
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
                {/* Password Section */}
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    type="password"
                    placeholder='Enter Password Here'
                    onChange={(e) => handleChange(e,"password")}
                    value={data.password}
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

                {/* About Section */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  About
                </label>
                <div className="mt-2">
                  <input
                    id="about"
                    type="text"
                    onChange={(e) => handleChange(e,"about")}
                    value={data.about}
                    placeholder="About"
                    required
                    className="h-28 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign Up
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Have an Account?{' '}
              <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Login
              </Link>
            </p>
          </div>
        </div>
      </>
  )
};