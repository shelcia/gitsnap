import {
  Box,
  Button,
  CardContent,
  Grid,
  Option,
  Select,
  Sheet,
} from "@mui/joy";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import satori from "satori";
import { downloadSvgAsPng } from "../helpers/utils";

const BannerMaker = () => {
  const { name, repo } = useParams();
  const [details, setDetails] = useState({
    forks: 0,
    open_issues: 0,
    stargazers_count: 0,
    description: "",
  });

  const fetchRepoDetails = (
    name: string | undefined,
    repo: string | undefined
  ) => {
    axios.get(`https://api.github.com/repos/${name}/${repo}`).then((res) => {
      console.log(res);
      setDetails(res.data);
    });
  };

  useEffect(() => {
    fetchRepoDetails(name, repo);
  }, [name, repo]);

  const satoshi = fetch("/src/assets/fonts/satoshi/Satoshi-Medium.otf").then(
    (res) => res.arrayBuffer()
  );

  const handleClick = async () => {
    const width = 1200;
    const height = 460;
    const svg = await satori(
      <Banner
        repo={repo}
        description={details.description}
        forks={details.forks}
      />,
      {
        width,
        height,
        fonts: [
          {
            name: "Satoshi",
            data: await satoshi,
          },
        ],
      }
    );
    downloadSvgAsPng(svg);
  };

  return (
    <>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid xs={12} md={8}>
          <Box
            sx={{
              display: "flex",
              // justifyContent: "space-between",
              alignItems: "flex-start",
              flexDirection: "column",
              gap: "1.5rem",
              p: 4,
            }}
          >
            <CardContent sx={{ width: "100%" }}>
              {/* <AspectRatio> */}
              <Banner
                repo={repo}
                description={details.description}
                forks={details.forks}
              />
              <Button onClick={handleClick}>Click to Generate Image</Button>
              {/* </AspectRatio> */}
            </CardContent>
          </Box>
        </Grid>
        <Grid xs={12} md={4} sx={{ p: 4 }}>
          <Sheet variant="plain">
            <Box>
              <CardContent
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  gap: "1.5rem",
                  p: 5,
                }}
              >
                <Select defaultValue="template-1">
                  <Option value="template-1">Template 1</Option>
                </Select>
                <Select defaultValue="light">
                  <Option value="light">Light Mode</Option>
                  <Option value="dark">Dark Mode</Option>
                </Select>
              </CardContent>
            </Box>
          </Sheet>
        </Grid>
      </Grid>
    </>
  );
};

export default BannerMaker;
