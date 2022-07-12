import { parseCsv } from "../lib/helpers/csvHelper";
import {
  filterPPCListings,
  findHighPerformers,
  formatProductsList,
  convertAllValuesToStringAndReplaceCommas,
} from "../lib/helpers/productsListHelper";

/* 
Takes a csv from helium10 and returns a sorted list of top competitors
 with all relevant data for the sheets calculations
*/
export const getMarketDataFromCsv = async (file) => {
  const productsList = await parseCsv(file);

  // format the object in a more dev friendly format
  const formattedProductsList = formatProductsList(productsList);

  // remove all non organic listings
  const organicProducts = filterPPCListings(formattedProductsList);

  // Remove all products with unknown revenue or with less than $X revenue
  const highPerformersList = findHighPerformers({
    productsList: organicProducts,
    minRevenue: 10000,
  });

  // Sort by monthlyRevenue from highest to lowest
  const sortedHighPerformersList = highPerformersList.sort((a, b) => {
    return b.monthlyRevenue - a.monthlyRevenue;
  });
  const finalFormatedProductsList = convertAllValuesToStringAndReplaceCommas(
    sortedHighPerformersList
  );
  console.log(finalFormatedProductsList);
  return sortedHighPerformersList;
};
