import CSVToArray from "csv-to-array-browser";

export const parseCsv = async (file) => {
  return await CSVToArray(file);
};
