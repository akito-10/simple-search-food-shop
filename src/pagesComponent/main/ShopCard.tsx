import Image from "next/image";
import type { FC } from "react";
import { Button } from "src/component/Button";
import { ShopTypeList } from "src/pagesComponent/main/ShopTypeList";
import { ExternalLink, Map2 } from "tabler-icons-react";

/**
 * @package
 */
export const ShopCard: FC<{
  card: string;
  description: string;
  midnight: string;
  name: string;
  openTime: string;
  src: string;
  url: string;
}> = ({ card, description, midnight, name, openTime, src, url }) => (
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
    <p className="mb-2 max-h-14 overflow-hidden text-sm">{openTime}</p>
    <p className="mb-2 break-words text-sm text-gray-400">{description}</p>
    <ShopTypeList card={card} midnight={midnight} />
    <Button className="mx-auto mt-4" leftIcon={<Map2 />}>
      さっそく向かう
    </Button>
  </div>
);
