"use client";

import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { ImagePlus, Send } from "lucide-react";
import styles from "./ProjectEnquiry.module.css";

type ProjectType = "Exterior" | "Interior" | "Property Care" | "";
type ProjectScope =
  | "Repair"
  | "Improvement"
  | "Full transformation"
  | "Not sure"
  | "";

export default function ProjectEnquiry() {
  const [projectType, setProjectType] = useState<ProjectType>("");
  const [projectScope, setProjectScope] = useState<ProjectScope>("");
  const [postcode, setPostcode] = useState("");
  const [details, setDetails] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState("");

  const summary = useMemo(
    () => ({
      type: projectType || "Not selected",
      scope: projectScope || "Not selected",
      postcode: postcode || "Not added",
      images: files.length,
    }),
    [projectType, projectScope, postcode, files],
  );

  function handleFiles(event: ChangeEvent<HTMLInputElement>) {
    const selectedFiles = Array.from(event.target.files ?? []);
    setFiles(selectedFiles);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!projectType || !projectScope || !name || !contact) {
      setStatus("Please complete the required project and contact details.");
      return;
    }

    setStatus(
      "Project enquiry ready to send — this concept form can be connected to email or a CRM.",
    );
  }

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>START A PROJECT</p>

          <h2>
            Tell us what
            <span> you&apos;re planning.</span>
          </h2>

          <p className={styles.lead}>
            A few quick details help us understand the job before we get in
            touch.
          </p>
        </div>

        <div className={styles.experience}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.step}>
              <div className={styles.stepHeading}>
                <span>01</span>
                <div>
                  <p>PROJECT TYPE</p>
                  <h3>What can we help with?</h3>
                </div>
              </div>

              <div className={styles.choiceGrid}>
                {["Exterior", "Interior", "Property Care"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={
                      projectType === option ? styles.activeChoice : ""
                    }
                    onClick={() => setProjectType(option as ProjectType)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepHeading}>
                <span>02</span>
                <div>
                  <p>SCOPE</p>
                  <h3>What sort of job is it?</h3>
                </div>
              </div>

              <div className={styles.choiceGrid}>
                {[
                  "Repair",
                  "Improvement",
                  "Full transformation",
                  "Not sure",
                ].map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={
                      projectScope === option ? styles.activeChoice : ""
                    }
                    onClick={() => setProjectScope(option as ProjectScope)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepHeading}>
                <span>03</span>
                <div>
                  <p>LOCATION</p>
                  <h3>Where is the project?</h3>
                </div>
              </div>

              <label className={styles.field}>
                <span>Postcode</span>
                <input
                  type="text"
                  value={postcode}
                  onChange={(event) =>
                    setPostcode(event.target.value.toUpperCase())
                  }
                  placeholder="e.g. WF1 1AA"
                />
              </label>
            </div>

            <div className={styles.step}>
              <div className={styles.stepHeading}>
                <span>04</span>
                <div>
                  <p>DETAILS</p>
                  <h3>Tell us about the space.</h3>
                </div>
              </div>

              <label className={styles.field}>
                <span>Project details</span>

                <textarea
                  value={details}
                  onChange={(event) => setDetails(event.target.value)}
                  placeholder="What needs doing? Any problems, ideas or priorities?"
                  rows={6}
                />
              </label>

              <label className={styles.upload}>
                <ImagePlus size={24} />

                <div>
                  <strong>Add project photos</strong>
                  <span>
                    Upload existing photos to help us understand the job.
                  </span>
                </div>

                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFiles}
                />
              </label>

              {files.length > 0 && (
                <p className={styles.fileCount}>
                  {files.length} image{files.length !== 1 ? "s" : ""} selected
                </p>
              )}
            </div>

            <div className={styles.step}>
              <div className={styles.stepHeading}>
                <span>05</span>
                <div>
                  <p>CONTACT</p>
                  <h3>How should we reach you?</h3>
                </div>
              </div>

              <div className={styles.contactGrid}>
                <label className={styles.field}>
                  <span>Name</span>
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Your name"
                  />
                </label>

                <label className={styles.field}>
                  <span>Email or phone</span>
                  <input
                    type="text"
                    value={contact}
                    onChange={(event) => setContact(event.target.value)}
                    placeholder="How should we contact you?"
                  />
                </label>
              </div>
            </div>

            <button className={styles.submitButton} type="submit">
              Send project
              <Send size={19} />
            </button>

            {status && <p className={styles.status}>{status}</p>}
          </form>

          <aside className={styles.summary}>
            <p className={styles.summaryEyebrow}>YOUR PROJECT</p>

            <h3>Enquiry summary</h3>

            <div className={styles.summaryList}>
              <div>
                <span>Project</span>
                <strong>{summary.type}</strong>
              </div>

              <div>
                <span>Scope</span>
                <strong>{summary.scope}</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>{summary.postcode}</strong>
              </div>

              <div>
                <span>Photos</span>
                <strong>{summary.images}</strong>
              </div>
            </div>

            <p className={styles.summaryNote}>
              Your selections update here as you build your enquiry.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
