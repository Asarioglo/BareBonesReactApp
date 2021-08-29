import React from 'react';
import ReactDOM from 'react-dom';
import Preferences from './Preferences';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Preferences />, div);
  ReactDOM.unmountComponentAtNode(div);
});