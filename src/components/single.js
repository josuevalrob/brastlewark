import React, {Component} from 'react'
import PropTypes from 'prop-types';
          

export class Single extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  render() {

    return (
      <div id="list" className="commentList">
        {/* <ul>{commentNodes}</ul> */}
        {
            this.props.data.map(item => (
              <div key={item.id} className="item">
                <p>{item.id}</p>
                <p>{item.name}</p> 
              </div>
            ))
          }
      </div>
    );
  }
}

export default Single