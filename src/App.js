import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import { duplicateTemplateSheetUrl } from "./constants";
import { downloadCsv, unparseArray } from "./lib/helpers/csvHelper";
import { generateFileNameFromKeyword } from "./lib/helpers/productsListHelper";
import DataInputFields from "./Modules/DataInputFields";
import DropzoneCSVImporter from "./Modules/DropzoneCSVImporter";
import GenerateReportButton from "./Modules/GenerateReportButton";
import { getMarketDataFromCsv } from "./Services/MarketDataService";

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
    fbaFee: 0,
    storageFee: 0,
    targetPrice: 0,
    mainKeyword: "",
  });

  const [uploadedCsv, setUploadedCsv] = useState();

  const handleGenerateReportClick = async () => {
    const marketDataArray = await getMarketDataFromCsv({
      file: uploadedCsv,
      inputData,
    });
    const unparsedMarketDataCsv = unparseArray(marketDataArray);
    window.open(duplicateTemplateSheetUrl, "_blank", "noopener,noreferrer");
    downloadCsv({
      csv: unparsedMarketDataCsv,
      fileName: generateFileNameFromKeyword(inputData.mainKeyword),
    });
  };

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
          <DropzoneCSVImporter setUploadedCsv={setUploadedCsv} />
        </StyledDropzoneContainer>
        <GenerateReportButton
          inputData={inputData}
          handleClick={handleGenerateReportClick}
          uploadedCsv={uploadedCsv}
        />
      </Grid>
    </StyledApp>
  );
};

export default App;
