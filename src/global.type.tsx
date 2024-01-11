export type FRIENDS = {
  id: number;
  name: string;
  age: number;
};

export type RootStackParamList = {
  Search: undefined;
  Details: { id: string };
};

export type OPEN = {
  is_overnight: boolean;
  start: string;
  end: string;
  day: number;
};

export type OPENING_HOURS = {
  open: OPEN[]
  hours_type: string;
  is_open_now: boolean;
};

export type LOCATION = {
  address1: string;
  address2: string;
  address3: string;
  city: string;
  zip_code: string;
  country: string;
  state: string;
  display_address: string[];
};

type COORDINATES = {
  latitude: number;
  longitude: number;
};

export type CATEGORIES = {
  alias: string;
  title: string;
};

type MESSAGING = {
  url: string;
  use_case_text: string;
};

export type BUSINESSES = {
  id: string;
  alias: string;
  name: string;
  image_url: string;
  is_closed: false;
  url: string;
  review_count: number;
  categories: CATEGORIES[];
  rating: number;
  coordinates: COORDINATES;
  transactions: string[];
  price?: string;
  location: LOCATION;
  phone: string;
  display_phone: string;
  distance: number;
};

export type BUSINESS_ID = {
  id: string;
  alias: string;
  name: string;
  image_url: string;
  is_claimed: true;
  is_closed: false;
  url: string;
  phone: string;
  display_phone: string;
  review_count: number;
  categories: CATEGORIES[];
  rating: number;
  location: LOCATION;
  coordinates: COORDINATES;
  photos: string[];
  price?: string;
  hours: OPENING_HOURS[];
  transactions: string[];
  messaging: MESSAGING | null;
};
