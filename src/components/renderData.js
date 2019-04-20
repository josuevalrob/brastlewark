import React from 'react'
import { Grid } from 'semantic-ui-react'
// import SearchBar from './searchBar'
import ListItem from './listItem'

const renderData = (props) => {
  if (props.data && props.data.length) {
    return (
      <Grid>
        {/* <Grid.Row columns={3}> */}
          {props.data.map((item, i) => (
            <Grid.Column key={i} mobile={16} tablet={8} computer={4}>
              <ListItem item={item} />
            </Grid.Column>
          ))}
        {/* </Grid.Row> */}
      </Grid>
    );
  } else {
    return <div>No items found</div>
  }
}


export default renderData