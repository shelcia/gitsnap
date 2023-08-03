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
import { useNavigate } from "react-router-dom";

type HomePageProps = object;

const HomePage: React.FC<HomePageProps> = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState("");

  const handleGithubLink = () => {
    const parsedLink = value?.split("https://github.com/")?.[1];
    if (parsedLink) {
      const name = parsedLink.split("/")?.[0];
      const repo = parsedLink.split("/")?.[1];

      if (name && repo) {
        navigate(`/${name}/${repo}`);
      } else {
        navigate(`/error`);
      }
    } else {
      navigate(`/error`);
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
            <Button variant="solid" color="primary" onClick={handleGithubLink}>
              Let's Go !
            </Button>
          </CardActions>
        </Box>
      </Card>
    </>
  );
};

export default HomePage;
