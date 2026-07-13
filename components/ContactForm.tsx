"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { company, contactSection } from "@/lib/content";

type Fields = {
  name: string;
  email: string;
  organization: string;
  objective: string;
};

const objectives = contactSection.objectives;

const empty: Fields = {
  name: "",
  email: "",
  organization: "",
  objective: objectives[0],
};

export function ContactForm({ embedded = false }: { embedded?: boolean }) {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>(
    {}
  );
  const [sent, setSent] = useState(false);

  const update =
    (key: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFields((f) => ({ ...f, [key]: e.target.value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) next.name = "Please enter your full name.";
    if (!fields.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!fields.organization.trim()) {
      next.organization = "Please enter your organization name.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(
      `Procurement Inquiry: ${fields.objective} - ${fields.name}`
    );
    const body = encodeURIComponent(
      `Full Name: ${fields.name}\nEmail: ${fields.email}\nOrganization: ${fields.organization}\nInquiry Type: ${fields.objective}`
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center border border-teal/25 bg-teal-wash p-12 text-center">
        <CheckCircle2 className="h-14 w-14 text-teal" strokeWidth={1.5} />
        <h3 className="mt-5 font-display text-2xl font-semibold text-navy-deep">
          Thank you, {fields.name.split(" ")[0]}.
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-charcoal/70">
          Your inquiry is ready in your email client. If it didn&apos;t open
          automatically, reach us directly at{" "}
          <a
            href={`mailto:${company.email}`}
            className="font-semibold text-accent-text underline decoration-gold-dark underline-offset-2"
          >
            {company.email}
          </a>
          . We will respond promptly to your request.
        </p>
        <button
          type="button"
          onClick={() => {
            setFields(empty);
            setSent(false);
          }}
          className="mt-8 font-label text-xs font-semibold uppercase tracking-[0.14em] text-accent-text transition-colors hover:text-navy-deep"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={embedded ? "" : "border border-navy/10 bg-white p-8 shadow-card md:p-10"}
    >
      <Field
        label="Full Name"
        name="name"
        value={fields.name}
        onChange={update("name")}
        error={errors.name}
        placeholder="Your full name"
        required
      />

      <div className="mt-6">
        <Field
          label="Email Address"
          name="email"
          type="email"
          value={fields.email}
          onChange={update("email")}
          error={errors.email}
          placeholder="you@organization.com"
          required
        />
      </div>

      <div className="mt-6">
        <Field
          label="Organization"
          name="organization"
          value={fields.organization}
          onChange={update("organization")}
          error={errors.organization}
          placeholder="Your organization"
          required
        />
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <label
          htmlFor="objective"
          className="font-label text-xs font-semibold uppercase tracking-[0.12em] text-navy-deep"
        >
          Inquiry Type
        </label>
        <select
          id="objective"
          value={fields.objective}
          onChange={update("objective")}
          className="rounded-brand border border-navy/15 bg-mist/50 px-4 py-3 text-sm text-navy-deep outline-none transition-colors focus:border-accent-text focus:bg-white"
        >
          {objectives.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-brand bg-navy-deep px-8 py-4 font-label text-xs font-semibold uppercase tracking-[0.14em] text-parchment transition-all duration-300 hover:bg-navy"
      >
        {contactSection.submitLabel}
        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="font-label text-xs font-semibold uppercase tracking-[0.12em] text-navy-deep"
      >
        {label}
        {required && <span className="text-accent-text"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`rounded-brand border bg-mist/50 px-4 py-3 text-sm text-navy-deep outline-none transition-colors focus:bg-white ${
          error
            ? "border-red-500 focus:border-red-600"
            : "border-navy/15 focus:border-accent-text"
        }`}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}
