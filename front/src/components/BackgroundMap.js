import React, { useState, useEffect } from "react"
import "leaflet/dist/leaflet.css"
import { Map, Marker, Popup, TileLayer, Polyline } from "react-leaflet"
import { connect } from "react-redux"
import { setBackgroundLocation } from "../reducers/backgroundMapReducer"
import { setActiveTrail } from "../reducers/trailReducer"
import polyUtil from "polyline-encoded"

const BackgroundMap = ({
  latlng,
  setLatlng,
  routes,
  activeTrail,
  mapClass,
}) => {
  const [trails, setTrails] = useState([])
  const [center, setCenter] = useState([60.16646629936403, 24.94205474853516])

  useEffect(() => {
    let alltrails = []
    //tähän vielä joku filteröivä ehto, active trail rendataan nyt kahdesti
    if (routes.length > 0) {
      alltrails = routes.reduce((total, current, index) => {
        if (index !== activeTrail) {
          return [
            ...total,
            current.legs.map((leg) => {
              const decodedTrail = polyUtil.decode(leg.legGeometry.points)
              return { color: "gray", decodedTrail }
            }),
          ]
        }
        return total
      }, [])
      console.log("activeTrail:", activeTrail)
      console.log("routes:", routes)

      const placeholder = routes[activeTrail].legs.map((leg) => {
        let color = "green"
        if (leg.mode === "WALK") {
          color = "lightblue"
        } else if (leg.mode === "SUBWAY") {
          color = "orange"
        } else if (leg.mode === "BUS") {
          color = "blue"
        } else if (leg.mode === "RAIL") {
          color = "red"
        }
        const decodedTrail = polyUtil.decode(leg.legGeometry.points)
        return { color, decodedTrail, active: true }
      })
      alltrails.push(placeholder)
    }
    console.log("alltrains:", alltrails)
    setTrails(alltrails)
  }, [routes, activeTrail, mapClass])
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
        onclick={(e) => {
          console.log("lat, lng", [e.latlng.lat, e.latlng.lng])
          // setCenter([e.latlng.lat, e.latlng.lng])
        }}
      >
        {trails.map((trail) =>
          trail.map((leg) => (
            <Polyline color={leg.color} positions={leg.decodedTrail} />
          ))
        )}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    latlng: state.backgroundMapReducer,
    routes: state.routeReducer,
    activeTrail: state.trailReducer,
    mapClass: state.mapClassReducer,
  }
}

const mapDispatchToProps = {
  setLatlng: setBackgroundLocation,
}

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundMap)
