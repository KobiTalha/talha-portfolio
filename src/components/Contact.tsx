"use client";

import { type FormEvent } from "react";
import { profile } from "@/data/profile";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio contact from ${data.get("name") ?? ""}`);
    const body = encodeURIComponent(
      `${data.get("message") ?? ""}\n\n— ${data.get("name") ?? ""} (${data.get("email") ?? ""})`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
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
        <form className="contact-form" onSubmit={onSubmit}>
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
          <button type="submit" className="send">
            Send message →
          </button>
        </form>
      </div>
    </section>
  );
}
