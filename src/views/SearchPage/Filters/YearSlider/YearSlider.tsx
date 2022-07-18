import { useEffect, useState } from 'react';
import styles from './YearSlider.module.scss';

interface Props {
  storeHandler: (yearMin: string, yearMax: string) => void;
}

const YearSlider = ({ storeHandler }: Props) => {
  const [priceInputMin, setPriceInputMin] = useState<string | number>(1960);
  const [priceInputMax, setPriceInputMax] = useState<string | number>(2022);

  useEffect(() => {
    const onloadMin = localStorage.getItem('yearMin');
    const onloadMax = localStorage.getItem('yearMax');

    if (onloadMin) setPriceInputMin(onloadMin);
    if (onloadMax) setPriceInputMax(onloadMax);
  }, []);

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const handler = event.target.id;
    if (+event.target.value > +event.target.max) return;

    switch (handler) {
      case 'price-min':
        if (+event.target.value > +priceInputMax) return;
        setPriceInputMin(+event.target.value + '');
        event.target.style.left =
          (+event.target.value / +priceInputMin) * 100 + '%';
        localStorage.setItem('yearMin', +event.target.value + '');
        storeHandler(+event.target.value + '', priceInputMax + '');
        break;
      case 'price-max':
        if (+event.target.value > +priceInputMin) return;
        setPriceInputMax(+event.target.value + '');
        event.target.style.right = 100 - (+priceInputMax / 500) * 100 + '%';
        localStorage.setItem('yearMin', priceInputMax + '');
        storeHandler(priceInputMin + '', +event.target.value + '');
        break;
      case 'range-min':
        if (+event.target.value > priceInputMax) return;
        setPriceInputMin(+event.target.value + '');
        localStorage.setItem('yearMax', priceInputMin + '');
        storeHandler(+event.target.value + '', priceInputMax + '');
        break;
      case 'range-max':
        if (+event.target.value < priceInputMin) return;
        setPriceInputMax(event.target.value);
        localStorage.setItem('yearMax', priceInputMax + '');
        storeHandler(priceInputMin + '', +event.target.value + '');
        break;
    }
  }

  return (
    <div className={styles.wrapper}>
      <div>Sort by release date</div>
      <div className={styles['price-input']}>
        <div className={styles.field}>
          <span>Min</span>
          <input
            type='number'
            id='price-min'
            max='500'
            value={priceInputMin}
            onChange={handleInput}
          />
        </div>
        <div className={styles.field}>
          <span>Max</span>
          <input
            type='number'
            id='price-max'
            max='500'
            value={priceInputMax}
            onChange={handleInput}
          />
        </div>
      </div>
      <div className={styles.slider}>
        <div className={styles.progress}></div>
      </div>
      <div className={styles['range-input']}>
        <input
          type='range'
          id='range-min'
          min='1960'
          max='2022'
          value={priceInputMin}
          onChange={handleInput}
          step='1'
        />
        <input
          type='range'
          id='range-max'
          min='1960'
          max='2022'
          value={priceInputMax}
          onChange={handleInput}
          step='1'
        />
      </div>
    </div>
  );
};

export { YearSlider };
