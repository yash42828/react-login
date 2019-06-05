import React from './node_modules/react';
import ReactDOM from './node_modules/react-dom';
import Signup from './Signup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Signup />, div);
  ReactDOM.unmountComponentAtNode(div);
});
