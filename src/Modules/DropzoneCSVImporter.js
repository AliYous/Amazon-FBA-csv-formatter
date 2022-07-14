import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";

import Dropzone from "react-dropzone";
import { downloadCsv, unparseArray } from "../lib/helpers/csvHelper";
import { getMarketDataFromCsv } from "../Services/MarketDataService";
import palette from "../theme/palette";
import { TbDragDrop as DragDropIcon } from "react-icons/tb";
import { duplicateTemplateSheetUrl } from "../constants";
import { generateFileNameFromKeyword } from "../lib/helpers/productsListHelper";

const StyledDropzone = styled(Box)({
  backgroundColor: palette.blue[20],
  color: palette.grey[70],
  borderRadius: 18,
  cursor: "pointer",
  border: `3px dashed ${palette.blue[30]}`,
  height: "100%",
  minWidth: "50rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.3)",
  },
});

const DropzoneCSVImporter = ({ inputData }) => {
  const handleFilesDrop = async (files) => {
    const marketDataArray = await getMarketDataFromCsv({
      file: files[0],
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
