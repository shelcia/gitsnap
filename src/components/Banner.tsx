interface BannerProps {
  repo: string | undefined;
  description: string;
  forks: number;
}

const Banner: React.FC<BannerProps> = ({ repo, description, forks }) => {
  return (
    <>
      <div
        style={{
          background: "#ECECEC",
          width: "100%",
          padding: "8px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            textTransform: "capitalize",
            color: "#040404",
            fontFamily: "Satoshi",
            fontSize: 128,
            fontWeight: 700,
          }}
        >
          {repo}
        </h1>
        <p
          style={{
            color: "#040404",
            fontFamily: "Satoshi",
            fontSize: 32,
            fontWeight: 400,
          }}
        >
          {description}
        </p>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              padding: "0px 22px",
              alignItems: "center",
              gap: "27px",
              borderRadius: "20px",
              background: "#ECECEC",
              boxShadow:
                "-20px -20px 60px 0px #FFF, 20px 20px 60px 0px rgba(201, 201, 201, 0.60)",
            }}
          >
            <p
              style={{
                color: "#0500FF",
                fontFamily: "Satoshi",
                fontSize: "20px",
                fontWeight: 500,
              }}
            >
              Forks
            </p>
            <div
              style={{ width: "1px", height: "39px", background: "#CCC" }}
            ></div>

            <p
              style={{
                color: "#000",
                fontFamily: "Satoshi",
                fontSize: "20px",
                fontWeight: 400,
              }}
            >
              {forks}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
