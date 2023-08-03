import { Grid, Sheet, Typography } from "@mui/joy";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Sheet variant="soft" sx={{ py: 2, px: 1 }}>
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <Grid xs={8}>
            <Typography level="h2" fontSize="xl">
              Git Snap
            </Typography>
          </Grid>
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
        <Outlet />
      </Sheet>
    </>
  );
};

export default Layout;
