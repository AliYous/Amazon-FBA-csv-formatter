import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const GenerateReportButton = ({ inputData, uploadedCsv, handleClick }) => {
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (
      uploadedCsv &&
      inputData.mainKeyword.length > 0 &&
      inputData.productCost !== 0 &&
      inputData.shippingCost !== 0 &&
      inputData.fbaFee !== 0 &&
      inputData.storageFee !== 0 &&
      inputData.targetPrice !== 0
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [inputData, uploadedCsv]);
  return (
    <Box sx={{ width: "100%", marginTop: "16px" }}>
      <Button
        variant="contained"
        onClick={handleClick}
        disabled={disabled}
        sx={{ width: "100%", height: "45px" }}
      >
        Generate Report
      </Button>
    </Box>
  );
};

export default GenerateReportButton;
