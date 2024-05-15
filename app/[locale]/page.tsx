import { useTranslations } from "next-intl";

export default function Home() {
  const translated = useTranslations("Test");

  return (
    <h1>{translated("test")}</h1>
  );
}
