export interface GiphyResponse {
  data:       GiphyItem[];
  meta:       Meta;
  pagination: Pagination;
}

export interface GiphyItem {
  type:                       string;
  id:                         string;
  url:                        string;
  slug:                       string;
  bitly_gif_url:              string;
  bitly_url:                  string;
  embed_url:                  string;
  username:                   string;
  source:                     string;
  title:                      string;
  rating:                     string;
  content_url:                string;
  source_tld:                 string;
  source_post_url:            string;
  is_sticker:                 number;
  import_datetime:            string;
  trending_datetime:          string;
  images:                     Images;
  user?:                      User;
  analytics_response_payload: string;
  analytics:                  Analytics;
  alt_text:                   string;
  is_low_contrast?:           boolean;
}

export interface Images {
  original:                 ImageDetail;
  fixed_height:             ImageDetail;
  fixed_height_downsampled: ImageDetail;
  fixed_height_small:       ImageDetail;
  fixed_height_small_still?:ImageDetail;
  fixed_height_still?:      ImageDetail;
  fixed_width:              ImageDetail;
  fixed_width_downsampled:  ImageDetail;
  fixed_width_small:        ImageDetail;
  fixed_width_small_still?: ImageDetail;
  fixed_width_still?:       ImageDetail;
  downsized?:               ImageDetail;
  downsized_large?:         ImageDetail;
  downsized_medium?:        ImageDetail;
  downsized_small?:         ImageDetail;
  downsized_still?:         ImageDetail;
  original_still?:          ImageDetail;
  original_mp4?:            ImageDetail;
  preview?:                 ImageDetail;
  preview_gif?:             ImageDetail;
  preview_webp?:            ImageDetail;
  looping?:                 Looping;
  hd?:                      ImageDetail;
  "480w_still"?:            ImageDetail;
}

export interface ImageDetail {
  height:    string;
  width:     string;
  size?:     string;
  url:       string;
  mp4_size?: string;
  mp4?:      string;
  webp_size?:string;
  webp?:     string;
  frames?:   string;
  hash?:     string;
}

export interface Looping {
  mp4_size?: string;
  mp4?:      string;
}

export interface User {
  avatar_url:    string;
  banner_image:  string;
  banner_url:    string;
  profile_url:   string;
  username:      string;
  display_name:  string;
  description:   string;
  instagram_url: string;
  website_url:   string;
  is_verified:   boolean;
}

export interface Analytics {
  onload:  AnalyticsUrl;
  onclick: AnalyticsUrl;
  onsent:  AnalyticsUrl;
}

export interface AnalyticsUrl {
  url: string;
}

export interface Meta {
  status:      number;
  msg:         string;
  response_id: string;
}

export interface Pagination {
  total_count: number;
  count:       number;
  offset:      number;
}