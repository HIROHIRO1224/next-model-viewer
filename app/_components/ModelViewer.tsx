"use client";
import "@google/model-viewer";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": MyElementAttributes;
    }
    interface MyElementAttributes {
      src: string;
      poster: string;
      alt: string;
      ar: boolean;
      scale: string;
    }
  }
}

type Props = {
  poster: string;
  glb: string;
  usdz: string;
  alt: string;
  scale?: number;
  height?: string;
};
export const ModelViewer = (props: Props) => {
  const { poster, glb, usdz, alt, scale = 1, height = "80vh" } = props;

  return (
    <model-viewer
      src={glb}
      ios-src={usdz}
      poster={poster}
      alt={alt}
      shadow-intensity="1"
      camera-controls
      ar={true}
      scale={`${scale} ${scale} ${scale}`}
    ></model-viewer>
  );
};
