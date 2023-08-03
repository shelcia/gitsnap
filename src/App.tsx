import { CssBaseline, CssVarsProvider, Sheet } from "@mui/joy";

function App() {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Sheet variant="outlined">Welcome!</Sheet>
    </CssVarsProvider>
  );
}

export default App;
