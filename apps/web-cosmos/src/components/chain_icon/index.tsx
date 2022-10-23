import React from 'react';
import light from '@assets/icons/cosmos-light.svg?url';
import dark from '@assets/icons/cosmos-dark.svg?url';
import classnames from 'classnames';
import { useStyles } from './useStyles';

const Icon = ({
  className, src, ...props
}: JSX.IntrinsicElements['img']) => {
  const classes = useStyles();
  return (
    <>
      <img src={light} alt="" {...props} className={classnames(className, classes.light)} />
      <img src={dark} alt="" {...props} className={classnames(className, classes.dark)} />
    </>
  );
};

export default Icon;
