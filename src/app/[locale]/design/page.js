import { getTranslations } from "next-intl/server";
import DesignLibrary from "@/components/designLibrary";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Design" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default function DesignPage() {
  return <DesignLibrary />;
}
