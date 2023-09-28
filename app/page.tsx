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
    <div style={{ height: "100vh" }}>
      <ModelViewer
        poster={""}
        glb={"/cat.glb"}
        usdz={""}
        alt={""}
        height="100vh"
      />
    </div>
  );
}
