import styles from './Select.module.scss';

interface Props {
  children: React.ReactNode;
  storeHandler: (event: React.ChangeEvent<Element>) => void;
}

const Select = ({ children, storeHandler }: Props) => {
  return (
    <div className={styles.view}>
      <div className={styles.wrapper}>
        Sort by
        <select onChange={storeHandler} className={styles.select}>
          {children}
        </select>
      </div>
    </div>
  );
};

export { Select };
