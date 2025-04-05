// src/pages/MapPage.jsx
import { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY;

export default function MapPage() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      center: [80.0275, 23.1776],
      zoom: 10,
    });

    const marker = new mapboxgl.Marker({ color: "#008000" });
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      zoom: 13,
      types: "address,poi,place,locality,neighborhood",
      placeholder: "Enter place here",
    });
    map.addControl(geocoder, "top-left");

    map.on("load", async () => {
      const icons = {
        default: "https://static.vecteezy.com/system/resources/previews/017/177/954/non_2x/round-medical-cross-symbol-on-transparent-background-free-png.png",
        clinic: "https://cdn-icons-png.flaticon.com/512/8090/8090204.png",
        medicalstore: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png",
        hosp: "https://static.vecteezy.com/system/resources/previews/024/701/003/non_2x/illustration-hospital-building-and-ambulance-free-png.png",
      };

      await Promise.all(Object.entries(icons).map(([key, url]) =>
        new Promise((resolve, reject) => {
          map.loadImage(url, (error, image) => {
            if (error) reject(error);
            else {
              if (!map.hasImage(key)) map.addImage(key, image);
              resolve();
            }
          });
        })
      ));

      map.addSource("tilequery", {
        type: "geojson",
        data: { type: "FeatureCollection", features: [] },
      });

      map.addLayer({
        id: "tilequery-points",
        type: "symbol",
        source: "tilequery",
        layout: {
          "icon-image": [
            "case",
            ["==", ["get", "STORE_TYPE"], "hosp"], "hosp",
            ["==", ["get", "STORE_TYPE"], "clinic"], "clinic",
            ["==", ["get", "STORE_TYPE"], "medicalstore"], "medicalstore",
            "default"
          ],
          "icon-size": 0.05,
          "icon-allow-overlap": true,
        },
      });

      const popup = new mapboxgl.Popup();

      map.on("click", "tilequery-points", (event) => {
        const feature = event.features?.[0];
        if (!feature) return;

        const {
          DOC_NAME = "Unknown",
          CONTACT_NUMBER = "N/A",
          EMAIL = "N/A",
          MED_TYPE = "Unknown",
          EXP = "Unknown",
          SPECIALIST = "Unknown",
        } = feature.properties;

        const content = `
          <h3> Dr. ${DOC_NAME}</h3>
          <h4>${MED_TYPE}</h4>
          <p>${EXP}+ yr</p>
          <p>${SPECIALIST}</p>
          <p>${CONTACT_NUMBER}</p>
          <p>${EMAIL}</p>
        `;

        popup.setLngLat(feature.geometry.coordinates).setHTML(content).addTo(map);
      });

      map.on("mouseenter", "tilequery-points", () => map.getCanvas().style.cursor = "pointer");
      map.on("mouseleave", "tilequery-points", () => map.getCanvas().style.cursor = "");

      const fetchNearbyStores = async (lon, lat) => {
        const tileset = "sayan2003.c2iwdgfg";
        const radius = (parseFloat(document.querySelector(".circular-input")?.value || "2")) * 1000;
        const limit = 50;

        try {
          const res = await fetch(
            `https://api.mapbox.com/v4/${tileset}/tilequery/${lon},${lat}.json?radius=${radius}&limit=${limit}&access_token=${mapboxgl.accessToken}&nocache=${Date.now()}`
          );
          const json = await res.json();
          if (json?.features?.length > 0) {
            map.getSource("tilequery").setData(json);
          } else {
            console.warn("No nearby stores found.");
          }
        } catch (error) {
          console.error("Tilequery error:", error);
        }
      };

      document.getElementById("locationBtn").onclick = () => {
        navigator.geolocation.getCurrentPosition(
          ({ coords: { latitude, longitude } }) => {
            map.flyTo({ center: [longitude, latitude], zoom: 14 });
            marker.setLngLat([longitude, latitude]).addTo(map);
            fetchNearbyStores(longitude, latitude);
          },
          (err) => alert("Failed to get location")
        );
      };
    });
  }, []);

  return (
    <>
      <div id="map" style={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
      }}></div>

      <style>{`
        html, body, #root {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
      `}</style>

      <div className="currLoc" style={{
        position: "absolute",
        bottom: 40,
        right: 10,
        background: "white",
        padding: "1px",
        borderRadius: "5px"
      }}>
        <button id="locationBtn" style={{
          background: "#008000",
          color: "white",
          border: "none",
          padding: "5px 10px",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          📍 Get My Location
        </button>
      </div>

      <div className="rad" style={{
        position: "absolute",
        bottom: 50,
        left: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px"
      }}>
        <div className="circular-container" style={{
          position: "relative",
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          border: "3px solid #008000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
          boxShadow: "2px 2px 10px rgba(0,0,0,0.2)"
        }}>
          <input type="number" defaultValue="2" min="1" className="circular-input" style={{
            width: "60%",
            textAlign: "center",
            fontSize: "18px",
            border: "none",
            outline: "none",
            background: "transparent",
            fontWeight: "bold"
          }} />
          <span className="unit" style={{
            position: "absolute",
            bottom: "10px",
            fontSize: "14px",
            color: "#008000",
            fontWeight: "bold"
          }}>km</span>
        </div>
      </div>
    </>
  );
}
