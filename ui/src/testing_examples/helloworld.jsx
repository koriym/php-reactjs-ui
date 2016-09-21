import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/Helloworld.jsx';

ReactDOM.render(
  <HelloWorld name="World" />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
