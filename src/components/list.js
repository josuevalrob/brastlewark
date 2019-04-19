import React, {Component} from 'react'
import RenderData from './renderData'
import Loading from './loading'

class List extends Component {
  constructor(){
    super()
    this.state = {}
  }

  componentDidMount () {
    this.onLoad()
  }

  onLoad = () => {
    fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
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