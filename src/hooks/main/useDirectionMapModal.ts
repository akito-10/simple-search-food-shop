import { useLoadScript } from "@react-google-maps/api";
import { useDispatch } from "react-redux";
import { clearDirectionPosition } from "src/state/directionPosition";

const LIBRARIES: ["places"] = ["places"];
/**
 * @package
 */
export const useDirectionMapModal = (onClose: () => void) => {
  const dispatch = useDispatch();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: LIBRARIES,
  });
  const handleClose = () => {
    onClose();
    dispatch(clearDirectionPosition());
  };

  return {
    handleClose,
    isLoaded,
    loadError,
  };
};
