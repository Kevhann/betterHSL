import React, { useState } from "react"
import "leaflet/dist/leaflet.css"
import { Map, Marker, Popup, TileLayer } from "react-leaflet"
import { connect } from "react-redux"
import { setBackgroundLocation } from "../reducers/backgroundMapReducer"

const BackgroundMap = ({ latlng, setLatlng }) => {
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
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  )
}

const mapStateToProps = state => {
  return {
    latlng: state.backgroundMapReducer
  }
}

const mapDispatchToProps = {
  setLatlng: setBackgroundLocation
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackgroundMap)
