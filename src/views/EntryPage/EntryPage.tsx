import { Billboard, Card } from '../../components';
import { List, Section } from '../../layouts';
import { Hero } from '../../components';

const EntryPage = () => {
  return (
    <>
      <Hero />
      <Section title='Leader of the week'>
        <Billboard
          title='Minutes To Midnight'
          cover_img='https://i.scdn.co/image/ab67616d0000b27346e207de66ba06422897f769'
        />
      </Section>
      <Section title='Hot Releases'>
        <List>
          <Card
            type='md'
            title='Minutes To Midnight'
            cover_img='https://i.scdn.co/image/ab67616d0000b27346e207de66ba06422897f769'
          />
          <Card
            type='md'
            title='Minutes To Midnight'
            cover_img='https://i.scdn.co/image/ab67616d0000b27346e207de66ba06422897f769'
          />
          <Card
            type='md'
            title='Minutes To Midnight'
            cover_img='https://i.scdn.co/image/ab67616d0000b27346e207de66ba06422897f769'
          />
          <Card
            type='md'
            title='Minutes To Midnight'
            cover_img='https://i.scdn.co/image/ab67616d0000b27346e207de66ba06422897f769'
          />
          <Card
            type='md'
            title='Minutes To Midnight'
            cover_img='https://i.scdn.co/image/ab67616d0000b27346e207de66ba06422897f769'
          />
        </List>
      </Section>
      <Section title='Known by everyone'>
        <List>
          <Card
            type='md'
            title='Minutes To Midnight'
            cover_img='https://i.scdn.co/image/ab67616d0000b27346e207de66ba06422897f769'
          />
          <Card
            type='md'
            title='Minutes To Midnight'
            cover_img='https://i.scdn.co/image/ab67616d0000b27346e207de66ba06422897f769'
          />
          <Card
            type='md'
            title='Minutes To Midnight'
            cover_img='https://i.scdn.co/image/ab67616d0000b27346e207de66ba06422897f769'
          />
          <Card
            type='md'
            title='Minutes To Midnight'
            cover_img='https://i.scdn.co/image/ab67616d0000b27346e207de66ba06422897f769'
          />
          <Card
            type='md'
            title='Minutes To Midnight'
            cover_img='https://i.scdn.co/image/ab67616d0000b27346e207de66ba06422897f769'
          />
        </List>
      </Section>
      <Section title='Preorder now'>
        <List>
          <Card
            type='md'
            title='Minutes To Midnight'
            cover_img='https://i.scdn.co/image/ab67616d0000b27346e207de66ba06422897f769'
          />
          <Card
            type='md'
            title='Minutes To Midnight'
            cover_img='https://i.scdn.co/image/ab67616d0000b27346e207de66ba06422897f769'
          />
          <Card
            type='md'
            title='Minutes To Midnight'
            cover_img='https://i.scdn.co/image/ab67616d0000b27346e207de66ba06422897f769'
          />
          <Card
            type='md'
            title='Minutes To Midnight'
            cover_img='https://i.scdn.co/image/ab67616d0000b27346e207de66ba06422897f769'
          />
          <Card
            type='md'
            title='Minutes To Midnight'
            cover_img='https://i.scdn.co/image/ab67616d0000b27346e207de66ba06422897f769'
          />
        </List>
      </Section>
    </>
  );
};

export { EntryPage };
