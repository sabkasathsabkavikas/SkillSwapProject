function AlertBox({ message }) {
  return (
    <div
      className="alert"
      style={{ backgroundColor: "#ffeecc", padding: "1rem", marginTop: "1rem" }}
    >
      <strong>📢 Alert:</strong> {message}
    </div>
  );
}

export default AlertBox;
