import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import DataInputFields from "./Modules/DataInputFields";
import DropzoneCSVImporter from "./Modules/DropzoneCSVImporter";

const StyledApp = styled(Grid)({
  height: "100vh",
  width: "100%",
});

const StyledDropzoneContainer = styled(Grid)({
  height: "60vh",
});

const App = () => {
  const [inputData, setInputData] = useState({
    productCost: 0,
    shippingCost: 3,
    fbaFee: 8,
    storageFee: 0,
    targetPrice: 0,
    mainKeyword: "",
  });

  return (
    <StyledApp
      id="App"
      sx={{ width: "100%", height: "100%" }}
      container
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
      <Grid item>
        <DataInputFields setInputData={setInputData} inputData={inputData} />
      </Grid>
      <Grid item>
        <StyledDropzoneContainer container justifyContent="center">
          <DropzoneCSVImporter inputData={inputData} />
        </StyledDropzoneContainer>
      </Grid>
    </StyledApp>
  );
};

export default App;
