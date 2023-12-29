import "./globals.css";
import React from "react";
import {
  CssBaseline,
  CssVarsProvider,
  Grid,
  IconButton,
  Link,
  Sheet,
  Typography,
} from "@mui/joy";
import { theme } from "./theme";
import { Toaster } from "react-hot-toast";
import { GitHub } from "@mui/icons-material";

export const metadata = {
  title: "GitSnap",
  description: "Generated beautiful SVG banner for your Repositories",
};

export default function RootLayout({ children }) {
  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <html lang="en">
        <body>
          <Toaster position="top-center" reverseOrder={false} />
          <Sheet variant="soft" sx={{ py: 2, px: 1 }}>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid xs={8}>
                <Link href="/" sx={{ textDecoration: "none" }}>
                  <Typography level="h1" fontSize="xl">
                    Git Snap
                  </Typography>
                </Link>
              </Grid>
              <Grid xs={4} sx={{ textAlign: "right" }}>
                <Link href="https://github.com/shelcia/gitsnap" target="_blank">
                  <IconButton>
                    <GitHub />
                  </IconButton>
                </Link>
              </Grid>
            </Grid>
          </Sheet>
          <Sheet
            variant="soft"
            sx={{
              minHeight: "85vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {children}
          </Sheet>
          <Sheet
            sx={{ textAlign: "center", minHeight: "5vh", py: 2 }}
            variant="soft"
          >
            Developed by{" "}
            <a href="https://www.shelcia-dev.me/" target="_blank">
              Shelcia
            </a>
          </Sheet>
        </body>
      </html>
    </CssVarsProvider>
  );
}
