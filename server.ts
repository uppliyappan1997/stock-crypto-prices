import app from './app';
import { fetchAndStoreData } from './services/dataService';
import cron from 'node-cron';

// Schedule the data fetch every few seconds
cron.schedule('*/10 * * * * *', fetchAndStoreData);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
