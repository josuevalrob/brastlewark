import React, {Component} from 'react'
import PropTypes from 'prop-types';
import RenderData from './renderData'
import Loading from './loading'

class List extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount () {
    this.onLoad()
  }

  onLoad = () => {
    fetch(this.props.url)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          data: data.Brastlewark
        })
      })
      .catch(err=>console.error(`Ups, we have a problem, check it: ${err}`))
    return true
  }

  render () {
    const { data } = this.state
    return data 
      ? <RenderData data = {data} />
      : <Loading />
  }
  
}
List.defaultProps = {
  url: 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
};
export default List