"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Option,
  Select,
  Typography,
} from "@mui/joy";
import axios from "axios";
import satori from "satori";
import { Banner1 } from "@/app/templates/Template1";
import { downloadSvgAsPng } from "@/app/helpers/util";
import { useParams } from "next/navigation";

const BannerMaker = () => {
  const params = useParams();
  const name = params.name;
  const repo = params.repo;

  const [svgImg, setSvgImg] = useState("");
  const [details, setDetails] = useState({
    forks: 0,
    open_issues: 0,
    stargazers_count: 0,
    description: "",
  });

  const [inputs, setInputs] = useState({
    template: 1,
    theme: "light",
  });

  const [disabled, setDisabled] = useState(true);

  const fetchRepoDetails = async (name, repo) => {
    try {
      const res = await axios.get(
        `https://api.github.com/repos/${name}/${repo}`
      );
      setDetails(res.data);
      setDisabled(false);
    } catch (error) {
      console.error("Error fetching repo details", error);
    }
  };

  useEffect(() => {
    if (name && repo) {
      fetchRepoDetails(name, repo);
    }
  }, [params]);

  const satoshiRegular = fetch(
    "/assets/fonts/satoshi/Satoshi-Regular.otf"
  ).then((res) => res.arrayBuffer());

  const satoshiMedium = fetch("/assets/fonts/satoshi/Satoshi-Medium.otf").then(
    (res) => res.arrayBuffer()
  );

  const satoshiBold = fetch("/assets/fonts/satoshi/Satoshi-Bold.otf").then(
    (res) => res.arrayBuffer()
  );

  const generateImage = useCallback(
    async (type) => {
      if (disabled) return;

      const width = 1200;
      const height = 460;

      const generatedSvg = await satori(
        <Banner1
          repo={repo}
          theme={inputs.theme}
          description={details.description}
          forks={details.forks}
          issues={details.open_issues}
          stars={details.stargazers_count}
        />,
        {
          width,
          height,
          fonts: [
            {
              name: "Satoshi",
              data: await satoshiRegular,
              weight: 400,
              style: "normal",
            },
            {
              name: "Satoshi",
              data: await satoshiMedium,
              weight: 500,
              style: "medium",
            },
            {
              name: "Satoshi",
              data: await satoshiBold,
              weight: 700,
              style: "normal",
            },
          ],
        }
      );

      const base64data = btoa(unescape(encodeURIComponent(generatedSvg)));
      setSvgImg(`data:image/svg+xml;base64,${base64data}`);

      if (type === "download") {
        downloadSvgAsPng(generatedSvg);
      } else if (type === "svg") {
        navigator.clipboard.writeText(generatedSvg);
      }
    },
    [inputs, disabled]
  );


  useEffect(() => {
    generateImage();
  }, [generateImage]);

  const handleChange = () => {
    generateImage();
  };


  return (
    <>
      <Grid container spacing={2} sx={{ flexGrow: 1, mt: 1 }}>
        <Grid xs={12} md={8}>
          {!disabled && (
            <Box>
              <CardContent sx={{ width: "100%", p: 2 }}>
                {svgImg !== "" && (
                  <img src={svgImg} alt="" width={"100%"} height="auto" />
                )}
              </CardContent>
            </Box>
          )}
        </Grid>
        <Grid xs={12} md={4} sx={{ p: 4 }}>
          <Card variant="soft">
            <Box>
              <CardContent
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  gap: 1.5,
                  p: 2,
                }}
              >
                <Box>
                  <Typography
                    color="neutral"
                    level="title-lg"
                    variant="soft"
                    sx={{ mb: 1 }}
                  >
                    Choose Template
                  </Typography>
                  <Select
                    defaultValue={1}
                    onChange={(e) => {
                      setInputs({ ...inputs, template: e.target.value });
                      handleChange();
                    }}
                  >
                    <Option value={1}>Template 1</Option>
                  </Select>
                </Box>

                <Box>
                  <Typography
                    color="neutral"
                    level="title-lg"
                    variant="soft"
                    sx={{ mb: 1 }}
                  >
                    Choose Mode
                  </Typography>
                  <Select
                    defaultValue="light"
                    onChange={(e) => {
                      console.log(e.target.id);
                      setInputs({ ...inputs, theme: e.target.id });
                      handleChange();
                    }}
                  >
                    <Option value="light" id="light">Light Mode</Option>
                    <Option value="dark" id="dark">Dark Mode</Option>
                  </Select>
                </Box>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                  <Button
                    onClick={() => handleChange("download")}
                    disabled={disabled}
                  >
                    Download
                  </Button>
                  <Button
                    onClick={() => handleChange("svg")}
                    disabled={disabled}
                  >
                    SVG
                  </Button>
                </Box>
              </CardContent>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default BannerMaker;

// const fetchFontData = async (fontPath) => {
//   const response = await fetch(fontPath);
//   return await response.arrayBuffer();
// };
