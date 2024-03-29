import React from 'react'
import dataPic from '../../Assets/Images/data.png'

const GetStarted = () => {
  return (
    <div className="header w-full h-screen flex items-center justify-center flex-col">
        <img src={dataPic} className="w-2/6 h-auto"/>
        <p className='text-xl text-center w-3/6 mb-6 text-green'> A CRUD (Create, Read, Update, Delete) application streamlines data management while empowering users to effortlessly generate insightful reports. Seamlessly integrating data manipulation with dynamic reporting capabilities, our platform offers a user-friendly experience for extracting valuable insights from your data.</p>
        <a href="/login"className='bg-green py-3 px-6 rounded-md w-1/6 font-bold text-center text-dark hover:bg-opacity-90'>GET STARTED</a>
    </div>
  )
}

export default GetStarted
