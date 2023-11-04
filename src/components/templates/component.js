import React from 'react';
import cn from 'classnames';
import style from './component.mod.scss';

const TemplateComponent = ({}) => {
  const classes = cn(style.template_component);

  return <div className={classes}></div>;
};

export default TemplateComponent;
