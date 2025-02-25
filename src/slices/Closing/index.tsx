"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicImage } from "@prismicio/react";

/**
 * Props for `Closing`.
 */
export type ClosingProps = SliceComponentProps<Content.ClosingSlice>;

/**
 * Component for "Closing" Slices.
 */
const Closing: FC<ClosingProps> = ({ slice }) => {
  // console.log(slice);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative my-[5svh] flex min-h-[60svh] flex-col items-center justify-center gap-8 px-[3rem] text-center"
    >
      <div className="absolute inset-0 overflow-hidden">
        <PrismicImage
          field={slice.primary.image}
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4">
        <h2 className="text-3xl">{slice.primary.title}</h2>
        <h3 className="text-xl">{slice.primary.cta_title}</h3>
        <p className="max-w-[40ch] text-sm">{slice.primary.cta_text}</p>
        <button className="min-w-[40ch] cursor-pointer rounded-full bg-white py-2 font-mono text-[12px] font-bold tracking-wider text-black uppercase outline">
          click me
        </button>
      </div>
    </section>
  );
};

export default Closing;
