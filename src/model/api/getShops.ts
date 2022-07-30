import type { ShopApiRow } from "src/model/shop";

export type GetShopsApi = {
  request: {
    lat: number;
    lng: number;
    range: number;
    card: number;
    midnight: number;
  };
  response: {
    results: { shop: ShopApiRow[] };
  };
};
