import { useState } from "react";
import { InfoWindow, Marker as MarkerNpm } from "@react-google-maps/api";

interface Props {
  entity: {
    id: number;
    bussinessName: string;
    fantasyName: string;
    lat: number;
    lng: number;
  };
  onlySelect?: string;
}

export const Marker = ({ entity }: Props) => {
  const [open, setOpen] = useState(false);

  const onToggleOpen = () => setOpen(!open);
  return entity ? (
    <MarkerNpm
      position={{
        lat: Number(entity?.lat),
        lng: Number(entity?.lng),
      }}
      title={entity?.fantasyName}
      onClick={onToggleOpen}
    >
      {open && (
        <InfoWindow onCloseClick={onToggleOpen}>
          <div id="content">
            <div id="siteNotice" />
            <h1
              id="firstHeading"
              className="firstHeading"
              style={{ fontSize: "1.2rem" }}
            >
              {entity.fantasyName}
            </h1>

            <div id="bodyContent">
              <p>{entity.bussinessName}</p>
            </div>
          </div>
        </InfoWindow>
      )}
    </MarkerNpm>
  ) : (
    <></>
  );
};
