import React from 'react';
import {hot} from 'react-hot-loader';

@hot(module)
export default class Genesis extends React.Component {
  constructor(props) {
    super(props);

    console.log('constructor');

    this.state = {
      count: 0,
    };
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  render() {
    console.log('render')
    return (
      <div style={{display: 'flex', flexDirection: 'column', backgroundColor: 'white'}}>
        <div>
          {this.props.date.toString()}
        </div>
        <div>
          Genesis {this.state.count}!
        </div>
        <button onClick={() => this.forceUpdate()} style={{width: '75px'}}>
          Force update!
        </button>
        <button onClick={() => this.setState(prevState => ({count: prevState.count + 1}))} style={{width: '75px'}}>
          Update count
        </button>
      </div>
    );
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true;
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
}

