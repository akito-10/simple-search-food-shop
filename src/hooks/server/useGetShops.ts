import { useGourmandSearch } from "src/api";
import { convertShops } from "src/lib/convertShops";

/**
 * @package
 */
export const useGetShops = () => {
  const getShopsResult = useGourmandSearch();

  if (getShopsResult.type === "FAILURE") {
    return undefined;
  }

  return convertShops(getShopsResult.data?.results.shop);
};
