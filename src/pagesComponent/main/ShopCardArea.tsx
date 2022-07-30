/* eslint-disable import/no-default-export */
import type { FC } from "react";
import Slider from "react-slick";
import { useGetShops } from "src/hooks/server";
import { ShopCard } from "src/pagesComponent/main/ShopCard";

const SLIDER_SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

/**
 * @package
 */
const ShopCardArea: FC = () => {
  const shops = useGetShops();

  return shops ? (
    <Slider className="w-[370px]" {...SLIDER_SETTINGS}>
      {shops.map((shop) => (
        <ShopCard
          key={shop.id}
          card={shop.card}
          description={shop.catch}
          midnight={shop.midnight}
          name={shop.name}
          openTime={shop.open}
          src={shop.photo.mobile.l}
          url={shop.urls.pc}
        />
      ))}
    </Slider>
  ) : null;
};

export default ShopCardArea;
