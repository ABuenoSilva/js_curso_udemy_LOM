import { POSTS_URL } from '../../config/app-config';
import { MetaData } from '../../domain/posts/meta';
import { fetchJson } from '../../utils/fetch-json';

export const countAllPosts = async (query = ''): Promise<number> => {
  const url = `${POSTS_URL}&${query}`;

  const numberOfPosts = await fetchJson<MetaData>(url);
  return numberOfPosts['meta'].pagination.total;
};
