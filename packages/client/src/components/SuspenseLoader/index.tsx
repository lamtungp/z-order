import { Suspense } from 'react';

import SuspenseLoader from './Loader';

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

export default Loader;
