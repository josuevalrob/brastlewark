import React, {Component} from 'react'
// import ReactPaginate from 'react-paginate';

class List extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount () {
    fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
      .then(res => res.json())
      .then(this.onLoad);
  }

  parseData (response) {
    return response.Brastlewark;
  }

  onLoad = (data) => {
    this.setState({
      data: this.parseData(data)
    });
  }

  render () {
    const { data } = this.state;

    return data ?
      this.renderData(data) :
      this.renderLoading()
  }

  renderData (data) {
    console.log(data)
    if (data && data.length) {
      return (
        <div>
          {
            data.map(item => (
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

  renderLoading () {
    return <div>Loading...</div>
  }
}

export default List;