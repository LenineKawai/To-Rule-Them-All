import Image from "next/image";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  console.log("lang : " + lang);

  const dictionary = await getDictionary(lang);

  return <> {dictionary.home.welcome} </>;
}
