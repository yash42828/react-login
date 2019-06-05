import React from './node_modules/react';
import ReactDOM from './node_modules/react-dom';
import Welcome from './Welcome';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Welcome />, div);
  ReactDOM.unmountComponentAtNode(div);
});
