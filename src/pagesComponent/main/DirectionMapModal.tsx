import { Modal } from "@mantine/core";
import { GoogleMap } from "@react-google-maps/api";
import type { FC } from "react";
import { useDirectionMapModal } from "src/hooks/main";
import { Direction } from "src/pagesComponent/main/DirectionMap";

const mapContainerStyle = {
  height: "60vh",
  width: "100%",
};

export const DirectionMapModal: FC<{
  isMapModalOpen: boolean;
  onClose: () => void;
}> = ({ isMapModalOpen, onClose }) => {
  const { handleClose, isLoaded, loadError } = useDirectionMapModal(onClose);

  if (loadError) return <div>Error</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Modal
      opened={isMapModalOpen}
      onClose={handleClose}
      centered
      closeOnClickOutside={false}
    >
      <GoogleMap id="map" mapContainerStyle={mapContainerStyle}>
        <Direction />
      </GoogleMap>
    </Modal>
  );
};
