import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, Hero } from '../../components';
import { List, Section } from '../../layouts';
import { albumProps } from '../../types/interfaces';
import { Select, Slider, YearSlider } from './Filters';
import styles from './SearchPage.module.scss';

interface Props {
  data: albumProps[];
}

const SearchPage = ({ data }: Props) => {
  const containerRef = useRef(null);
  const [currData, setCurrData] = useState<albumProps[] | null>(data);
  const [displayedElements, setDisplayedElements] = useState<
    JSX.Element[] | string | null
  >(null);

  useEffect(() => {
    // applyExistingFilters();
    // setMappedElements(filteredData);
    // setCurrData(filteredData);
    setMappedElements(data);
  }, []);

  const applyExistingFilters = (): void => {
    const existingFilters = Object.keys(localStorage);

    // if (existingFilters.includes('selection')) {
    //   console.log(localStorage.getItem('selection'));
    //   handleSelect(null, localStorage.getItem('selection'));
    // }

    // if (
    //   existingFilters.includes('priceMin') ||
    //   existingFilters.includes('priceMax')
    // ) {
    //   handleSlider(
    //     localStorage.getItem('priceMin') || '0',
    //     localStorage.getItem('priceMax') || '500'
    //   );
    // }

    // if (
    //   existingFilters.includes('yearMin') ||
    //   existingFilters.includes('yearMax')
    // ) {
    //   handleYearSlider(
    //     localStorage.getItem('yearMin') || '1960',
    //     localStorage.getItem('yearMax') || '2022'
    //   );
    // }
  };

  const applySelect = (
    option: string | null,
    data: albumProps[] | null
  ): albumProps[] | null => {
    if (!option || !data) return data;
    console.log('option here here here');

    switch (option) {
      case 'name-1':
        return data.sort((a, b) => (a.title > b.title ? 1 : -1));
      case 'name-2':
        return data.sort((a, b) => (a.title > b.title ? 1 : -1)).reverse();
      case 'date-1':
        return data.sort((a, b) => +a.releaseDate - +b.releaseDate);
      case 'date-2':
        return data.sort((a, b) => +a.releaseDate - +b.releaseDate).reverse();
      default:
        return data;
    }
  };

  const handleSelect = (event: React.ChangeEvent<Element> | null): void => {
    if (!event || !event.target) {
      return;
    }

    const newOption = (event.target as HTMLOptionElement).value;
    const filteredData = applySelect(newOption, currData);

    setMappedElements(filteredData);
    localStorage.setItem('selection', newOption);
    setCurrData(filteredData);
  };

  const handleSlider = (priceMin: string | null, priceMax: string | null) => {
    let filteredData = currData || data;

    if (priceMin)
      filteredData = filteredData.filter((item) => +item.price >= +priceMin);

    if (priceMax)
      filteredData = filteredData.filter((item) => +item.price <= +priceMax);

    setMappedElements(filteredData);
  };

  const handleYearSlider = (yearMin: string | null, yearMax: string | null) => {
    let filteredData = currData || data;

    if (yearMin)
      filteredData = filteredData.filter(
        (item) => +item.releaseDate >= +yearMin
      );

    if (yearMax)
      filteredData = filteredData.filter(
        (item) => +item.releaseDate <= +yearMax
      );

    setMappedElements(filteredData);
  };

  const handleReset = () => {
    localStorage.clear();
    // setCurrData(data);
    // handleSlider('0', '500');
    // handleYearSlider('1960', '2022');
    setMappedElements(data);
  };

  const setMappedElements = (filteredData: albumProps[] | null): void => {
    if (!filteredData) {
      setDisplayedElements('No elements was found with current filters');
      return;
    }

    const mappedElements = filteredData.map((item) => (
      <Card
        price={item.price}
        releaseDate={item.releaseDate}
        cover_img={item.cover}
        title={item.title}
        type='minify'
      />
    ));

    setDisplayedElements(mappedElements);
  };

  return (
    <>
      <Hero />
      <Section title='Advanced Search'>
        <div className={styles.container}>
          <div className={styles.filters}>
            <div className={styles.search}>
              <label htmlFor='search'>
                Search
                <input id='search' placeholder='Filter albums by name...' />
                <Button tag='button' additionalCss={styles.close}>
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
              </label>
            </div>
            <Slider storeHandler={handleSlider} />
            <YearSlider storeHandler={handleYearSlider} />
            <Select storeHandler={handleSelect}>
              <option value='name-1'>Name increasing</option>
              <option value='name-2'>Name decreasing</option>
              <option value='date-1'>Date increasing</option>
              <option value='date-2'>Date decreasing</option>
            </Select>
            <Button
              tag='button'
              additionalCss={styles.reset}
              onClick={handleReset}>
              Reset filters
            </Button>
          </div>
          <List ref={containerRef} type='wide' cols='adaptive'>
            {displayedElements}
          </List>
        </div>
      </Section>
    </>
  );
};

export { SearchPage };
