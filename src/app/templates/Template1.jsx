import React from "react";
import { Chip1 } from "./components/Chips";

export const Banner1 = ({
  repo,
  theme = "light",
  description,
  forks,
  issues,
  stars,
}) => {
  return (
    <>
      <div
        style={{
          background: theme === "light" ? "#ECECEC" : "#091922",
          padding: "8px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: 1200,
          height: 460,
        }}
      >
        <h1
          style={{
            textTransform: "capitalize",
            color: theme === "light" ? "#040404" : "#fff",
            fontFamily: "Satoshi",
            fontSize: 128,
            fontWeight: 700,
            marginBottom: 0,
          }}
        >
          {repo}
        </h1>
        <p
          style={{
            color: theme === "light" ? "#040404" : "#fff",
            fontFamily: "Satoshi",
            fontSize: 32,
            fontWeight: 400,
          }}
        >
          {description}
        </p>
        <div style={{ display: "flex", gap: 124, marginTop: 30 }}>
          <Chip1 name="Fork" val={forks} color="#0500FF" theme={theme} />
          <Chip1 name="Issues" val={issues} color="#FF005C" theme={theme} />
          <Chip1 name="Stars" val={stars} color="#FF7A00" theme={theme} />
        </div>
      </div>
    </>
  );
};
