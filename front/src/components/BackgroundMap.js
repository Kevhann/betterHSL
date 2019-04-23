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
  mapClass
}) => {
  const [trails, setTrails] = useState([])
  console.log("mapclass bgmapin alussa: ", mapClass)

  useEffect(() => {
    let alltrails = []
    //tähän vielä joku filteröivä ehto, active trail rendataan nyt kahdesti
    if (routes.length > 0) {
      alltrails = routes.map(route =>
        route.legs.map(leg => {
          const decodedTrail = polyUtil.decode(leg.legGeometry.points)
          return { color: "gray", decodedTrail }
        })
      )
      console.log("activeTrail:", activeTrail)
      console.log("routes:", routes)

      const placeholder = routes[activeTrail].legs.map(leg => {
        let color = "red"
        if (leg.mode === "WALK") {
          color = "green"
        } else if (leg.mode === "SUBWAY") {
          color = "orange"
        } else if (leg.mode === "BUS") {
          color = "blue"
        }
        const decodedTrail = polyUtil.decode(leg.legGeometry.points)
        return { color, decodedTrail, active: true }
      })
      alltrails.push(placeholder)
    }
    console.log("alltrails:", alltrails)
    setTrails(alltrails)
  }, [routes, activeTrail, mapClass])
  return (
    <>
      {console.log("latlng juuri ennen mappia: ", latlng)}
      {console.log("className ennen mappia: ", mapClass)}
      <Map
        className={mapClass}
        center={latlng}
        zoom={12}
        maxZoom={19}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
        onclick={e => {
          console.log("lat, lng", [e.latlng.lat, e.latlng.lng])
        }}
      >
        {console.log("routes bgmapissa: ", routes)}
        {console.log("trails ennen rendausta: ", trails)}
        {trails.map(trail =>
          trail.map(leg => (
            <Polyline color={leg.color} positions={leg.decodedTrail} />
          ))
        )}
        {console.log("trails rendauksen jälkeen: ", trails)}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    </>
  )
}

const mapStateToProps = state => {
  return {
    latlng: state.backgroundMapReducer,
    routes: state.routeReducer,
    activeTrail: state.trailReducer,
    mapClass: state.mapClassReducer
  }
}

const mapDispatchToProps = {
  setLatlng: setBackgroundLocation
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackgroundMap)
