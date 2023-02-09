import React from 'react'
import Button from './components/Button'
import Title from './components/Title'
import {BsFileEarmarkPostFill} from 'react-icons/bs'
import {FaUserAlt} from 'react-icons/fa'
import {BiCommentDetail} from 'react-icons/bi'

function App() {
  const handleClick = ()=>{
    console.log('You clicked me')
  }
  return (
    <div className='flex flex-col gap-4'>
      <Title text={'Testimonials App'}/>
      <div className=' ml-5 flex flex-row gap-3'>
      <Button bg={'bg-blue-400'} onClick={handleClick} icon={<BsFileEarmarkPostFill/>} btnName={'Posts'} />
      <Button bg={'bg-teal-400'} onClick={handleClick} icon={<FaUserAlt/>} btnName={'Users'} />
      <Button bg={'bg-orange-400'} onClick={handleClick} icon={<BiCommentDetail/>} btnName={'Comments'} />
      </div>
    </div>
  )
}

export default App