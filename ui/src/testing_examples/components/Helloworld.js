import React from 'react';

const HelloWorld = props => (
  <div>
    Hi {props.name}
  </div>
);

HelloWorld.propTypes = {
  name: React.PropTypes.string.isRequired,
};

HelloWorld.defaultProps = {
  name: 'Sekai',
};

export default HelloWorld;
