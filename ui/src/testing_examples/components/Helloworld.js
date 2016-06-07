import React from 'react';

class Helloworld extends React.Component {
  getName() {
    // Play with it...
    return 'World';
  }
  render() {
    const name = this.getName();
    return (
      <h2>
        <span >Hello, {name}</span>
      </h2>
    );
  }
}

export default Helloworld;
