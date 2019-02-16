import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack Babel Setup2';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

if (module && module.hot) {
  module.hot.accept();
}