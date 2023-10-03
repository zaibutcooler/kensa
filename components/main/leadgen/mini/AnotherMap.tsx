// "use client"

// import React from "react"
// import GoogleMapReact from "google-map-react"

// const AnyReactComponent = ({ text }) => <div>{text}</div>

// export default function AnotherMap() {
//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627,
//     },
//     zoom: 11,
//   }
//   const apiKey = process.env.GOOGLE_MAPS_API_KEY as string
//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: "100%", width: "100%" }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: apiKey }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
//       </GoogleMapReact>
//     </div>
//   )
// }
