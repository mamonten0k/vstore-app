import styles from './Section.module.scss';

interface Props {
  children: React.ReactNode;
  title: string;
}

const Section = ({ children, title }: Props) => {
  return (
    <section className={styles.layout}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
};

export { Section };
