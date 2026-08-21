import Image from "next/image";
import styles from "./AboutCraftworkz.module.css";

const trustPoints = [
  "Practical problem-solving",
  "Multi-skilled approach",
  "Care from start to finish",
];

export default function AboutCraftworkz() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <div className={styles.imagePanel}>
          <div className={styles.imageWrap}>
            <Image
              src="/images/about/about.png"
              alt="Craftworkz at work"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className={styles.image}
            />

            <div className={styles.imageOverlay} />

            <div className={styles.imageLabel}>
              <span>CRAFTWORKZ</span>
              <strong>Property • Craft • Care</strong>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <p className={styles.eyebrow}>ABOUT CRAFTWORKZ</p>

          <h2>
            Built by someone who cares
            <span> how the job finishes.</span>
          </h2>

          <div className={styles.copy}>
            <p>
              Craftworkz is built around practical thinking, skilled hands-on
              work and a genuine focus on getting the details right.
            </p>

            <p>
              From interior improvements and repairs to outdoor spaces and
              ongoing property care, the aim is simple: useful solutions,
              properly finished.
            </p>
          </div>

          <div className={styles.trustPoints}>
            {trustPoints.map((point, index) => (
              <div className={styles.trustPoint} key={point}>
                <span>0{index + 1}</span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
