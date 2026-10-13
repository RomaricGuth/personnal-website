import Home from "../../components/home";

export const metadata = {
  alternates: {
    canonical: "https://romaricgut.com",
    languages: {
      en: "https://romaricgut.com/en",
      fr: "https://romaricgut.com/fr",
    },
  },
};

export default async function HomePage() {
  return <Home />;
}
