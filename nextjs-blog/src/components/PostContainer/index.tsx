import React from 'react';
import { Container } from './styled';

export type PostCoverProps = {
  content: string;
};

export const PostContainer = ({ content }: PostCoverProps) => {
  return <Container dangerouslySetInnerHTML={{ __html: content }} />;
};
