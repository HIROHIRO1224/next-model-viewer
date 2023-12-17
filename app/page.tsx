import { ModelViewer } from "./_components/ModelViewer";

export default function Home() {
  return (
    <div style={{ height: "90vh" }}>
      <ModelViewer
        poster={""}
        glb={"/cat.glb"}
        usdz={"/cat.usdz"}
        alt={""}
        height="100%"
        ar
        arMode="webxr"
        cameraControl
      >
        <div
          slot="ar-button"
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            width: "50px",
            height: "30px",
          }}
        >
          <div
            style={{
              borderRadius: "50%",
              backgroundColor: "whitesmoke",
              color: "grey",
              textAlign: "center",
            }}
          >
            AR
          </div>
        </div>
      </ModelViewer>
    </div>
  );
}
