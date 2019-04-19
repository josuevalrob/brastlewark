import React, {Component} from 'react'
import PropTypes from 'prop-types';
// Fck, un response de 1335 elementos!!
// import ReactPaginate from 'react-paginate';

class List extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    perPage: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      offset: 0
    }
  }

  componentDidMount () { // le podemos meter axios más adelante
    this.onLoad()    
  }

  onLoad = () => {
    fetch(this.props.url)
      .then(res => res.json())
      .then(response => {
        const data = response.Brastlewark
        this.setState({
          data: data,
          pageCount: Math.ceil(data.length / this.props.perPage),
        });
      })
      .catch(err => console.error(this.props.url, err.toString())) //dejamos el error handling para más adelante    
  }

  // handlePageClick = paginator => {
  //   let selected = paginator.selected;
  //   let offset = Math.ceil(selected * this.props.perPage);

  //   this.setState({ offset: offset }, () => {
  //     this.loadCommentsFromServer();
  //   });
  // };
  
  render () {
    const { data } = this.state;

    return data.length 
      ? this.renderData(data) 
      : this.renderLoading()
  }

  renderData (data) {
    if (data.length) {
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