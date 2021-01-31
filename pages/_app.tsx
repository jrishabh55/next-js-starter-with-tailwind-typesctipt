import '../styles/globals.scss';

import { Component, FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MyApp: FC<{ Component: typeof Component; pageProps: any }> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
