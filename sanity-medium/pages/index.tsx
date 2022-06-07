import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import PostComponent from '../components/Posts';
import { sanityClient, urlFor } from '../sanity';
import { Post } from "../typeings";
import Link from 'next/link';

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  console.log(posts)
  return (
    <div className='max-w-7xl max-auto' >
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />
      
      {/*<PostComponent  />*/}
      <div>
        {posts.map((post) => (
          <Link key={post._id} href={`/posts/${post.slug.current}`}>
            <img src={
            urlFor(post.mainImage).url()!
          } alt=""/>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author-> {
    name,
    image
  },
  description,
  mainImage,
  slug
  }`;
  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
