export type Photo = {
  id: string;
  slug: string;
  alternative_slugs: AlternativeSlugs;
  created_at: string;
  updated_at: string;
  promoted_at?: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description?: string;
  alt_description: string;
  urls: Urls;
  links: Links;
  likes: number;
  liked_by_user: boolean;
  sponsorship?: Sponsorship;
  topic_submissions: TopicSubmissions;
  asset_type: string;
  user: User;
};

export type AlternativeSlugs = {
  en: string;
  es: string;
  ja: string;
  fr: string;
  it: string;
  ko: string;
  de: string;
  pt: string;
};

export type Urls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
};

export type Links = {
  self: string;
  html: string;
  download: string;
  download_location: string;
};

export type Sponsorship = {
  impression_urls: string[];
  tagline: string;
  tagline_url: string;
  sponsor: Sponsor;
};

export type Sponsor = {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  links: Links2;
  profile_image: ProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number;
  total_illustrations: number;
  total_promoted_illustrations: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
};

export type Links2 = {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
};

export type ProfileImage = {
  small: string;
  medium: string;
  large: string;
};

export type Social = {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: string;
};

export type TopicSubmissions = {
  people?: People;
  animals?: Animals;
  nature?: Nature;
  travel?: Travel;
};

export type People = {
  status: string;
  approved_on?: string;
};

export type Animals = {
  status: string;
  approved_on: string;
};

export type Nature = {
  status: string;
};

export type Travel = {
  status: string;
  approved_on: string;
};

export type User = {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name?: string;
  twitter_username?: string;
  portfolio_url?: string;
  bio?: string;
  location?: string;
  links: Links3;
  profile_image: ProfileImage2;
  instagram_username?: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number;
  total_illustrations: number;
  total_promoted_illustrations: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social2;
};

export type Links3 = {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
};

export type ProfileImage2 = {
  small: string;
  medium: string;
  large: string;
};

export type Social2 = {
  instagram_username?: string;
  portfolio_url?: string;
  twitter_username?: string;
};
