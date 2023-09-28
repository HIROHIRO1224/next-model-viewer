"use client";
import { ModelViewer } from "./_components/ModelViewer";
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
