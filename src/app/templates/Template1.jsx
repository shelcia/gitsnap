import React from "react";
import { Chip1 } from "./components/Chips";

export const Banner1 = ({
  repo,
  theme = "light",
  description,
  forks,
  issues,
  stars,
  options,
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
          height: 600,
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
        {options.showDescription && (
          <p
            style={{
              color: theme === "light" ? "#040404" : "#fff",
              fontFamily: "Satoshi",
              fontSize: description.length > 250 ? 24 : 32,
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            {description}
          </p>
        )}

        <div style={{ display: "flex", gap: 124, marginTop: 30 }}>
          <Chip1
            name="Forks"
            val={forks}
            color={theme === "light" ? "#0500FF" : "#0085FF"}
            theme={theme}
          />
          <Chip1
            name="Issues"
            val={issues}
            color={theme !== "light" ? "#FF005C" : "#FF005C"}
            theme={theme}
          />
          <Chip1
            name="Stars"
            val={stars}
            color={theme !== "light" ? "#FF7A00" : "#FF7A00"}
            theme={theme}
          />
        </div>
      </div>
    </>
  );
};
