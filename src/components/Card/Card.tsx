import React, { memo, useMemo } from 'react';
import { eventManager } from 'react-toastify/dist/core';
import { Button } from '../Button/Button';
import styles from './Card.module.scss';

interface Props {
  cover_img: string;
  title: string;
  type: string;
  price: string;
  releaseDate: string;
  link?: string;
}

const Card = memo(
  ({ cover_img, title, releaseDate, link, price, type }: Props) => {
    styles['layout-extended'] = useMemo(
      () => [styles.layout, `${styles.layout}-${type}`].join(' '),
      [type]
    );

    function dodgeClick(event: React.MouseEvent) {
      event.preventDefault();
    }

    return (
      <div className={styles['layout-extended']}>
        <div>
          <a href='' onClick={dodgeClick}>
            <img src={cover_img} alt={`Cover of ${title} album`} />
          </a>
        </div>
        <section className={styles.info}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.tools}>
            <div className={styles.price}>Price: {price}$</div>
            <div className={styles.price}>Released: {releaseDate}</div>
          </div>
          <div className={styles.tools}>
            <Button tag='a'>More</Button>
            <Button tag='button'>Add to cart</Button>
          </div>
        </section>
      </div>
    );
  }
);

export { Card };
