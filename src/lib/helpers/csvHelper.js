import CSVToArray from "csv-to-array-browser";
import Papa from "papaparse";

export const parseCsv = async (file) => {
  return await CSVToArray(file);
};

export const unparseArray = (array) => {
  return Papa.unparse(array);
};

export const downloadCsv = (csv) => {
  const csvData = new Blob([csv], { type: "text/csv" });
  const csvUrl = URL.createObjectURL(csvData);
  const link = document.createElement("a");
  link.href = csvUrl;
  link.download = "helium10.csv";
  link.click();
};
