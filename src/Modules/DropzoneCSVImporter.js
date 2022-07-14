import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";

import Dropzone from "react-dropzone";
import palette from "../theme/palette";
import { TbDragDrop as DragDropIcon } from "react-icons/tb";
import { SiGooglesheets as SheetsIcon } from "react-icons/si";

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

const DropzoneCSVImporter = ({ uploadedCsv, setUploadedCsv }) => {
  const handleFilesDrop = async (files) => {
    setUploadedCsv(files[0]);
  };

  return (
    <Dropzone onDrop={(acceptedFiles) => handleFilesDrop(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <StyledDropzone {...getRootProps()}>
          <input {...getInputProps()} />
          {uploadedCsv ? (
            <>
              <SheetsIcon size={120} style={{ color: palette.grey[50] }} />
              <p style={{ fontWeight: 500, fontSize: "14px" }}>
                {uploadedCsv.path}
              </p>
            </>
          ) : (
            <DragDropIcon size={120} style={{ color: palette.grey[50] }} />
          )}

          <p style={{ fontWeight: 400, fontSize: "19px" }}>
            {uploadedCsv
              ? "Drop another file to replace this one"
              : "Drag and drop a CSV file here or click to select a file"}
          </p>
        </StyledDropzone>
      )}
    </Dropzone>
  );
};

export default DropzoneCSVImporter;
