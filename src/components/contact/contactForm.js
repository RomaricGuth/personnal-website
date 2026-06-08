"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Motion from "@/components/motion";
import { sendContactMessage } from "./actions";

const initialState = { status: "idle" };

const inputClass =
  "w-full rounded-sm border border-input bg-background px-4 py-2.5 text-base outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/20";

function Field({ id, label, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      {children}
      {error && <span className="text-sm text-destructive">{error}</span>}
    </div>
  );
}

export default function ContactForm() {
  const t = useTranslations("Contact");
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState
  );
  const errors = state.errors || {};
  const values = state.values || {};

  if (state.status === "success") {
    return (
      <Motion
        animation="fadeIn"
        className="flex flex-col items-center gap-4 rounded-lg border border-border bg-card px-6 py-12 text-center"
      >
        <CheckCircle2 className="size-12 text-primary" />
        <h2 className="text-2xl font-semibold">{t("successTitle")}</h2>
        <p className="max-w-md text-muted-foreground">{t("successBody")}</p>
        <Button variant="outline" onClick={() => window.location.reload()}>
          {t("sendAnother")}
        </Button>
      </Motion>
    );
  }

  return (
    <form
      action={formAction}
      className="flex flex-col gap-5 rounded-lg border border-border bg-card p-6 sm:p-8 shadow-sm"
    >
      {/* Honeypot — hidden from humans, catches bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="flex-1">
          <Field id="name" label={t("name")} error={errors.name && t(errors.name)}>
            <input
              id="name"
              name="name"
              type="text"
              defaultValue={values.name}
              placeholder={t("namePlaceholder")}
              aria-invalid={!!errors.name}
              className={inputClass}
            />
          </Field>
        </div>
        <div className="flex-1">
          <Field id="email" label={t("email")} error={errors.email && t(errors.email)}>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={values.email}
              placeholder={t("emailPlaceholder")}
              aria-invalid={!!errors.email}
              className={inputClass}
            />
          </Field>
        </div>
      </div>

      <Field id="subject" label={t("subject")}>
        <input
          id="subject"
          name="subject"
          type="text"
          defaultValue={values.subject}
          placeholder={t("subjectPlaceholder")}
          className={inputClass}
        />
      </Field>

      <Field
        id="message"
        label={t("message")}
        error={errors.message && t(errors.message)}
      >
        <textarea
          id="message"
          name="message"
          rows={6}
          defaultValue={values.message}
          placeholder={t("messagePlaceholder")}
          aria-invalid={!!errors.message}
          className={`${inputClass} resize-y`}
        />
      </Field>

      {errors.form && (
        <p className="text-sm text-destructive">{t(errors.form)}</p>
      )}

      <Button type="submit" disabled={pending} className="self-start">
        {pending ? (
          t("sending")
        ) : (
          <>
            {t("send")}
            <Send className="size-4" />
          </>
        )}
      </Button>
    </form>
  );
}
