import React, {Component} from 'react'
import { Form, Input, Button } from 'semantic-ui-react'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state.value);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Field
          id='form-input-control-first-name'
          control={Input}
          value={this.state.value} onChange={this.handleChange} 
          label='First name'
          placeholder='First name'
          />
        <Form.Field
          id='form-button-control-public'
          control={Button}
          content='Confirm'
          type="submit"
          />
        </Form.Group>
      </Form>
    );
  }
}

export default SearchBar