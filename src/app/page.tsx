// import Image from "next/image";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";

export default async function Home() {
  const client = createClient();
  const home = await client.getSingle("home");

  // console.log(home);

  return (
    <div className="min-h-screen pb-20  font-[family-name:var(--font-geist-sans)]">
      <SliceZone slices={home.data.slices} components={components} />
    </div>
  );
}
