import React from 'react'
import { Card } from 'semantic-ui-react'
import ListItem from './listItem'
const renderData = (props) => {
  if (props.data && props.data.length) {
    return (
      <Card.Group centered itemsPerRow={3}>
        {props.data.map((item, i) => (
          <ListItem item={item} key={i}/>
        ))}
      </Card.Group>
    );
  } else {
    return <div>No items found</div>
  }
}

export default renderData