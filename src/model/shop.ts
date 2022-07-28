import type { SnakeToCamel } from "src/type/snake_to_camel.type";

export type ShopApiRow = {
  id: string;
  lat: number;
  lng: number;
  address: string;
  catch: string;
  coupon_urls: {
    pc: string;
    mobile: string;
  };
  photo: {
    pc: {
      l: string;
      m: string;
      s: string;
    };
    mobile: {
      l: string;
      s: string;
    };
  };
  name: string;
  card: string;
  open: string;
  midnight: string;
};

export type ShopRow = SnakeToCamel<ShopApiRow>;
