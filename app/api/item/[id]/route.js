import { connectToDB } from "@utils/database";
import Item from "@models/item";

export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        const item = await Item.findById(params.id).populate('creator');

        if(!item) return new Response("Item no encontrado", { status: 404 })

        return new Response(JSON.stringify(item), { status: 200 })

    } catch (error) {
        return new Response("No se pudieron obtener todos los productos", {status: 500})
    }
}

export const PATCH = async (request, { params }) => {
    const { userId, name, category, buy, sell, stock, details } = await request.json();

    try {
        await connectToDB();

        const existingItem = await Item.findById(params.id)

        if(!existingItem) return new Response("Item no encontrado", { status: 404 })

        existingItem.userId = userId;
        existingItem.name = name;
        existingItem.category = category;
        existingItem.buy = buy;
        existingItem.sell = sell;
        existingItem.stock = stock;
        existingItem.details = details;

        await existingItem.save();

        return new Response(JSON.stringify(existingItem), { status: 200 })

    } catch (error) {
        return new Response("No se pudieron obtener todos los productos", {status: 500})
    }
}

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        await Item.findByIdAndRemove(params.id);

        return new Response("Item eliminado correctamente", { status: 200 })

    } catch (error) {
        return new Response("Ha fallado la eliminación del item", {status: 500})
    }
}