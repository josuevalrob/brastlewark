import React from 'react'

const renderData = (props) => {
  if (props.data && props.data.length) {
    return (
      <div>
        {
          props.data.map(item => (
            <div key={item.id}>
              <p>{item.name}</p> 
              <p>{item.age}</p>
            </div>
          ))
        }
      </div>
    );
  } else {
    return <div>No items found</div>
  }
}

export default renderData