import React, { useCallback, useEffect, useState } from "react";
import Papa from "papaparse";
import { turnSoftwareDataToFormattedCSV } from "../lib/helpers/DataReportHelper";
import { Box } from "@mui/material";
import Dropzone from "react-dropzone";
import CSVToArray from "csv-to-array-browser";

const DropzoneCSVImporter = () => {
  const [productsList, setProductsList] = useState([]);

  const parseCsv = async (file) => {
    const convertedData = await CSVToArray(file);
    console.log(convertedData);

    // Papa.parse(file, {
    //   header: true,
    //   complete: (results) => {
    //     console.log(results.data);
    //     setProductsList(results.data);
    //   },
    // });
  };

  useEffect(() => {
    turnSoftwareDataToFormattedCSV(productsList);
  }, [productsList]);

  return (
    <Dropzone onDrop={(acceptedFiles) => parseCsv(acceptedFiles[0])}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
};

export default DropzoneCSVImporter;
