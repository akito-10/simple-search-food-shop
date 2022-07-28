import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { GetShopsApi } from "src/model/api/getShops";
import type { Position } from "src/model/client/position";
import type { RootState } from "src/state";
import type { ResponseResultType } from "src/type/response_result.type";
import useSWR from "swr";

/**
 * @package
 */
export const useGourmandSearch = (): ResponseResultType<
  GetShopsApi["response"]
> => {
  const searchCondition = useSelector(
    (state: RootState) => state.searchCondition
  );
  const [position, setPosition] = useState<Position>();

  const currSearchCondition = `&range=${searchCondition.range}&card=${searchCondition.card}&midnight=${searchCondition.midnight}`;

  const { data, error } = useSWR<GetShopsApi["response"]>(() =>
    position
      ? `/gourmet/v1?key=${process.env.NEXT_PUBLIC_HOTPEPPER_API}&format=json&count=10${currSearchCondition}&lat=${position.lat}&lng=${position.lng}`
      : null
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setPosition({
        lat: coords.latitude,
        lng: coords.longitude,
      });
    });
  }, []);

  if (error) {
    return {
      type: "FAILURE",
      error,
    };
  }

  return {
    type: "SUCCESS",
    data,
  };
};
