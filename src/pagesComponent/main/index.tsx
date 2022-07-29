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

export const Main: FC = () => {
  const shops = useGetShops();

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      {shops ? (
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
      ) : null}
      <a href="http://webservice.recruit.co.jp/">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="http://webservice.recruit.co.jp/banner/hotpepper-s.gif"
          alt="ホットペッパー Webサービス"
          className="mt-8"
          width="135"
          height="17"
          title="ホットペッパー Webサービス"
        />
      </a>
    </div>
  );
};
