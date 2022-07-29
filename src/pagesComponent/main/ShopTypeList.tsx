import { Tooltip } from "@mantine/core";
import type { FC } from "react";
import { CreditCard, CreditCardOff, Moon, MoonOff } from "tabler-icons-react";

/**
 * @package
 */
export const ShopTypeList: FC<{
  card: string;
  midnight: string;
}> = ({ card, midnight }) => {
  const isCard = card === "利用可";
  const isMidnight = midnight === "営業している";

  return (
    <div className="flex gap-2">
      {isCard ? (
        <Tooltip label="カード利用可">
          <span>
            <CreditCard />
          </span>
        </Tooltip>
      ) : (
        <Tooltip label="カード利用不可">
          <span>
            <CreditCardOff />
          </span>
        </Tooltip>
      )}
      {isMidnight ? (
        <Tooltip label="深夜営業あり">
          <span>
            <Moon />
          </span>
        </Tooltip>
      ) : (
        <Tooltip label="深夜営業なし">
          <span>
            <MoonOff />
          </span>
        </Tooltip>
      )}
    </div>
  );
};
