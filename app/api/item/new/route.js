import { connectToDB } from "@utils/database";
import Item from "@models/item";

export const POST = async (req) => {
    const { userId, name, category, buy, sell, stock, details } = await req.json();

    try {
        console.log("DBBBB!")
        await connectToDB();
        const newItem = new Item({
            creator: userId,
            name,
            category,
            buy,
            sell,
            stock,
            details
        })

        await newItem.save();

        return new Response(JSON.stringify(newItem), {status: 201})

    } catch (error) {
        return new Response("Error creando nueva mercancía", {status: 500})
    }
}