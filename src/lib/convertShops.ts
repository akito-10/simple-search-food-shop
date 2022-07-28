import type { ShopApiRow, ShopRow } from "src/model/shop";

export const convertShops = (shops: ShopApiRow[] | undefined): ShopRow[] => {
  if (!shops) return [];

  return shops.map((shop) => ({
    id: shop.id,
    lat: shop.lat,
    lng: shop.lng,
    address: shop.address,
    catch: shop.catch,
    couponUrls: shop.coupon_urls,
    photo: shop.photo,
    name: shop.name,
    card: shop.card,
    open: shop.open,
    midnight: shop.midnight,
  }));
};
