import { DirectionsRenderer, DirectionsService } from "@react-google-maps/api";
import type { FC } from "react";
import { useDirectionMap } from "src/hooks/main";

/**
 * @package
 */
export const Direction: FC = () => {
  const { currentDirection, directionPosition, directionsCallback, origin } =
    useDirectionMap();

  return (
    <>
      {directionPosition && origin ? (
        <DirectionsService
          options={{
            origin: origin,
            destination: directionPosition,
            travelMode: "WALKING" as google.maps.TravelMode.WALKING,
            optimizeWaypoints: true,
          }}
          callback={directionsCallback}
        />
      ) : null}
      {currentDirection ? (
        <DirectionsRenderer
          options={{
            directions: currentDirection,
          }}
        />
      ) : null}
    </>
  );
};
