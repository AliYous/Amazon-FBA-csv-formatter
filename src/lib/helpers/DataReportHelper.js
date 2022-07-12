import { helium10KeysMap } from "../keysMap";

export const turnSoftwareDataToFormattedCSV = (virginProductsList) => {
  let productsList = formatProductsList({
    productsList: virginProductsList,
  });

  // console.log(productsList);
};

const formatProductsList = ({ productsList }) => {
  return productsList.map((virginProduct) => {
    let product = cleanAllProductKeys({ product: virginProduct });
    helium10KeysMap.forEach((keyMap) => {
      const { currentKey, newKey } = keyMap;
      if (product[currentKey]) {
        product[newKey] = product[currentKey];
      }
      delete product[currentKey];
    });
    return product;
  });
};

const cleanAllProductKeys = ({ product }) => {
  const cleanedProduct = Object.keys(product).map((key) => {
    const cleanedKey = key.replace(/[^a-z0-9]/gi, "");
    product[cleanedKey] = product[key];
    delete product[key];
    return product;
  });

  return cleanedProduct;
};

const filterTopCompetitors = ({ productsList, minRevenue = 10000 }) => {
  return productsList.filter(({ revenue }) => revenue > minRevenue);
};
