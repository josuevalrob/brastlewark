import React, {Component} from 'react'
import { Grid, Divider } from 'semantic-ui-react'
import SearchBar from './searchBar'
import ListItem from './listItem'

class renderData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data : this.props.data
    }
  }

  onFormSubmit = (value) => {
    if(!value){
      this.setState({
        data: this.props.data
      })
    } else {
      const {data} = this.state
      const newData = data.filter( e => e.name.includes(value))
      this.setState({data: newData})
    }
  }

  render(){
    if (this.state.data && this.state.data.length) {
      return (
        <React.Fragment>
          <Divider />
          <SearchBar onSubmit={this.onFormSubmit}/>
          <Divider />
          <Grid>
            {this.state.data.map((item, i) => (
              <Grid.Column key={i} mobile={16} tablet={8} computer={4}>
                <ListItem item={item} />
              </Grid.Column>
            ))}
          </Grid>
        </React.Fragment>
      );
    } else {
      return <div>No items found</div>
    }
  }
}


export default renderData