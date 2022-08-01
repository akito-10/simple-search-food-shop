import { useDispatch } from "react-redux";
import { setDirectionPosition } from "src/state/directionPosition";

/**
 * @package
 */
export const useShopCard = (
  position: { lat: number; lng: number },
  onModalOpen: () => void
) => {
  const dispatch = useDispatch();
  const handleClickGoToButton = () => {
    dispatch(setDirectionPosition(position));

    onModalOpen();
  };

  return { handleClickGoToButton };
};
