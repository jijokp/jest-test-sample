import * as React from 'react';

export const SayHello  = props => {
  const { person } = props;
  return <h1>Hello {person}!</h1>;
};