import HelloWorld from './components/Helloworld.jsx';

global.HelloWorld = HelloWorld;

if (module.hot) {
  module.hot.accept();
}
