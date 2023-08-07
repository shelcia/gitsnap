export const Chip1 = ({ name, val, color, theme = "light" }) => {
  return (
    <div
      style={{
        display: "flex",
        padding: "0px 20px",
        alignItems: "center",
        gap: "27px",
        borderRadius: "30px",
        background: theme === "light" ? "#ECECEC" : "#091922",
        boxShadow:
          theme === "light"
            ? "-20px -20px 60px 0px #FFF, 20px 20px 60px 0px rgba(201, 201, 201, 0.60)"
            : "-20px -20px 60px 0px #0A1D27, 20px 20px 60px 0px #08151D",
      }}
    >
      <p
        style={{
          color: color,
          fontFamily: "Satoshi",
          fontSize: "20px",
          fontWeight: 500,
        }}
      >
        {name}
      </p>
      <div style={{ width: "1px", height: "39px", background: "#CCC" }}></div>

      <p
        style={{
          color: "#000",
          fontFamily: "Satoshi",
          fontSize: "20px",
          fontWeight: 400,
        }}
      >
        {val}
      </p>
    </div>
  );
};
