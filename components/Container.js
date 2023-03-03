import React from 'react';

const Container = ({ className, children, ...rest }) => {
  return (
    <div
      {...rest}
      className={`mx-auto px-5 md:px-40 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
