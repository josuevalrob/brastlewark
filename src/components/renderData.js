import React from 'react'
import ListItem from './listItem'
const renderData = (props) => {
  if (props.data && props.data.length) {
    return (
      <div>
        {props.data.map(item => (
          <ListItem item={item} />
        ))}
      </div>
    );
  } else {
    return <div>No items found</div>
  }
}

export default renderData