import { helium10KeysMap } from "../keysMap";

export const formatProductsList = (productsList) => {
  return productsList.map((virginProduct) => {
    let product = cleanAllProductKeys({ product: virginProduct });
    const formattedProduct = {};
    helium10KeysMap.forEach((keyMap) => {
      const { currentKey, newKey } = keyMap;
      if (product[currentKey]) {
        formattedProduct[newKey] = product[currentKey];
      }
    });

    return formattedProduct;
  });
};

const cleanAllProductKeys = ({ product }) => {
  const tempProduct = {};
  Object.keys(product).forEach((key) => {
    const cleanedKey = key.replace(/[^a-z0-9]/gi, "");
    tempProduct[cleanedKey] = product[key];
  });
  return tempProduct;
};

export const findHighPerformers = ({ productsList, minRevenue = 10000 }) => {
  return productsList.filter(
    ({ monthlyRevenue }) =>
      monthlyRevenue !== "n/a" && monthlyRevenue > minRevenue
  );
};

export const filterPPCListings = (productsList) => {
  return productsList.filter(({ title }) => title.indexOf("($)") === -1);
};
