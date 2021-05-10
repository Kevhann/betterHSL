import * as React from 'react';
import 'leaflet/dist/leaflet.css';
import { Map, TileLayer, Polyline } from 'react-leaflet';
import { connect, ConnectedProps } from 'react-redux';

import polyUtil from 'polyline-encoded';
import { RootState } from '../store';
import { setBackgroundLocation } from '../reducers/backgroundMapReducer';
import { colorMap, Colors, LatLong, Trail } from '../types/route';

type Props = ConnectedProps<typeof connector>;

const BackgroundMap = ({ routes, activeTrail, mapClass }: Props) => {
  const [trails, setTrails] = React.useState<Trail[]>([]);
  const [center] = React.useState<LatLong>([60.16646629936403, 24.94205474853516]);

  React.useEffect(() => {
    let alltrails: Trail[] = [];
    if (routes.length > 0) {
      alltrails = routes.reduce((total: Trail[], current, index) => {
        if (index !== activeTrail) {
          return [
            ...total,
            current.legs.map(leg => {
              const decodedTrail: LatLong[] = polyUtil.decode(leg.legGeometry.points);
              return { color: Colors.Gray, decodedTrail, active: false };
            })
          ];
        }
        return total;
      }, []);

      const placeholder: Trail = routes[activeTrail].legs.map(leg => {
        const color = colorMap[leg.mode];
        const decodedTrail: LatLong[] = polyUtil.decode(leg.legGeometry.points);
        return { color, decodedTrail, active: true };
      });
      alltrails.push(placeholder);
    }
    setTrails(alltrails);
  }, [routes, activeTrail, mapClass]);
  return (
    <>
      <Map
        className={mapClass}
        center={center}
        zoom={13}
        maxZoom={19}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
        // bounds={latlng}
        boundsOptions={{ padding: [10, 10] }}
        onclick={(e: LeafletMouseEvent) => {
          console.log('lat, lng', [e.latlng.lat, e.latlng.lng]);
          // setCenter([e.latlng.lat, e.latlng.lng])
        }}
      >
        {trails.map(trail =>
          trail.map(leg => <Polyline color={leg.color} positions={leg.decodedTrail} />)
        )}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    latlng: state.backgroundMap,
    routes: state.route,
    activeTrail: state.trail,
    mapClass: state.mapClass
  };
};

const mapDispatchToProps = {
  setLatlng: setBackgroundLocation
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(BackgroundMap);
