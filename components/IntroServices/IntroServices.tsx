"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./IntroServices.module.css";

const services = [
  {
    id: "exterior",
    number: "01",
    title: "Exterior",
    kicker: "Outside spaces",
    text: "Gardens, fencing, paving, structures and practical improvements that make outside spaces work harder.",
    points: ["Fencing", "Paving", "Garden structures", "Outdoor repairs"],
    image: "/images/services/exterior.png",
    imageAlt: "Finished Craftworkz exterior garden project",
  },
  {
    id: "interior",
    number: "02",
    title: "Interior",
    kicker: "Inside the home",
    text: "Carpentry, fitting, repairs and finishing work designed around how your space is actually used.",
    points: ["Carpentry", "Fitting", "Repairs", "Finishing"],
    image: "/images/services/interior.png",
    imageAlt: "Craftworkz interior improvement project",
  },
  {
    id: "property",
    number: "03",
    title: "Property Care",
    kicker: "Ongoing support",
    text: "Maintenance, repairs and practical support for homeowners, landlords and managed properties.",
    points: [
      "Maintenance",
      "Emergency repairs",
      "Landlord support",
      "General upkeep",
    ],
    image: "/images/services/brick.png",
    imageAlt: "Craftworkz property maintenance work",
  },
];

export default function IntroServices() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className={styles.section} id="services">
      <div className={styles.inner}>
        <div className={styles.visualPanel}>
          <div className={styles.visualHeader}>
            <span>{activeService.number}</span>
            <span>{activeService.kicker}</span>
          </div>

          <div className={styles.imageArea}>
            <Image
              key={activeService.id}
              src={activeService.image}
              alt={activeService.imageAlt}
              fill
              sizes="(max-width: 1100px) 100vw, 45vw"
              className={styles.serviceImage}
            />

            <div className={styles.imageOverlay} />

            <div className={styles.imageTitle}>{activeService.title}</div>
          </div>

          <div className={styles.points}>
            {activeService.points.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>WHAT WE DO</p>

            <h2>
              Built for the
              <span> whole property.</span>
            </h2>

            <p className={styles.lead}>
              Explore the different areas Craftworkz can help with.
            </p>
          </div>

          <div className={styles.services}>
            {services.map((service) => {
              const active = activeService.id === service.id;

              return (
                <button
                  key={service.id}
                  type="button"
                  className={`${styles.service} ${
                    active ? styles.activeService : ""
                  }`}
                  onMouseEnter={() => setActiveService(service)}
                  onFocus={() => setActiveService(service)}
                  onClick={() => setActiveService(service)}
                >
                  <span className={styles.number}>{service.number}</span>

                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>

                  <span className={styles.line} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
