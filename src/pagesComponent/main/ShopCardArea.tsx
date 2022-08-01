/* eslint-disable import/no-default-export */
import { useDisclosure } from "@mantine/hooks";
import type { FC } from "react";
import Slider from "react-slick";
import { useGetShops } from "src/hooks/server";
import { DirectionMapModal } from "src/pagesComponent/main/DirectionMapModal";
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
  const [isMapModalOpen, handleMapModal] = useDisclosure(false);

  return (
    <>
      {shops ? (
        <Slider className="w-[370px]" {...SLIDER_SETTINGS}>
          {shops.map((shop) => (
            <ShopCard
              key={shop.id}
              description={shop.catch}
              onModalOpen={handleMapModal.open}
              src={shop.photo.mobile.l}
              url={shop.urls.pc}
              {...shop}
            />
          ))}
        </Slider>
      ) : null}
      <DirectionMapModal
        isMapModalOpen={isMapModalOpen}
        onClose={handleMapModal.close}
      />
    </>
  );
};

export default ShopCardArea;
