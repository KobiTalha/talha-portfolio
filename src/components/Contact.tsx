"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/data/profile";
import SectionHeading from "./SectionHeading";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error?.message ?? "Something went wrong.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="section contact">
      <SectionHeading index="06" title="Contact" />
      <h2 className="contact-big">
        Let&rsquo;s build something
        <br />
        worth shipping.
      </h2>
      <p className="body-text contact-lede">
        Open to internships, collaborations and interesting projects. The fastest way to
        reach me is email — or send a message right here.
      </p>
      <div className="contact-grid">
        <div className="contact-lines">
          <a className="contact-line" href={`mailto:${profile.email}`}>
            <span>Email</span>
            <strong>{profile.email}</strong>
          </a>
          {profile.socials.map((social) => (
            <a
              key={social.label}
              className="contact-line"
              href={social.href}
              target="_blank"
              rel="noreferrer"
            >
              <span>{social.label}</span>
              <strong>{social.handle}</strong>
            </a>
          ))}
          <p className="contact-line">
            <span>Location</span>
            <strong>Basundhara R/A, Dhaka, Bangladesh</strong>
          </p>
        </div>
        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <label>
            <span>Name</span>
            <input name="name" type="text" placeholder="Your name" required />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" placeholder="you@example.com" required />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows={5} placeholder="What are we building?" required />
          </label>
          <button type="submit" className="send" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message →"}
          </button>
          <p className="form-note" role="status" aria-live="polite">
            {status === "sent" &&
              "Message received — thanks! I usually reply within a day."}
            {status === "error" && (error || "Could not send. Please email me directly.")}
          </p>
        </form>
      </div>
    </section>
  );
}
