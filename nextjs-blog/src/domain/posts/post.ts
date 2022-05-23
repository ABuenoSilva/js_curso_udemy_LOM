export type PostData = {
  id: number;
  attributes: PostAttributes;
};

export type PostAttributes = {
  title: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: PostCover;
  author: AuthorData;
  categorie: CategorieData;
};

export type PostCover = {
  data: CoverData[];
};

export type CoverData = CoverFormat & {
  alternativeText: string;
  caption: string;
  formats: CoverFormats;
  previewUrl: string;
  provider: string;
  createdAt: string;
  updatedAt: string;
};

export type CoverFormats = {
  large: CoverFormat;
  small: CoverFormat;
  medium: CoverFormat;
  thumbnail: CoverFormat;
};

export type CoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string;
  size: number;
  width: number;
  height: number;
  provider_metadata: ProviderMetadata;
};

export type ProviderMetadata = {
  public_id: string;
  resource_type: string;
};

export type AuthorData = {
  data: {
    id: number;
    attributes: AuthorAttributes;
  };
};

export type AuthorAttributes = {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type CategorieData = {
  data: {
    id: number;
    attributes: CategorieAttributes;
  };
};

export type CategorieAttributes = {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};
