import { memo } from 'react';
import { Button } from '../Button/Button';
import styles from './Billboard.module.scss';

interface Props {
  cover_img: string;
  title: string;
  type?: string;
  link?: string;
}

const Billboard = memo(({ cover_img, title, link, type }: Props) => {
  return (
    <div className={styles.layout}>
      <div className={styles.cover}>
        <a href=''>
          <img src={cover_img} alt='' />
        </a>
      </div>
      <section className={styles.description}>
        <h3 className={styles.title}>{title}</h3>
        <p>
          Minutes to&nbsp;Midnight is&nbsp;the band&rsquo;s follow-up album
          to&nbsp;Meteora (2003), and features a&nbsp;shift in&nbsp;the
          group&rsquo;s musical direction. For the band, the album marked
          a&nbsp;beginning of&nbsp;deviation from their signature nu&nbsp;metal
          sound. Minutes to&nbsp;Midnight takes its title from the Doomsday
          Clock symbol. It&nbsp;is&nbsp;also the band&rsquo;s first full-length
          album to&nbsp;carry a&nbsp;Parental Advisory label.
        </p>
        <div className={styles.utils}>
          <a href=''>More</a>
          <Button tag='button'>Add to cart</Button>
        </div>
      </section>
    </div>
  );
});

export { Billboard };
