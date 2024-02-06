import React from "react";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function About({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return <> {dictionary.about.title} </>;
}
