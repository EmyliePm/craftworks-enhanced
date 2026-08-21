"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import styles from "./Reviews.module.css";

const reviews = [
  {
    name: "Sample customer",
    text: "Really pleased with the finish and attention to detail. Everything was explained clearly and the work was completed carefully.",
  },
  {
    name: "Sample customer",
    text: "A really practical approach from start to finish. The space looks much better and the whole job felt well thought through.",
  },
  {
    name: "Sample customer",
    text: "Reliable, tidy and easy to deal with. The finished work feels solid and properly considered.",
  },
];

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  function scrollReviews(direction: "left" | "right") {
    if (!trackRef.current) return;

    const amount = trackRef.current.clientWidth * 0.72;

    trackRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  }

  return (
    <section className={styles.section} id="reviews">
      <div className={styles.inner}>
        <div className={styles.heading}>
          <div>
            <p className={styles.eyebrow}>REVIEWS</p>

            <h2>
              Good work speaks
              <span> for itself.</span>
            </h2>
          </div>

          <p className={styles.intro}>
            This concept demonstrates how verified Google reviews could be
            integrated into the Craftworkz website once customer reviews are
            available.
          </p>
        </div>

        <div className={styles.layout}>
          <aside className={styles.summary}>
            <p className={styles.summaryLabel}>GOOGLE REVIEWS</p>

            <div className={styles.rating}>
              <strong>5.0</strong>

              <div className={styles.stars} aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={22} fill="currentColor" />
                ))}
              </div>
            </div>

            <p className={styles.summaryText}>
              Sample presentation for a future live Google Reviews integration.
            </p>

            <span className={styles.demoTag}>CONCEPT CONTENT</span>
          </aside>

          <div className={styles.reviewsArea}>
            <div className={styles.controls}>
              <button
                type="button"
                onClick={() => scrollReviews("left")}
                aria-label="Previous reviews"
              >
                <ArrowLeft size={22} />
              </button>

              <button
                type="button"
                onClick={() => scrollReviews("right")}
                aria-label="Next reviews"
              >
                <ArrowRight size={22} />
              </button>
            </div>

            <div className={styles.track} ref={trackRef}>
              {reviews.map((review, index) => (
                <article className={styles.reviewCard} key={index}>
                  <div className={styles.cardTop}>
                    <div className={styles.cardStars}>
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star key={starIndex} size={18} fill="currentColor" />
                      ))}
                    </div>

                    <span>Google</span>
                  </div>

                  <blockquote>“{review.text}”</blockquote>

                  <div className={styles.reviewer}>
                    <span>{review.name}</span>
                    <small>Example review</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
