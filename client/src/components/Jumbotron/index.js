import React from "react";
function Jumbotron({ children }) {
  return (
    <div
      style={{
        clear: "both", marginTop: 30,
        paddingTop: 120,
        paddingBottom: 120,
        textAlign: "center",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="jumbotron border">
            <h1>Google Books Search</h1>
            <p>Serach for and Save Books of Interest</p>
    </div>
  )
}
export default Jumbotron;