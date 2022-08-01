import Image from "next/image";
import type { FC } from "react";
import { Button } from "src/component/Button";
import { useShopCard } from "src/hooks/main";
import { ShopTypeList } from "src/pagesComponent/main/ShopTypeList";
import { ExternalLink, Map2 } from "tabler-icons-react";

/**
 * @package
 */
export const ShopCard: FC<{
  card: string;
  description: string;
  lat: number;
  lng: number;
  midnight: string;
  name: string;
  open: string;
  onModalOpen: () => void;
  src: string;
  url: string;
}> = ({
  card,
  description,
  lat,
  lng,
  midnight,
  name,
  onModalOpen,
  open,
  src,
  url,
}) => {
  const { handleClickGoToButton } = useShopCard({ lat, lng }, onModalOpen);

  return (
    <div className="mx-auto w-80 rounded-lg border p-4">
      <Image
        className="object-cover"
        alt="お店画像"
        src={src}
        width={300}
        height={200}
      />
      <h2 className="my-2 text-xl">
        <a
          className="flex cursor-pointer items-center gap-2 text-gray-800 hover:opacity-70"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="max-w-[250px]">{name}</span>
          <ExternalLink size={20} />
        </a>
      </h2>
      <p className="mb-2 max-h-14 overflow-hidden text-sm">{open}</p>
      <p className="mb-2 break-words text-sm text-gray-400">{description}</p>
      <ShopTypeList card={card} midnight={midnight} />
      <Button
        className="mx-auto mt-4"
        leftIcon={<Map2 />}
        onClick={handleClickGoToButton}
      >
        さっそく向かう
      </Button>
    </div>
  );
};
