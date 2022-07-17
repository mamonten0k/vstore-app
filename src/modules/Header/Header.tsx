import { memo, useState } from 'react';
import { Button, SearchBar } from '../../components';
import styles from './Header.module.scss';

const Header = memo(() => {
  const [isOpened, setIsOpened] = useState(false);

  const onClick = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    setIsOpened(!isOpened);
  };

  styles['container--extended'] = ['container', styles.layout].join(' ');

  return (
    <header className={styles.header}>
      <nav className={styles['container--extended']}>
        <h1 className={styles.logo}>
          <a href=''>VSTORE</a>
        </h1>
        <div className={styles.menu}>
          <ul
            className={styles['nav-links']}
            style={isOpened ? { display: 'flex' } : {}}>
            <li>
              <a href=''>Catalog</a>
            </li>
            <li>
              <a href=''>About</a>
            </li>
            <li>Cart</li>
            <li>
              <SearchBar />
            </li>
          </ul>
          <Button tag='button' additionalCss={styles.toggle} onClick={onClick}>
            <span>
              {!isOpened ? (
                <svg
                  fill='#fff'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='20px'
                  height='20px'>
                  <path d='M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z' />
                </svg>
              ) : (
                <svg
                  fill='#fff'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='20px'
                  height='20px'>
                  <path d='M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z' />
                </svg>
              )}
            </span>
          </Button>
        </div>
        <div className={styles.profile}>LOGIN</div>
      </nav>
    </header>
  );
});

export { Header };
