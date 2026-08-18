"use client";

import { FormEvent, useState } from "react";
import { MapPin, Search } from "lucide-react";
import styles from "./CoverageMap.module.css";

type Area = {
  id: string;
  name: string;
  status: string;
  description: string;
  x: number;
  y: number;
};

const areas: Area[] = [
  {
    id: "leeds",
    name: "Leeds",
    status: "Regular coverage",
    description:
      "Property maintenance, interiors and exterior projects across Leeds and surrounding areas.",
    x: 50,
    y: 28,
  },
  {
    id: "wakefield",
    name: "Wakefield",
    status: "Primary service area",
    description:
      "Craftworkz is based around Wakefield, with full coverage across our core property services.",
    x: 53,
    y: 48,
  },
  {
    id: "huddersfield",
    name: "Huddersfield",
    status: "Project coverage",
    description:
      "Selected improvement, maintenance and exterior projects across Huddersfield.",
    x: 32,
    y: 56,
  },
  {
    id: "barnsley",
    name: "Barnsley",
    status: "Project coverage",
    description:
      "Exterior, maintenance and property improvement work available by project.",
    x: 52,
    y: 72,
  },
];

export default function CoverageMap() {
  const [activeArea, setActiveArea] = useState<Area>(
    areas.find((area) => area.id === "wakefield")!,
  );

  const [postcode, setPostcode] = useState("");
  const [postcodeMessage, setPostcodeMessage] = useState("");

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
              <svg
                viewBox="0 0 700 620"
                className={styles.mapSvg}
                aria-label="Craftworkz service coverage map"
              >
                <defs>
                  <radialGradient id="coverageGlow">
                    <stop
                      offset="0%"
                      stopColor="var(--eucalyptus)"
                      stopOpacity="0.35"
                    />
                    <stop
                      offset="100%"
                      stopColor="var(--eucalyptus)"
                      stopOpacity="0"
                    />
                  </radialGradient>
                </defs>

                {/* abstract region boundary */}
                <path
                  className={styles.region}
                  d="
                    M158 90
                    C220 45 315 42 376 77
                    C437 46 523 77 559 139
                    C620 187 619 264 585 312
                    C624 382 591 457 530 480
                    C496 550 405 571 343 534
                    C276 575 184 538 167 471
                    C91 443 67 358 106 300
                    C61 229 91 143 158 90
                    Z
                  "
                />

                {/* subtle internal lines */}
                <path
                  className={styles.route}
                  d="M175 165 C265 211 361 217 532 177"
                />

                <path
                  className={styles.route}
                  d="M133 324 C257 273 377 304 573 365"
                />

                <path
                  className={styles.route}
                  d="M273 103 C304 228 288 368 342 524"
                />

                <path
                  className={styles.route}
                  d="M472 101 C429 227 454 361 413 532"
                />

                {/* Wakefield coverage glow */}
                <circle
                  cx="371"
                  cy="296"
                  r="160"
                  fill="url(#coverageGlow)"
                  className={styles.coverageGlow}
                />

                {areas.map((area) => {
                  const cx = (area.x / 100) * 700;
                  const cy = (area.y / 100) * 620;
                  const active = activeArea.id === area.id;

                  return (
                    <g
                      key={area.id}
                      className={`${styles.markerGroup} ${
                        active ? styles.markerActive : ""
                      }`}
                      onMouseEnter={() => setActiveArea(area)}
                      onClick={() => setActiveArea(area)}
                      tabIndex={0}
                      role="button"
                      aria-label={`View coverage information for ${area.name}`}
                      onFocus={() => setActiveArea(area)}
                    >
                      <circle
                        cx={cx}
                        cy={cy}
                        r={active ? 28 : 21}
                        className={styles.markerOuter}
                      />

                      <circle
                        cx={cx}
                        cy={cy}
                        r="6"
                        className={styles.markerInner}
                      />

                      <text
                        x={cx + 22}
                        y={cy - 18}
                        className={styles.markerLabel}
                      >
                        {area.name}
                      </text>
                    </g>
                  );
                })}
              </svg>

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
                    onClick={() => setActiveArea(area)}
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
