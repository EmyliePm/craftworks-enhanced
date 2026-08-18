"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { MapPin, Search } from "lucide-react";
import * as maplibregl from "maplibre-gl";

import styles from "./CoverageMap.module.css";

maplibregl.setWorkerUrl(
  "https://unpkg.com/maplibre-gl@5.6.2/dist/maplibre-gl-csp-worker.js",
);

type Area = {
  id: string;
  name: string;
  status: string;
  description: string;
  coordinates: [number, number];
};

const areas: Area[] = [
  {
    id: "leeds",
    name: "Leeds",
    status: "Regular coverage",
    description:
      "Property maintenance, interiors and exterior projects across Leeds and surrounding areas.",
    coordinates: [-1.5491, 53.8008],
  },
  {
    id: "wakefield",
    name: "Wakefield",
    status: "Primary service area",
    description:
      "Craftworkz is based around Wakefield, with full coverage across our core property services.",
    coordinates: [-1.4991, 53.6833],
  },
  {
    id: "huddersfield",
    name: "Huddersfield",
    status: "Project coverage",
    description:
      "Selected improvement, maintenance and exterior projects across Huddersfield.",
    coordinates: [-1.785, 53.6458],
  },
  {
    id: "barnsley",
    name: "Barnsley",
    status: "Project coverage",
    description:
      "Exterior, maintenance and property improvement work available by project.",
    coordinates: [-1.479, 53.5526],
  },
];

export default function CoverageMap() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  const [activeArea, setActiveArea] = useState<Area>(
    areas.find((area) => area.id === "wakefield")!,
  );

  const [postcode, setPostcode] = useState("");
  const [postcodeMessage, setPostcodeMessage] = useState("");

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://tiles.openfreemap.org/styles/liberty",
      center: [-1.58, 53.68],
      zoom: 10,
    });

    mapRef.current = map;

    map.on("error", (event) => {
      console.error("MAP ERROR:", event.error);
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  function handleAreaSelect(area: Area) {
    setActiveArea(area);

    mapRef.current?.flyTo({
      center: area.coordinates,
      zoom: 12,
      duration: 1400,
      essential: true,
    });
  }

  function handlePostcode(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!postcode.trim()) {
      setPostcodeMessage("Enter a postcode to check your area.");
      return;
    }

    setPostcodeMessage(
      "Your area may be covered — send us your project details and we'll confirm.",
    );
  }

  return (
    <section className={styles.section} id="coverage">
      <div className={styles.inner}>
        <div className={styles.heading}>
          <div>
            <p className={styles.eyebrow}>WHERE WE WORK</p>

            <h2>
              Local roots.
              <span> Wider reach.</span>
            </h2>
          </div>

          <p className={styles.introText}>
            Based in West Yorkshire, Craftworkz works across Wakefield and
            surrounding areas on property improvements, maintenance and exterior
            projects.
          </p>
        </div>

        <div className={styles.experience}>
          <div className={styles.mapPanel}>
            <div className={styles.mapTop}>
              <span>WEST YORKSHIRE</span>

              <div className={styles.liveIndicator}>
                <span />
                Service coverage
              </div>
            </div>

            <div className={styles.map}>
              <div
                ref={mapContainer}
                className={styles.realMap}
                aria-label="Interactive Craftworkz service coverage map"
              />

              <div className={styles.areaCard}>
                <div className={styles.areaIcon}>
                  <MapPin size={22} />
                </div>

                <div>
                  <p className={styles.areaStatus}>{activeArea.status}</p>

                  <h3>{activeArea.name}</h3>

                  <p>{activeArea.description}</p>
                </div>
              </div>
            </div>
          </div>

          <aside className={styles.sidePanel}>
            <div className={styles.sideNumber}>03</div>

            <div className={styles.sideContent}>
              <p className={styles.sideEyebrow}>YOUR AREA</p>

              <h3>
                Not sure if we
                <span> cover you?</span>
              </h3>

              <p className={styles.sideText}>
                Enter your postcode for a quick coverage check. For larger
                projects, we may travel beyond our usual working area.
              </p>

              <form className={styles.postcodeForm} onSubmit={handlePostcode}>
                <label htmlFor="postcode">Check your postcode</label>

                <div className={styles.inputWrap}>
                  <input
                    id="postcode"
                    type="text"
                    value={postcode}
                    onChange={(event) =>
                      setPostcode(event.target.value.toUpperCase())
                    }
                    placeholder="e.g. WF1 1AA"
                  />

                  <button type="submit" aria-label="Check postcode">
                    <Search size={21} />
                  </button>
                </div>
              </form>

              {postcodeMessage && (
                <p className={styles.postcodeMessage}>{postcodeMessage}</p>
              )}

              <div className={styles.coverageList}>
                {areas.map((area) => (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() => handleAreaSelect(area)}
                    className={
                      activeArea.id === area.id ? styles.coverageActive : ""
                    }
                  >
                    <span>{area.name}</span>
                    <span>{area.status}</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
