"use client";

export default async function Jambon(params: { lang: string }) {
  console.log("LANG : ", params.lang);
  if (params.lang === "fr-FR") return <div> slt </div>;

  return <div> yo </div>;
}
