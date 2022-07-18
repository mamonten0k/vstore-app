import { memo } from 'react';
import { Button } from '..';
import styles from './Hero.module.scss';

const Hero = memo(() => {
  return (
    <section className={styles.inner}>
      <div className={styles.about}>
        <h1 className={styles.title}>Modern music in an old wrapper</h1>
        <div className={styles.utils}>
          <label>Made with love to uniqnuess</label>
          <Button tag='a' additionalCss={styles.btn}>
            Our Goals
          </Button>
        </div>
      </div>
      <img
        src='https://www.readersdigest.co.uk/media/NewFolder/iStock-649784906.jpg'
        alt=''
        className={styles.cover}
      />
    </section>
  );
});

export { Hero };
