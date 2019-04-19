import React, {Component} from 'react'
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
  }

  render () {
    const { data } = this.state
    return data 
      ? <RenderData data = {data} />
      : <Loading />
  }
  
}

export default List