import React from 'react';
import style from '@/styles/nav.module.scss'
import cn from 'classnames';

const Navbar = () => {
  const classes = cn(style.nav);

  return <div className={classes}>Navbar</div>;
};

export default Navbar;
