import { Default } from './layouts';
import { EntryPage, SearchPage } from './views';

import { sampleData } from './assets/products';

const App = () => {
  return (
    <Default>
      <SearchPage data={sampleData} />
    </Default>
  );
};

export { App };
