import { Schema, model, models } from "mongoose";

const ItemSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    name: {
        type: String,
        required: [true, 'Nombre es necesario.']
    },
    category: {
        type: String,
        required: [true, 'Categoria es necesaria.']
    },
    buy: {
        type: String,
        required: [true, 'Precio de compra es necesario.']
    },
    sell: {
        type: String,
        required: [true, 'Precio de venta es necesario.']
    },
    stock: {
        type: String,
        required: [true, 'Stock es necesario.']
    },
    details: {
        type: String,
        required: [true, 'Detalles son necesarios.']
    },
});

const Item = models.Item || model('Item', ItemSchema);

export default Item;