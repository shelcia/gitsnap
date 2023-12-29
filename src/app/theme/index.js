"use client";
import { extendTheme } from "@mui/joy";

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        // affects all Joy components that has `color="primary"` prop.
        // primary: {
        //   50: "#fffbeb",
        //   100: "#fef3c7",
        //   200: "#fde68a",
        //   // 300, 400, ..., 800,
        //   900: "#78350f",
        // },
      },
    },
  },
  fontFamily: {
    display: "Figtree, var(--joy-fontFamily-fallback)",
    body: "Figtree, var(--joy-fontFamily-fallback)",
  },
});
