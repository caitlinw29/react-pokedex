import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll', borderTop: '1px solid white', height: '75vh', margin: '2% 0', padding: '2%' }}>
      {props.children}
    </div>
  );
}

export default Scroll;