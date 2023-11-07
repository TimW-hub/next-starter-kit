import React from 'react';
import style from './landing.module.scss';
import cn from 'classnames';
import { Image } from 'react-datocms';

const Landing = ({ landingPage, global }) => {
  const classes = cn(style.landing);
  console.log(landingPage);

  return (
    <div className={classes}>
      <div className={style.landing__bg_image}>
        <Image data={landingPage.heroImage.responsiveImage} />
      </div>
      <div className={style.landing__content}>
        <div className={style.landing__heading}>
          <h1>{landingPage.heading}</h1>
          <div className={style.landing__heading__image}>
            <Image data={global.siteLogo.responsiveImage} />
          </div>
        </div>
        <div>{landingPage.text}</div>
        <h5>
          For more info get in contact{' '}
          <a href="mailto:tswilliamsnz@gmail.com" target="_blank">
            HERE
          </a>
        </h5>
      </div>
    </div>
  );
};

export default Landing;
