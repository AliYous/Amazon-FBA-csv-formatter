import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";

import Dropzone from "react-dropzone";
import {
  downloadCsv,
  unparseArray,
  convertObjectToCSV,
} from "../lib/helpers/csvHelper";
import { getMarketDataFromCsv } from "../Services/MarketDataService";
import palette from "../theme/palette";
import { TbDragDrop as DragDropIcon } from "react-icons/tb";

const StyledDropzone = styled(Box)({
  backgroundColor: palette.blue[20],
  color: palette.grey[70],
  borderRadius: 18,
  cursor: "pointer",
  border: `3px dashed ${palette.blue[30]}`,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.3)",
  },
});

const DropzoneCSVImporter = () => {
  const handleFilesDrop = async (files) => {
    const marketDataArray = await getMarketDataFromCsv(files[0]);
    console.log(marketDataArray);
    const unparsedMarketDataCsv = unparseArray(marketDataArray);
    downloadCsv(unparsedMarketDataCsv);
  };

  return (
    <Dropzone onDrop={(acceptedFiles) => handleFilesDrop(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <StyledDropzone {...getRootProps()}>
          <DragDropIcon size={120} style={{ color: palette.grey[50] }} />
          <input {...getInputProps()} />
          <p style={{ fontWeight: 500, fontSize: "19px" }}>
            Drop a Helium10 or Jungle Scout report download in this box
          </p>
        </StyledDropzone>
      )}
    </Dropzone>
  );
};

export default DropzoneCSVImporter;
