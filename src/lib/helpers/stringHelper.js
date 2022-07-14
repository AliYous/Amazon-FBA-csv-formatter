export const generateAmazonSearchResultsUrl = ({ searchTerm }) => {
  if (searchTerm === "" || searchTerm === undefined || !searchTerm) {
    return "";
  }
  const plusSeparatedSearchTerm = searchTerm.replace(/ /g, "+");
  return `https://www.amazon.com/s?k=${plusSeparatedSearchTerm}`;
};
