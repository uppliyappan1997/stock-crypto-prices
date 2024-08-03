import { Schema, model, Document } from 'mongoose';

interface IPrice extends Document {
  symbol: string;
  price: number;
  timestamp: Date;
}

const priceSchema = new Schema<IPrice>({
  symbol: { type: String, required: true },
  price: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Price = model<IPrice>('Price', priceSchema);

export default Price;
