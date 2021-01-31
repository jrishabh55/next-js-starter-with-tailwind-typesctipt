import Head from 'next/head';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <div className="bg-red-900 h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
