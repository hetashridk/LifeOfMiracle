"use client";

import { motion } from "framer-motion";

const contrasts = [
  {
    from: "Reacting",
    to: "Responding",
    color: "#ea7554",
    bg: "rgba(234,117,84,0.08)",
  },
  {
    from: "Overthinking",
    to: "Clarity",
    color: "#ea7554",
    bg: "rgba(234,117,84,0.08)",
  },
  {
    from: "Pressure",
    to: "Presence",
    color: "#ea7554",
    bg: "rgba(234,117,84,0.06)",
  },
];

const notThis = ["Not therapy.", "Not motivation."];

const stats = [
  { num: "5", label: "1:1 done",                color: "#ea7554" },
  { num: "3", label: "Corporate workshops done", color: "#ea7554" },
  { num: "3", label: "College workshops done",   color: "#ea7554" },
  { num: "2", label: "Mental Fitness Workshops",   color: "#ea7554" },
];

export function MentalFitness() {
  return (
    <section
      id="mental-fitness"
      style={{
        padding: "var(--spacing-section) 5%",
        backgroundColor: "#fff",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* ── Top two-column layout ── */}
        <div
          className="flex-responsive"
          style={{
            display: "flex",
            gap: "5rem",
            alignItems: "flex-start",
            marginBottom: "4rem",
          }}
        >
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ flex: 1 }}
          >
            {/* <span
              style={{
                display: "inline-block",
                backgroundColor: "#ea7554",
                color: "#fff",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                padding: "0.4rem 1rem",
                borderRadius: "var(--radius-pill)",
                marginBottom: "1.5rem",
              }}
            >
              Mental Fitness
            </span> */}

            <h2
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
                fontFamily: "var(--font-karla)",
                color: "var(--color-primary)",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
              }}
            >
              What Is Mental Fitness?
            </h2>

            <p
              style={{
                fontSize: "1.15rem",
                color: "var(--color-text-primary)",
                opacity: 0.85,
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              Mental fitness is your ability to regulate your thoughts,
              emotions, and reactions in real time.
            </p>

            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
              }}
            >
              Most people try to fix their life from the outside. But everything
              changes when you train the mind that experiences it.
            </p>

            {/* Not this — stacked vertically */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
                marginBottom: "0.6rem"
              }}
            >
              {notThis.map((label) => (
                <span
                  key={label}
                  style={{
                    display: "inline-block",
                    alignSelf: "flex-start",
                    // padding: "0.5rem 1.25rem",
                    // border: '1.5px solid rgba(0,0,0,0.15)',
                    // borderRadius: 'var(--radius-pill)',
                    fontSize: "1rem",
                    // fontWeight: 700,
                    color: "var(--color-primary)",
                    fontFamily: "var(--font-karla)",
                    textDecoration: "line-through",
                    textDecorationColor: "var(--color-accent-coral)",
                  }}
                >
                  {label}
                </span>
              ))}
            </div>

            <p
              style={{
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "var(--color-primary)",
                fontFamily: "var(--font-karla)",
              }}
            >
              This is training your mind to work for you.
            </p>
          </motion.div>

          {/* Right column: contrast cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginTop: "80px",
            }}
          >
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--color-text-secondary)",
                marginBottom: "0.5rem",
              }}
            >
              It's the difference between
            </p>

            {contrasts.map(({ from, to, color, bg }, i) => (
              <motion.div
                key={from}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                style={{
                  backgroundColor: bg,
                  borderRadius: "var(--radius-md)",
                  padding: "1.25rem 1.5rem",
                  borderLeft: `4px solid ${color}`,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontSize: "1rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  From <span style={{ fontWeight: 700, color }}>{from}</span> to{" "}
                  <span
                    style={{ fontWeight: 700, color: "var(--color-primary)" }}
                  >
                    {to}
                  </span>
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Stat cards ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                backgroundColor: "#0d5468",
                borderRadius: "var(--radius-md)",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.62rem",
                  fontWeight: 900,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                Fact 0{i + 1}
              </span>
              <div
                style={{
                  fontSize: "3.5rem",
                  fontWeight: 900,
                  color: s.color,
                  lineHeight: 1,
                }}
              >
                {s.num}
              </div>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.5,
                }}
              >
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
