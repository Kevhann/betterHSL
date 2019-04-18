import React from "react"
import { Image } from "semantic-ui-react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { Map, Marker, Popup, TileLayer } from "react-leaflet"

const BackgroundMap = () => {
  const position = [60.192059, 24.945831]
  return (
    <Map
      center={[60.192059, 24.945831]}
      zoom={12}
      maxZoom={20}
      attributionControl={true}
      zoomControl={true}
      doubleClickZoom={true}
      scrollWheelZoom={true}
      dragging={true}
      animate={true}
      easeLinearity={0.35}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  )

  /*return (

    <Image src="https://cdn.digitransit.fi/map/v1/hsl-map/16/37313/18958@2x.png" />
  )*/
}

export default BackgroundMap
