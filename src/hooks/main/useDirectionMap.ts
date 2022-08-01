import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { Position } from "src/model/client/position";
import type { RootState } from "src/state";

/**
 * @package
 */
export const useDirectionMap = () => {
  const [origin, setOrigin] = useState<Position | null>(null);
  const dispatch = useDispatch();
  const directionPosition = useSelector(
    (state: RootState) => state.directionPosition
  );
  const [currentDirection, setCurrentDirection] =
    useState<google.maps.DirectionsResult | null>(null);

  const directionsCallback = useCallback(
    (
      directionsResult: google.maps.DirectionsResult | null,
      directionStatus: google.maps.DirectionsStatus
    ) => {
      if (!directionsResult) return;

      if (!currentDirection) {
        if (directionStatus === "OK") {
          setCurrentDirection(directionsResult);
        }

        return;
      }

      if (
        directionStatus === "OK" &&
        directionsResult.geocoded_waypoints &&
        currentDirection.geocoded_waypoints &&
        directionsResult.geocoded_waypoints.length !==
          currentDirection.geocoded_waypoints.length
      ) {
        setCurrentDirection(directionsResult);
      }
    },
    [currentDirection]
  );

  useEffect(() => {
    const watch_id = navigator.geolocation.watchPosition(({ coords }) => {
      setOrigin({
        lat: coords.latitude,
        lng: coords.longitude,
      });
    });

    return () => {
      navigator.geolocation.clearWatch(watch_id);
    };
  }, [dispatch]);

  return {
    currentDirection,
    directionPosition,
    directionsCallback,
    origin,
  };
};
