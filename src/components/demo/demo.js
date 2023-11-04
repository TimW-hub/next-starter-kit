import React from 'react';
import cn from 'classnames';
import style from './demo.mod.scss';

const Demo = ({ name = 'Demo Block' }) => {
  const classes = cn(style.demo);

  return (
    <div className={classes}>
      <h2>{name}</h2>
    </div>
  );
};

export default Demo;
