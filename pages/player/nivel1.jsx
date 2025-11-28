export default function PlayerNivel1() {
  return (
    <div style={{
      width: "100%",
      height: "100vh",
      backgroundColor: "#000",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <iframe
        src="https://www.patrociniodesanjose.cl/nivel1"
        style={{
          width: "100%",
          height: "100%",
          border: "none"
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
