import { GetStaticProps } from 'next';
import { PostData } from '../domain/posts/post';

const getPosts = async (): Promise<PostData[]> => {
  const posts = await fetch(
    'https://intense-temple-08818.herokuapp.com/api/posts?populate=*',
  );
  const jsonPosts = await posts.json();
  return jsonPosts['data'];
};

export default function Home({ posts }: HomeProps) {
  return (
    <div>
      {posts.map((post) => (
        <h2 key={post.attributes.slug}>{post.attributes.title}</h2>
      ))}
    </div>
  );
}

export type HomeProps = {
  posts: PostData[];
};

export const getStaticProps: GetStaticProps = async () => {
  const posts: PostData[] = await getPosts();
  return { props: { posts }, revalidate: 5 };
};
