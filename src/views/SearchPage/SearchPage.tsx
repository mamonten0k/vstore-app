import { Hero } from '../EntryPage/Hero/Hero';
import { Card } from '../../components';
import { albumProps } from '../../types/interfaces';
import styles from './SearchPage.module.scss';

interface Props {
  data: albumProps[];
}

const SearchPage = ({ data }: Props) => {
  return (
    <>
      <Hero />
      <div className={styles.container}>
        <div className={styles.filters}></div>
        <div className={styles.content}>
          {data.map((item) => (
            <Card cover_img={item.cover} title={item.title} type='minify' />
          ))}
        </div>
      </div>
    </>
  );
};

export { SearchPage };
