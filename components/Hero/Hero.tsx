"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./Hero.module.css";

const projects = [
  {
    id: "exterior",
    number: "01",
    category: "Exterior",
    type: "Exterior transformation",
    title: "The Garden Project",
    location: "Wakefield, West Yorkshire",
    before: "/images/hero/garden-before.png",
    after: "/images/hero/garden-after.png",
    beforeAlt: "Garden before Craftworkz transformation",
    afterAlt: "Completed Craftworkz garden transformation",
  },
  {
    id: "interior",
    number: "02",
    category: "Interior",
    type: "Interior improvement",
    title: "The Interior Project",
    location: "West Yorkshire",
    before: "/images/hero/interior-before.png",
    after: "/images/hero/interior-after.png",
    beforeAlt: "Interior before Craftworkz improvement",
    afterAlt: "Completed Craftworkz interior improvement",
  },
  {
    id: "masonry",
    number: "03",
    category: "Masonry",
    type: "Masonry transformation",
    title: "The Courtyard Project",
    location: "West Yorkshire",
    before: "/images/hero/brick-before.png",
    after: "/images/hero/brick-after.png",
    beforeAlt: "Masonry project before Craftworkz transformation",
    afterAlt: "Completed Craftworkz masonry transformation",
  },
];

export default function Hero() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [position, setPosition] = useState(50);

  const activeProject = projects[activeProjectIndex];

  function handleMove(clientX: number, element: HTMLDivElement) {
    const rect = element.getBoundingClientRect();
    const nextPosition = ((clientX - rect.left) / rect.width) * 100;

    setPosition(Math.min(100, Math.max(0, nextPosition)));
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (event.buttons !== 1) return;

    handleMove(event.clientX, event.currentTarget);
  }

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    event.currentTarget.setPointerCapture(event.pointerId);

    handleMove(event.clientX, event.currentTarget);
  }

  function handleProjectChange(index: number) {
    setActiveProjectIndex(index);
    setPosition(50);
  }

  return (
    <section className={styles.hero} id="work">
      <div className={styles.project}>
        <div
          className={styles.comparison}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
        >
          {/* AFTER IMAGE */}
          <Image
            key={`${activeProject.id}-after`}
            src={activeProject.after}
            alt={activeProject.afterAlt}
            fill
            priority
            sizes="100vw"
            className={styles.image}
            draggable={false}
          />

          {/* BEFORE IMAGE */}
          <div
            className={styles.beforeLayer}
            style={{
              clipPath: `inset(0 ${100 - position}% 0 0)`,
            }}
          >
            <Image
              key={`${activeProject.id}-before`}
              src={activeProject.before}
              alt={activeProject.beforeAlt}
              fill
              priority
              sizes="100vw"
              className={styles.image}
              draggable={false}
            />
          </div>

          {/* SLIDER */}
          <div className={styles.divider} style={{ left: `${position}%` }}>
            <div className={styles.handle}>
              <span>←</span>
              <span>→</span>
            </div>
          </div>

          {/* BEFORE / AFTER LABELS */}
          <span className={`${styles.label} ${styles.beforeLabel}`}>
            Before
          </span>

          <span className={`${styles.label} ${styles.afterLabel}`}>After</span>

          {/* PROJECT INFORMATION */}
          <div className={styles.projectInfo}>
            <span className={styles.projectNumber}>{activeProject.number}</span>

            <div>
              <p className={styles.projectType}>{activeProject.type}</p>

              <h2>{activeProject.title}</h2>

              <p className={styles.location}>{activeProject.location}</p>
            </div>
          </div>

          <div className={styles.dragHint}>Drag to compare</div>
        </div>

        {/* PROJECT SELECTOR */}
        <div className={styles.categories}>
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              className={
                activeProjectIndex === index ? styles.activeCategory : ""
              }
              onClick={() => handleProjectChange(index)}
            >
              <span>{project.number}</span>
              {project.category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
