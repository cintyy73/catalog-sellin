import { memo } from "react";
import { GoogleMap as Map, useJsApiLoader } from "@react-google-maps/api";

import { Skeleton } from "@chakra-ui/react";

import { Marker } from "./Marker";

interface LatLong {
  lat: number;
  lng: number;
}
interface Props {
  center?: LatLong;
  markers?: {
    id: number;
    bussinessName: string;
    fantasyName: string;
    lat: number;
    lng: number;
  }[];
  styles?: { width: string; height: string };
  zoom?: number;
}

const containerStyle = {
  width: "800px",
  height: "15rem",
  borderRadius: "12px",
};

const center = { lat: -34.5917803, lng: -58.43716370000001 };

export const GoogleMap = memo(function GoogleMap({
  markers,
  styles,
  zoom = 8,
}: Props) {
  const mapContainerStyle = styles || containerStyle;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBhRHxxf25ibvleBZsIuDPDycfn9lCLxZ0",
  });

  return (
    <Skeleton isLoaded={isLoaded} h="250px" w="full">
      {isLoaded && (
        <Map mapContainerStyle={mapContainerStyle} center={center} zoom={zoom}>
          {!!markers?.length &&
            markers.map((marker, i) => (
              <Marker key={`marker-${marker.id}-${i}`} entity={marker} />
            ))}
        </Map>
      )}
    </Skeleton>
  );
});
