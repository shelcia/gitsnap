"use client";
import React from "react";
import { GitHub } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Input,
  Typography,
} from "@mui/joy";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const HomePage = () => {
  const router = useRouter();

  const [value, setValue] = useState("");

  const handleGithubLink = (e) => {
    const isGithubLink = value.match(
      /^(https?:\/\/github\.com\/)?([^/]+)\/([^/]+).*/
    );

    // if (isGithubLink) {
    //   toast.error("Add proper github link");
    //   setValue("");
    //   return;
    // }

    e.preventDefault()
    const parsedLink = value?.split("https://github.com/")?.[1];
    if (parsedLink) {
      const [name, repo] = parsedLink.split("/") || [];

      if (name && repo) {
        router.push(`/${name}/${repo}`);
      } else {
        toast.error("Add proper github link");
        setValue("");
        // router.replace(`/error`);
      }
    } else {
      toast.error("Add proper github link");
      setValue("");
      // router.replace(`/error`);
    }
  };

  return (
    <>
      <Card
        variant="soft"
        sx={{
          maxWidth: "80%",
          minWidth: "60%",
          overflow: "auto",
          margin: 0,
        }}
      >
        <Box
          component="form"
          onSubmit={(e)=>handleGithubLink(e)}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <CardContent sx={{ width: "100%" }}>
            <Typography level="title-lg" sx={{ mb: 1 }}>
              Create Beautiful Banner for your Github Repositories
            </Typography>
            <Input
              startDecorator={<GitHub />}
              placeholder="Add you github Repo URL…"
              variant="soft"
              fullWidth
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </CardContent>
          <CardActions buttonFlex="0 1 120px">
            <Button variant="solid" color="primary" >
              Let&apos;s Go !
            </Button>
          </CardActions>
        </Box>
      </Card>
    </>
  );
};

export default HomePage;
