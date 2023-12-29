"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Option,
  Select,
  Switch,
  Typography,
} from "@mui/joy";
import axios from "axios";
import satori from "satori";
import { Banner1 } from "@/app/templates/Template1";
import { downloadSvgAsPng } from "@/app/helpers/util";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";

const BannerMaker = () => {
  const params = useParams();
  const name = params.name;
  const repo = params.repo;

  const [svgImg, setSvgImg] = useState("");
  const [generatedSvg, setGeneratedSvg] = useState(null);
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
      const height = 600;

      const newGeneratedSvg = await satori(
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

      setGeneratedSvg(newGeneratedSvg);

      const base64data = btoa(unescape(encodeURIComponent(newGeneratedSvg)));
      setSvgImg(`data:image/svg+xml;base64,${base64data}`);
    },
    [inputs, disabled]
  );

  useEffect(() => {
    generateImage();
  }, [generateImage]);

  const handleChange = () => {
    generateImage();
  };

  const imageSave = (type) => {
    if (generatedSvg) {
      if (type === "download") {
        downloadSvgAsPng(generatedSvg);
      } else if (type === "svg") {
        navigator.clipboard.writeText(generatedSvg);
        toast.success("Copied as SVG successfully !");
      }
    }
  };

  const CopyIcon = "/assets/icons/copy-icon.svg";
  const DownloadIcon = "/assets/icons/download-icon.svg";

  const [checked, setChecked] = React.useState(false);

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
                  <FormControl
                    orientation="horizontal"
                    sx={{ width: 300, justifyContent: "space-between" }}
                  >
                    <div>
                      <FormLabel>
                        <Typography
                          color="neutral"
                          level="title-lg"
                          variant="soft"
                          // sx={{ mb: 1 }}
                        >
                          Choose Mode
                        </Typography>
                      </FormLabel>
                      <FormHelperText sx={{ mt: 0 }}>
                        Switch to Change Theme
                      </FormHelperText>
                    </div>
                    <Switch
                      checked={checked}
                      onChange={(event) => {
                        setChecked(event.target.checked);
                        setInputs({
                          ...inputs,
                          theme: event.target.checked ? "dark" : "light",
                        });
                      }}
                      color={checked ? "primary" : "neutral"}
                      variant={checked ? "solid" : "outlined"}
                      endDecorator={checked ? "On" : "Off"}
                      slotProps={{
                        endDecorator: {
                          sx: {
                            minWidth: 24,
                          },
                        },
                      }}
                    />
                  </FormControl>
                </Box>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                  <Button
                    onClick={() => imageSave("download")}
                    disabled={disabled}
                  >
                    <img
                      src={DownloadIcon}
                      alt="icon"
                      style={{ marginRight: 5 }}
                    />
                    Download as PNG
                  </Button>
                  <Button onClick={() => imageSave("svg")} disabled={disabled}>
                    <img src={CopyIcon} alt="icon" style={{ marginRight: 5 }} />
                    Copy as SVG
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
