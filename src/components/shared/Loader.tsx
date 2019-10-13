import React from 'react';
const Loader = () => {
  return (
    <div
      style={{ position: 'absolute', left: 0, right: 0, top: '40%' }}
      className="loader-container-wrapper"
    >
      <div className="loader-container">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
export default Loader;
