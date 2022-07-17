import React, { memo } from 'react';
import styles from './Button.module.scss';

interface Props {
  title: string;
  tag: React.ElementType;
  onClick?: (evt: React.MouseEvent) => void;
}

const Button = memo(({ title, tag: Tag, onClick }: Props) => {
  styles['view--extended'] = [
    styles.view,
    styles[`view--${Tag === 'a' ? 'outer' : 'inner'}`],
  ].join(' ');

  return (
    <Tag className={styles['view--extended']} onClick={onClick}>
      {title}
    </Tag>
  );
});

export { Button };
