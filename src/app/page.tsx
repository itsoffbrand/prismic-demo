// import Image from "next/image";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default async function Home() {
  const client = createClient();
  const home = await client.getSingle("home");

  // console.log(home);

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <SliceZone slices={home.data.slices} components={components} />
      <Footer />
    </div>
  );
}
