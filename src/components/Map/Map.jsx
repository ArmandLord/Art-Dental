import * as React from "react";
import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { ContainerMap, MarginMap, IconMarker } from "./Map.styled";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYXJtYW5kZXYiLCJhIjoiY2tvc3d4ZXBlMDU0eTJ3cnJ1dWprNWhkdSJ9.oUs25a-4yp7SPk33PaZqTA";

const Map = () => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 20.0286,
    longitude: -99.1223,
    zoom: 8,
    bearing: 0,
    pitch: 50,
  });

  return (
    <ContainerMap>
      <MarginMap>
        <span>
          <h2>
            Hubicación
            <IconMarker />
          </h2>
            <p>Independencia 6, El Llano 2da Secc, 42820 El Llano, Hgo.</p>
        </span>
        <span>
          <ReactMapGL
            {...viewport}
            width="80%"
            height="90%"
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
            mapStyle="mapbox://styles/mapbox/dark-v9"
            mapboxApiAccessToken={MAPBOX_TOKEN}
          >
            <Marker
              latitude={20.0286}
              longitude={-99.1223}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <img
                style={{ width: "24px" }}
                src="https://res.cloudinary.com/dy9tey0yi/image/upload/v1638471548/Art-Dental/ma_nex5zp.png"
                alt="marker"
              />
            </Marker>
          </ReactMapGL>
        </span>
      </MarginMap>
    </ContainerMap>
  );
};

export default Map;
