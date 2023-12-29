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
            : "-18px -18px 36px 0px rgba(255, 255, 255, 0.1), 1px 1px 2px 0px rgba(0, 0, 0, 0.02) inset, 18px 18px 36px 0px rgba(0, 0, 0, 0.25)",
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
      <div
        style={{
          width: "1px",
          height: "39px",
          background: theme === "light" ? "#CCC" : "rgba(204, 204, 204, 0.40)",
        }}
      ></div>

      <p
        style={{
          color: theme === "light" ? "#000" : "#fff",
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
