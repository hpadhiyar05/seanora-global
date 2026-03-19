import React from 'react';

export const AnimatedHeading = ({ children, className, as = 'h2' }) => {
  const Tag = as;
  return (
    <Tag className={className}>
      {children}
    </Tag>
  );
};

export const AnimatedText = ({ text, className }) => {
  if (!text) return null;

  return <span className={className}>{text}</span>;
};
