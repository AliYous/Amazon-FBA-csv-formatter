import styled from "@emotion/styled";
import {
  Box,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DropzoneCSVImporter from "./Modules/DropzoneCSVImporter";

const StyledApp = styled(Box)({
  height: "100vh",
  width: "100%",
});

const StyledDropzoneContainer = styled(Grid)({
  height: "50vh",
  width: "55rem",
});

const App = () => {
  const [inputData, setInputData] = useState({
    cogs: 0,
    fbaFee: 0,
    storageFee: 0,
  });

  useEffect(() => {
    console.log(inputData);
  }, []);

  const handleCOGSChange = (e) => {
    setInputData({ ...inputData, cogs: e.target.value });
  };
  const handleFbaFeeChange = (e) => {
    setInputData({ ...inputData, fbaFee: e.target.value });
  };
  const handleStorageFeeChange = (e) => {
    setInputData({ ...inputData, storageFee: e.target.value });
  };

  return (
    <StyledApp
      id="App"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        sx={{
          width: "55rem",
        }}
        container
        spacing={3}
        justifyContent="center"
        direction="column"
        alignItems="center"
      >
        <Grid item xs={6}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">COGS</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              label="COGS"
              value={inputData.cogs}
              onChange={handleCOGSChange}
              variant="outlined"
              type="number"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Fba Fee</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              label="Fba Fee"
              value={inputData.fbaFee}
              onChange={handleFbaFeeChange}
              variant="outlined"
              type="number"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">
              Storage Fee
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              label="Storage Fee"
              value={inputData.storageFee}
              onChange={handleStorageFeeChange}
              variant="outlined"
              type="number"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </Grid>
      <StyledDropzoneContainer container>
        <DropzoneCSVImporter inputData={inputData} />
      </StyledDropzoneContainer>
    </StyledApp>
  );
};

export default App;
