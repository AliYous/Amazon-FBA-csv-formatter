import React from "react";

import Dropzone from "react-dropzone";
import { downloadCsv, unparseArray } from "../lib/helpers/csvHelper";
import { getMarketDataFromCsv } from "../Services/MarketDataService";

const DropzoneCSVImporter = () => {
  const handleFilesDrop = async (files) => {
    const marketDataArray = await getMarketDataFromCsv(files[0]);
    const unparsedMarketDataCsv = unparseArray(marketDataArray);
    downloadCsv(unparsedMarketDataCsv);
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
