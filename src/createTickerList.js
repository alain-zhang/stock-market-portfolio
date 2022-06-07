function createTickerList(stocks) {
  /*let data = stocks.map(item => item.ticker);
  setTickerList(data);*/
  const tickerList = stocks.reduce(function(previousValue, currentValue) {
    return [previousValue, currentValue.ticker];
  }, []);
  return tickerList;
}

export default createTickerList;