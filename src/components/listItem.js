import React from 'react'
import LazyLoad from 'react-lazyload';


const ListItem = (props) => {
  return (  
    <div key={props.item.id}>
      <p>{props.item.name}</p> 
      <p>{props.item.age}</p>
      <LazyLoad throttle={200} height={300}>
        <img src={props.item.thumbnail} alt={props.item.name}/>
      </LazyLoad>
    </div>
  )
}

export default ListItem