"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [position, setPosition] = useState(50);

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

  return (
    <section className={styles.hero}>
      <div className={styles.project}>
        <div
          className={styles.comparison}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
        >
          {/* AFTER IMAGE */}
          <Image
            src="/images/hero/garden-after.png"
            alt="Completed Craftworkz garden transformation"
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
              src="/images/hero/garden-before.png"
              alt="Garden before transformation"
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
            <span className={styles.projectNumber}>01</span>

            <div>
              <p className={styles.projectType}>Exterior transformation</p>

              <h2>The Garden Project</h2>

              <p className={styles.location}>Wakefield, West Yorkshire</p>
            </div>
          </div>

          <div className={styles.dragHint}>Drag to compare</div>
        </div>

        {/* PROJECT SELECTOR */}
        <div className={styles.categories}>
          <button className={styles.activeCategory}>
            <span>01</span>
            Exterior
          </button>

          <button>
            <span>02</span>
            Interior
          </button>

          <button>
            <span>03</span>
            Masonry
          </button>
        </div>
      </div>
    </section>
  );
}
