"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import { Environment } from "@react-three/drei";

/**
 * Props for `ModelSection`.
 */
export type ModelSectionProps = SliceComponentProps<Content.ModelSectionSlice>;

/**
 * Component for "ModelSection" Slices.
 */
const ModelSection: FC<ModelSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative h-[100svh]"
    >
      <div className="absolute top-[3rem] left-[3rem] -z-10 rounded-lg bg-[#111] p-6">
        <h2 className="text-xl">{slice.primary.title}</h2>
        <div className="max-w-[40ch]">
          <PrismicRichText field={slice.primary.subtitle} />
        </div>
      </div>
      <Canvas>
        <OrbitControls enableZoom={false} />
        <TableModel scale={4} />

        <PerspectiveCamera makeDefault position={[0, 1, 1.5]} />
        <Environment preset="apartment" environmentIntensity={3} />
      </Canvas>
    </section>
  );
};

export default ModelSection;

// ////////////////////////

function TableModel() {
  const fileUrl = "/table.glb";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  return (
    <mesh position={[0, 0.3, 0]} ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}
