"use client";

export default function Jambon({ params: { lang } }) {
  console.log("LANG : ", lang);
  if ((lang = "fr-FR")) return <div> slt </div>;

  return <div> yo </div>;
}
