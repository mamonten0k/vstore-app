import React, { useRef, useState } from 'react';
import { useDetectOutsideClick } from '../../hooks/useDetectOutside';
import { Button } from '../Button/Button';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useDetectOutsideClick(inputRef, () => setIsVisible(false));

  styles['input--extended'] = [
    styles.input,
    isVisible ? styles['input--visible'] : '',
  ].join(' ');

  const handleClick = (evt: React.MouseEvent) => {
    evt.stopPropagation();

    if (inputRef.current != null) {
      inputRef.current.focus();
    }

    setIsVisible(!isVisible);
  };

  return (
    <div className={styles.layout}>
      <Button tag='button' onClick={handleClick} additionalCss={styles.toggle}>
        Search
      </Button>
      <input
        autoFocus
        ref={inputRef}
        className={styles['input--extended']}
        placeholder='Type here to search...'
      />
      {isVisible && (
        <Button tag='button' onClick={handleClick} additionalCss={styles.close}>
          <span>
            <svg
              fill='#000000'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24px'
              height='24px'>
              <path d='M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z' />
            </svg>
          </span>
        </Button>
      )}
    </div>
  );
};

export { SearchBar };
