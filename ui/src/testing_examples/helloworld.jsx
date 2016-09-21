import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/Helloworld.jsx';

ReactDOM.render(
  <HelloWorld name="World1" />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
