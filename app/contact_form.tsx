"use client";
import { useState } from "react";
import type { FormEvent } from "react";
import { contact, profile } from "./data";

// Opens WhatsApp with the message pre-filled. Nothing is sent to a server.
export default function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function send(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = `Hi ${profile.short}! I'm ${name || "someone"} and I found your portfolio.\n\n${message}`;
    window.open(
      `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  const field =
    "w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 focus:border-neutral-950 focus:outline-none";

  return (
    <form onSubmit={send} className="space-y-4 text-left">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-neutral-700">
          Your name
        </label>
        <input
          id="name"
          className={field}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-neutral-700">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          required
          className={field}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-neutral-950 px-6 py-3.5 font-bold text-white transition hover:opacity-80"
      >
        Send via WhatsApp
      </button>
    </form>
  );
}
