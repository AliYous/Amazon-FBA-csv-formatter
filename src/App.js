import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import React from "react";
import DropzoneCSVImporter from "./Modules/DropzoneCSVImporter";

const StyledApp = styled(Grid)({
  height: "100vh",
  width: "100%",
});

const StyledDropzoneContainer = styled(Grid)({
  height: "50vh",
  width: "55rem",
});

const App = () => {
  return (
    <StyledApp container id="App" justifyContent="center" alignItems="center">
      <StyledDropzoneContainer>
        <DropzoneCSVImporter />
      </StyledDropzoneContainer>
    </StyledApp>
  );
};

export default App;
