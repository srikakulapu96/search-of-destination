import React from 'react'
import './index.css' 


const DestinationItem = (props) => {
  const {details} = props
  const {imgUrl , name} = details
  return(
    <li className='list-items'>
      <img className='image-element' src={imgUrl} alt={name}/>
      <p className='title'>{name}</p>
    </li>
  )
}

 export default DestinationItem