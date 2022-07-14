import { helium10KeysMap } from "../keysMap";
import { generateAmazonSearchResultsUrl } from "./stringHelper";

export const formatProductsList = (productsList) => {
  return productsList.map((virginProduct) => {
    let product = cleanAllProductKeys({ product: virginProduct });
    let formattedProduct = {};
    helium10KeysMap.forEach((keyMap) => {
      const { currentKey, newKey } = keyMap;
      if (product[currentKey]) {
        formattedProduct[newKey] = product[currentKey];
      }
    });

    return formattedProduct;
  });
};

export const convertAllValuesToStringAndReplaceCommas = (productsList) => {
  return productsList.map((product) => {
    const tempProduct = {};
    Object.keys(product).forEach((key) => {
      if (typeof product[key] === "number" || !isNaN(product[key])) {
        if (key !== "ratings" && key !== "reviewsCount" && key !== "fbaFee") {
          tempProduct[key] = Math.round(product[key])
            .toString()
            .replace(".", ",");
        } else {
          tempProduct[key] = product[key].toString().replace(".", ",");
        }
      }
    });
    return { ...product, ...tempProduct };
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

export const addInputDataToEachProduct = ({
  productsList,
  productCost,
  shippingCost,
  fbaFee,
  storageFee,
  targetPrice,
  mainKeyword,
}) => {
  const searchResultsUrl = generateAmazonSearchResultsUrl({
    searchTerm: mainKeyword,
  });
  return productsList.map((product) => ({
    ...product,
    productCost: productCost,
    shippingCost: shippingCost,
    fbaFee: fbaFee,
    storageFee: storageFee,
    targetPrice: targetPrice,
    searchResultsUrl: searchResultsUrl,
    figmaUrl: "https://www.figma.com/file/new?editor_type=design",
  }));
};
