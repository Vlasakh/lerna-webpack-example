import React, { Suspense } from 'react';

const LoadingState = <div style={{ background: 'aqua', width: '100px', height: '100px' }}>Loading...</div>;

const LoadableAsyncLeaf = React.lazy(() => {
  // We are intentionally ignoring here as this leaf is in JS not TS. This is useful
  // if you want to progressively update your packages over to TS.
  // @ts-ignore
  return import(/* webpackChunkName: 'async-leaf' */ '@dkez/async-leaf');
});

const AsyncLeaf = () => (
  <div>
    AsyncLeaf Loaded!
    {/*<Suspense fallback={LoadingState}>*/}
    <span>Say hello</span>
    {/*</Suspense>*/}
  </div>
);

export default AsyncLeaf;
