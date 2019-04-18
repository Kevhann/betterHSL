import React, { useState, useEffect } from "react"
import "leaflet/dist/leaflet.css"
import { Map, Marker, Popup, TileLayer, Polyline } from "react-leaflet"
import { connect } from "react-redux"
import { setBackgroundLocation } from "../reducers/backgroundMapReducer"

const BackgroundMap = ({ latlng, setLatlng, routes }) => {
  const [trails, setTrails] = useState([])
  useEffect(() => {
    if (routes.length > 0) {
      const placeholder = routes[0].legs.map(leg => {
        let color = "red"
        if (leg.mode === "WALK") {
          color = "blue"
        } else if (leg.mode === "SUBWAY") {
          color = "orange"
        }
        return { color, from: leg.from, to: leg.to }
      })
      setTrails(placeholder)
    }
  }, [routes])

  return (
    <Map
      center={latlng}
      zoom={12}
      maxZoom={20}
      attributionControl={true}
      zoomControl={true}
      doubleClickZoom={true}
      scrollWheelZoom={true}
      dragging={true}
      animate={true}
      easeLinearity={0.35}
      onclick={e => {
        setLatlng([e.latlng.lat, e.latlng.lng])
      }}
    >
      {console.log("routes bgmapissa: ", routes)}
      {trails.map(trail => (
        <Polyline
          color={trail.color}
          positions={[
            [trail.from.lat, trail.from.lon],
            [trail.to.lat, trail.to.lon]
          ]}
        />
      ))}

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  )
}

const mapStateToProps = state => {
  return {
    latlng: state.backgroundMapReducer,
    routes: state.routeReducer
  }
}

const mapDispatchToProps = {
  setLatlng: setBackgroundLocation
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackgroundMap)
