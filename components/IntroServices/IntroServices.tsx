import styles from "./IntroServices.module.css";

const services = [
  {
    number: "01",
    title: "Exterior",
    text: "Gardens, fencing, paving, structures and practical improvements that make outside spaces work harder.",
  },
  {
    number: "02",
    title: "Interior",
    text: "Carpentry, fitting, repairs and finishing work designed around how your space is actually used.",
  },
  {
    number: "03",
    title: "Property Care",
    text: "Maintenance, repairs and ongoing support for homeowners, landlords and managed properties.",
  },
];

export default function IntroServices() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>WHAT WE DO</p>

          <h2>
            Built for the
            <span> whole property.</span>
          </h2>

          <p className={styles.lead}>
            Craftworkz brings practical problem-solving, skilled workmanship and
            considered finishing to projects inside and out.
          </p>
        </div>

        <div className={styles.services}>
          {services.map((service) => (
            <article className={styles.service} key={service.number}>
              <span className={styles.number}>{service.number}</span>

              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>

              <span className={styles.line} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
