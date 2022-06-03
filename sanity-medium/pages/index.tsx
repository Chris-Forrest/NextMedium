import type { NextPage } from 'next';
import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Posts from '../components/Posts';


const Home: NextPage = () => {
  return (
    <div className='max-w-7xl max-auto' >
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />
      
      <Posts />
    </div>
  );
}

export default Home
