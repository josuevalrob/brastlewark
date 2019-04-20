import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow, render } from 'enzyme';

import App from './App';
import List from './components/list';
import SearchBar from './components/searchBar';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
// Okey, let's start with a dummy test... :)
describe('App component', () => {
  it('Header', () => {
    const wrapper = mount(<App />);  
    const text = wrapper.find('Header').text();
    expect(wrapper.exists()).toBe(true);
    expect(text).toEqual('Brastlewark');
  });
});
describe('List props', () => {
  it('URL', () => {
    const wrapper = mount(<List />);  
    const props = wrapper.props();
    expect(wrapper.exists()).toBe(true);
    expect(props.url).toEqual('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json');
  });
});

describe('Search component', ()=>{
  test('Render', ()=>{
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.exists()).toBe(true);
  })
  test('user can text something', ()=>{
    const wrapper = mount(<SearchBar handleChange={()=>{}}  />);
    wrapper.find('input').simulate('change', {
      target: {value: 'hello'}
    })
    expect(wrapper.find('input').props().value).toEqual('hello')
  })
  test('when the form is submitted the event is cancelled', () => {
    const wrapper = shallow(<SearchBar />)
    let prevent = false
    wrapper.find('Form').simulate('handleSubmit', {
      preventDefault: () => {prevent = true}
    })
    expect(prevent).toBe(true)
  })
})