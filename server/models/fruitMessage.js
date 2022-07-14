import mongoose from 'mongoose';

const fruitSchema = mongoose.Schema({
    name: String,
    weight: Number,
    season: String,
    image: String,
})

var FruitMessage = mongoose.model('Fruit', fruitSchema);

export default FruitMessage;

