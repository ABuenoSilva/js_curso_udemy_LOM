import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { MainContainer } from '../../components/MainContainer';
import { PostCover } from '../../components/PostCover';
import { PostDetails } from '../../components/PostDetails';
import { PostAttributes } from '../../domain/posts/post';

export type PostProps = {
  post: PostAttributes;
};

export const Post = ({ post }: PostProps) => {
  return (
    <>
      <Header />
      <MainContainer>
        <Heading>{post.title}</Heading>
        <PostCover
          coverUrl={post.cover.data[0].attributes.formats.medium.url}
          alt={post.title}
        />
        <PostDetails
          author={post.author.data.attributes.name}
          category={post.categorie.data.attributes.name}
          date={post.createdAt}
        />
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </MainContainer>
      <Footer />
    </>
  );
};
