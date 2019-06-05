import React from './node_modules/react';
import ReactDOM from './node_modules/react-dom';
import NotFound from './NotFound';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NotFound />, div);
  ReactDOM.unmountComponentAtNode(div);
});
