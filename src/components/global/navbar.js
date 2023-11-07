import React from 'react';
import style from './nav.module.scss';
import cn from 'classnames';
import Logo from '../icons/logo';

const Navbar = () => {
  const classes = cn(style.nav);

  return (
    <div className={classes}>
      <div>
        <div className={style.nav__logo}>
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
