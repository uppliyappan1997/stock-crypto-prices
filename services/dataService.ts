import axios from 'axios';
import Price from '../models/Price';

const symbols = ['GOOG', 'BTC', 'AAPL', 'ETH', 'TSLA'];

const fetchAndStoreData = async () => {
  try {
    const responses = await Promise.all(
      symbols.map((symbol) =>
        axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`)
      )
    );

    responses.forEach((response, index) => {
      const symbol = symbols[index];
      const price = response.data[symbol.toLowerCase()].usd;

      const newPrice = new Price({
        symbol,
        price,
      });

      newPrice.save();
    });

    console.log('Data fetched and stored');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export { fetchAndStoreData };
