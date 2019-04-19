import React from 'react'

const ListItem = (props) => {
  return (  
    <div key={props.item.id}>
      <p>{props.item.name}</p> 
      <p>{props.item.age}</p>
    </div>
  )
}

export default ListItem