import React, { forwardRef } from 'react';
import styles from './List.module.scss';

interface Props {
  children: React.ReactNode;
  type?: string;
  cols?: string;
}

const List = forwardRef(
  ({ children, type, cols }: Props, ref: React.LegacyRef<HTMLDivElement>) => {
    styles['wrapper--extended'] = [
      styles.wrapper,
      styles[`${type}`],
      styles[`${cols}`],
    ].join(' ');

    return (
      <div ref={ref} className={styles['wrapper--extended']}>
        {children}
      </div>
    );
  }
);

export { List };
