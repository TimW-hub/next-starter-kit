import React from 'react';
import style from './footer.module.scss'
import cn from 'classnames';

const Footer = () => {
  const classes = cn(style.footer);

  return <div className={classes}>Footer</div>;
};

export default Footer;
