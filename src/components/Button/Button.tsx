import React, { memo } from 'react';
import styles from './Button.module.scss';

interface Props {
  children: HTMLElement | string | React.ReactNode;
  tag: React.ElementType;
  additionalCss?: string;
  onClick?: (evt: React.MouseEvent<HTMLElement>) => void;
}

const Button = ({ children, tag: Tag, additionalCss, onClick }: Props) => {
  styles['view--extended'] = [
    styles.view,
    styles[`view--${Tag === 'a' ? 'outer' : 'inner'}`],
    additionalCss,
  ].join(' ');

  return (
    <Tag className={styles['view--extended']} onClick={onClick}>
      {children}
    </Tag>
  );
};

export { Button };
