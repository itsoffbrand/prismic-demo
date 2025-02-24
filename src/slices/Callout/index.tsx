import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

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
    >
      <h2>{slice.primary.title}</h2>
      <PrismicRichText field={slice.primary.subtitle} />
      <ul>
        {slice.primary.stats.map((item) => (
          <li key={item.text}>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Callout;
