import Home from "../../components/home";

export const metadata = {
  alternates: {
    canonical: "https://romaricguth.com",
    languages: {
      en: "https://romaricguth.com/en",
      fr: "https://romaricguth.com/fr",
    },
  },
};

export default async function HomePage() {
  return <Home />;
}
