import {
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React from "react";

const DataInputFields = ({ inputData, setInputData }) => {
  const handleProductCostChange = (e) => {
    setInputData({ ...inputData, productCost: e.target.value });
  };
  const handleShippingCostChange = (e) => {
    setInputData({ ...inputData, shippingCost: e.target.value });
  };
  const handleFbaFeeChange = (e) => {
    setInputData({ ...inputData, fbaFee: e.target.value });
  };
  const handleStorageFeeChange = (e) => {
    setInputData({ ...inputData, storageFee: e.target.value });
  };
  const handleTargetPriceChange = (e) => {
    setInputData({ ...inputData, targetPrice: e.target.value });
  };

  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      direction="column"
      alignItems="center"
    >
      <Grid item xs={6}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">
            Product cost
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            label="COGS"
            value={inputData.productCost}
            onChange={handleProductCostChange}
            variant="outlined"
            type="number"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">
            Shipping cost
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            label="COGS"
            value={inputData.shippingCost}
            onChange={handleShippingCostChange}
            variant="outlined"
            type="number"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
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
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
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
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">
            Target Price
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            label="Storage Fee"
            value={inputData.targetPrice}
            onChange={handleTargetPriceChange}
            variant="outlined"
            type="number"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default DataInputFields;
