import React from './node_modules/react';
import ReactDOM from './node_modules/react-dom';
import MobileHeader from './MobileHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MobileHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
