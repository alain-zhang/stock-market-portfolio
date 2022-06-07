function getStockPrice(ticker) {

  const gateway = "https://lhqmyilp3e.execute-api.us-east-1.amazonaws.com/prod/get-stock-price";

  const fetchOptions = {
    method: 'POST',
    cache: 'default',
    body: JSON.stringify({ticker: ticker})
  }
  
  return fetch(gateway, fetchOptions)
    .then(function(response) {
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(function(response) {
      const stockobj = { ticker: response.ticker,  data: response.data };
      return stockobj;
    })
    .catch(function(error) {
      console.log(error);
    });

}

export default getStockPrice;