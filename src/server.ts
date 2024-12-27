import app from './app';

import dotenv from 'dotenv';
import path from 'path';

const envPath = path.resolve(__dirname, '../.env');
console.log('Loading .env from:', envPath);
dotenv.config({ path: envPath });


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
