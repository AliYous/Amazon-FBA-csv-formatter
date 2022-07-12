import React, { useState } from "react";

import Dropzone from "react-dropzone";
import { getMarketDataFromCsv } from "../Services/MarketDataService";

const DropzoneCSVImporter = () => {
  const handleFilesDrop = async (files) => {
    const marketDataObject = await getMarketDataFromCsv(files[0]);
    console.log(marketDataObject);
  };

  return (
    <Dropzone onDrop={(acceptedFiles) => handleFilesDrop(acceptedFiles)}>
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
