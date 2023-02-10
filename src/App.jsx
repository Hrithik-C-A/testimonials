import React, { useEffect, useState } from 'react'
import Button from './components/Button'
import Title from './components/Title'
import {BsFileEarmarkPostFill} from 'react-icons/bs'
import {FaUserAlt} from 'react-icons/fa'
import {BiCommentDetail} from 'react-icons/bi'

function App() {
  const[testimonals,setTestimonials] = useState('');
  const[items,setItems]= useState();

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${testimonals}`)
      .then((response)=> response.json())
      .then((json)=>setItems(json))
  },[testimonals])

  return (
    <>
    <div className='flex flex-col gap-4'>
      <Title text={'Testimonials App'}/>
      <div className=' ml-5 flex flex-row gap-3'>
      <Button bg={'bg-blue-400'} onClick={()=>{
        setTestimonials('Posts')
      }} icon={<BsFileEarmarkPostFill/>} btnName={'Posts'} />
      <Button bg={'bg-teal-400'} onClick={()=>{
        setTestimonials('Users')
      }} icon={<FaUserAlt/>} btnName={'Users'} />
      <Button bg={'bg-orange-400'} onClick={()=>{
        setTestimonials('Comments')
      }} icon={<BiCommentDetail/>} btnName={'Comments'} />
      </div>
      <Title text={!testimonals ? 'Select From Above' : testimonals}/>
    </div>
    {!items ? null : items.map(
      (items)=>{
        return (<div key={items.id}>{items.name && <h2 className='bg-gray-400 text-white'>{items.name}</h2>}
        <div>
          <h4 className='bg-purple-300 text-white'>{items.title}</h4>
          <p className=''>{items.body}</p>
        </div>
        {items.email && <small className='bg-yellow-300 text-white'>{items.email}</small>}
        </div>
                
        )
      }
    )}
   </>
  )
}

export default App