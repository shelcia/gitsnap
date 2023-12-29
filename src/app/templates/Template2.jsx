import React from "react";
import { Chip2 } from "./components/Chips";

export const Banner2 = ({
  repo,
  theme = "light",
  description,
  forks,
  issues,
  stars,
  options,
}) => {
  const ImgGrid = "/assets/images/img-grid.png";

  return (
    <>
      <div
        style={{
          backgroundColor: theme === "light" ? "#70FF00" : "#FF2FDE",
          backgroundImage: `url(${ImgGrid})`,
          padding: 8,
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
            fontFamily: "DM Sans",
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
              fontFamily: "DM Sans",
              fontSize: description.length > 250 ? 24 : 32,
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            {description}
          </p>
        )}

        <div style={{ display: "flex", gap: 124, marginTop: 30 }}>
          <Chip2 name="Forks" val={forks} />
          <Chip2 name="Issues" val={issues} />
          <Chip2 name="Stars" val={stars} />
        </div>
      </div>
    </>
  );
};
