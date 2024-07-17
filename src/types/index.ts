export interface Response<T> {
  data: T;
  links: Links;
  meta: ApiMeta;
}

export interface Links {
  first: string;
  last: null | string;
  prev: null | string;
  next: null | string;
}

export interface ApiMeta {
  current_page: number;
  from: number;
  path: string;
  per_page: number;
  to: number;
}

export interface Product {
  id: number;
  entity_id: number;
  entity_type_id: number;
  title: string;
  description: string;
  short_description: string;
  photo_path: string;
  product_type: string;
  networks: Network[];
  entity: Entity;
}

export interface ProductWithSdgs extends Product {
  sdgs: Sdg[];
}

export interface Entity {
  id: number;
  bussiness_name: string;
  fantasy_name: string;
  web_profile: string;
  facebook_profile: string;
  twitter_profile: string;
  instagram_profile: string;
  linkedin_profile: string;
  address: string;
  type_id: number;
  about_us: string;
  status: string;
  is_premium: number;
  is_donor: number;
  shares_contact_information: number;
  updated_at: Date;
  location_lat: number;
  location_lng: number;
  type: Type;
}

export interface Type {
  id: number;
  name: string;
  appliable_to: string;
}

export interface Network {
  id: number;
  name: string;
  short_description: string;
  logo_url: string;
  is_visible: boolean;
}

export interface Access {
  access_token: string;
  expires_in: number; // seconds
  token_type: string;
}

export interface DetailsProps {
  id: number;
  bussiness_name: string;
  fantasy_name: string;
  web_profile: string;
  facebook_profile: string;
  about_us: string;
  address: string;
  instagram_profile: string;
  is_donor: number;
  is_premium: number;
  linkedin_profile: string;
  location_lat: number;
  location_lng: number;
  shares_contact_information: number;
  status: string;
  twitter_profile: string;
}

export interface MarkupProps {
  html: string;
}
export interface Sdg {
  description: string;
  id: number;
  label: string;
  year: number[];
}

export interface Filter {
  category: string;
  title: string;
  description: string;
  product_types: string;
}

export interface Meta extends Filter {
  page: number;
}


export interface CatalogsFilters {
  product_types: string[];
  entity_types: EntityType[];
}
export interface EntityType {
  name: string;
  id: number;
}
