import { FC } from "react";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  SliceComponentProps,
  PrismicImage,
} from "@prismicio/react";

/**
 * Props for `Callout`.
 */
export type CalloutProps = SliceComponentProps<Content.CalloutSlice>;

/**
 * Component for "Callout" Slices.
 */
const Callout: FC<CalloutProps> = ({ slice }) => {
  // console.log(slice);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={
        "flex items-center gap-8 px-[3rem] py-[5svh]" +
        (slice.variation === "alternate" ? " flex-row-reverse" : "")
      }
    >
      <div className="flex-center relative aspect-[2/2.3] w-1/2">
        <PrismicImage
          field={slice.primary.image}
          className="size-full object-cover"
        />

        {slice.variation === "alternate" && (
          <PrismicImage
            field={slice.primary.inner_image}
            className="absolute aspect-[2/3] w-1/2 object-cover"
          />
        )}
      </div>

      <div>
        <div className="py-8">
          <h2 className="my-2 text-xl">{slice.primary.title}</h2>
          <div className="max-w-[40ch]">
            <PrismicRichText field={slice.primary.subtitle} />
          </div>
        </div>
        <ul className="grid max-w-[30rem] grid-cols-2 gap-2">
          {slice.primary.stats.map((item) => (
            <li key={item.text}>
              <p className="font-mono text-[12px] tracking-wider uppercase">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
        {slice.primary.note && (
          <div className="mt-4 max-w-[30ch]">
            <p className="text-[.8rem]">{slice.primary.note}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Callout;
