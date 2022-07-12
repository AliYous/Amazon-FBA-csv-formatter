import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import React from "react";
import DropzoneCSVImporter from "./Modules/DropzoneCSVImporter";

const StyledApp = styled(Grid)({
  height: "100vh",
  width: "100%",
});
const App = () => {
  // const headerKeys = Object.keys(Object.assign({}, ...array));

  return (
    <StyledApp container id="App" justifyContent="center" alignItems="center">
      <DropzoneCSVImporter />
    </StyledApp>
  );
};

export default App;
