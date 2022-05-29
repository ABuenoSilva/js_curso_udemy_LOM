import { GetStaticProps } from 'next';
import HomePage from '../containers/homepage';
import { getAllPosts } from '../data/posts/get-all-posts';
import { PostData } from '../domain/posts/post';

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return <HomePage posts={posts} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts: PostData[] = await getAllPosts(
    'sort[0]=id:desc&pagination[start]=0&pagination[limit]=30',
  );
  return { props: { posts }, revalidate: 5 };
};

// exemplo de strapi v4
// GET /api/books?sort[0]=title%3Aasc&filters[title][$eq]=hello&populate=%2A&fields[0]=title&pagination[pageSize]=10&pagination[page]=1&publicationState=live&locale[0]=en
