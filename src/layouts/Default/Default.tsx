import { Footer, Header } from '../../modules';

export interface Props {
  children: React.ReactNode;
}

const Default = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className='container'>{children}</main>
      <Footer />
    </>
  );
};

export { Default };
