import { memo, useMemo } from 'react';
import { Button } from '../Button/Button';
import styles from './Card.module.scss';

interface Props {
  cover_img: string;
  title: string;
  type: string;
  link?: string;
}

const Card = memo(({ cover_img, title, link, type }: Props) => {
  styles['layout-extended'] = useMemo(
    () => [styles.layout, `${styles.layout}-${type}`].join(' '),
    [type]
  );

  return (
    <div className={styles['layout-extended']}>
      <div>
        <a href=''>
          <img src={cover_img} alt={`Cover of ${title} album`} />
        </a>
      </div>
      <section className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.tools}>
          <Button tag='a'>More</Button>
          <Button tag='button'>Add to cart</Button>
        </div>
      </section>
    </div>
  );
});

export { Card };
