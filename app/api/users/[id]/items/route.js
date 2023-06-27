import { connectToDB } from "@utils/database";
import Item from "@models/item";

export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        const items = await Item.find({
            creator: params.id
        }).populate('creator');

        return new Response(JSON.stringify(items), {status: 200})

    } catch (error) {
        return new Response("No se pudieron obtener todos los productos", {status: 500})
    }
}