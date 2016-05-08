import React from 'react';

function HelloWorld(props) {
  return (
    <div>
      Hello {props.name} !
    </div>
  );
}

HelloWorld.propTypes = {
  name: React.PropTypes.array.isRequired,
};

HelloWorld.defaultProps = {
  name: ['World!'],
};

export default HelloWorld;
