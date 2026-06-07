import ContactForm from "@/components/contact/contactForm";
import Motion from "@/components/motion";
import { Linkedin, Mail } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contact" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

const directLinks = [
  {
    name: "contact@romaricguth.com",
    href: "mailto:contact@romaricguth.com",
    Icon: Mail,
  },
  {
    name: "linkedin.com/in/guth",
    href: "https://www.linkedin.com/in/guth",
    Icon: Linkedin,
  },
];

export default async function ContactPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Contact" });

  return (
    <div className="bg-secondary px-6 py-16 sm:py-24">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-10">
        <Motion animation="fadeIn" className="flex flex-col gap-3 text-center">
          <h1 className="text-5xl font-bold">{t("title")}</h1>
        </Motion>

        <ContactForm />

        <div className="flex flex-col items-center gap-3">
          <span className="text-sm text-muted-foreground">
            {t("orReachMe")}
          </span>
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
            {directLinks.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
              >
                <Icon className="size-4" />
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
