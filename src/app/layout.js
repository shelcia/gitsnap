import "./globals.css";
import React from "react";
import {
  CssBaseline,
  CssVarsProvider,
  Grid,
  Sheet,
  Typography,
} from "@mui/joy";
import { theme } from "./theme";
// import { GitHub } from "@mui/icons-material";
// import Link from "next/link";

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
          {/* <ThemeRegistry options={{ key: "joy" }}> */}
          <Sheet variant="soft" sx={{ py: 2, px: 1 }}>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid xs={8}>
                <Typography level="h2" fontSize="xl">
                  Git Snap
                </Typography>
              </Grid>
              {/* <Grid xs={4}>
                <Link href="https://github.com/shelcia">
                  <GitHub />
                </Link>
              </Grid> */}
            </Grid>
          </Sheet>
          <Sheet
            variant="soft"
            sx={{
              height: "90vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {children}
          </Sheet>
          {/* </ThemeRegistry> */}
        </body>
      </html>
    </CssVarsProvider>
  );
}
