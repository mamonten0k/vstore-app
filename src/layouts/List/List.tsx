import styles from './List.module.scss';

interface Props {
  children: React.ReactNode;
  type?: string;
  cols?: string;
}

const List = ({ children, type, cols }: Props) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export { List };
