import React from 'react';

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: 'hidden',
        height: '800px',
        marginTop: '40px',
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
