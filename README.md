# Stock and Crypto Prices Backend

This project is a Node.js application that polls real-time data for 5 stocks or cryptocurrencies from CoinGecko API and stores it in a MongoDB database.

## Features

- Polls real-time data every few seconds for 5 stocks or cryptocurrencies (e.g., GOOG, BTC).
- Stores the data in a MongoDB database.

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/stock-crypto-prices-backend.git
    cd stock-crypto-prices-backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root of the project and add your MongoDB URI:
    ```
    MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/mydatabase?retryWrites=true&w=majority
    PORT=5000
    ```

4. Run the TypeScript compiler and start the server:
    ```bash
    npm run build
    npm start
    ```

5. The server will be running on [http://localhost:5000](http://localhost:5000).

## Project Structure

