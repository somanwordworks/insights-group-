"use client";

export default function Modal({
  title,
  description,
  onClose,
}: {
  title: string;
  description: string;
  onClose: () => void;
}) {
  return (
    <div style={overlay}>
      <div style={modal}>
        <button onClick={onClose} style={closeBtn}>×</button>

        <h2>{title}</h2>
        <p style={{ marginTop: 16 }}>{description}</p>
      </div>
    </div>
  );
}

const overlay: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 200,
};

const modal: React.CSSProperties = {
  background: "#fff",
  borderRadius: 12,
  padding: 32,
  width: "100%",
  maxWidth: 520,
  position: "relative",
};

const closeBtn: React.CSSProperties = {
  position: "absolute",
  top: 16,
  right: 16,
  fontSize: 20,
  background: "none",
  border: "none",
  cursor: "pointer",
};
