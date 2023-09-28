"use client";

import dynamic from "next/dynamic";

const ModelViewer = dynamic(
  async () => {
    const p = await import("./_components/ModelViewer");
    return p.ModelViewer;
  },
  { ssr: false }
);
export default function Home() {
  return (
    <div style={{ height: "80vh" }}>
      <ModelViewer
        poster={""}
        glb={"/pucho.glb"}
        usdz={"/pucho.usdz"}
        alt={""}
        height="80vh"
      />
    </div>
  );
}
