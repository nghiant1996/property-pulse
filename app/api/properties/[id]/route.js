import connectDB from "@/config/database"
import Property from "@/models/Property";

// GET /api/properties/:id
export const GET = async (request, { params }) => {
    try {
        await connectDB();

        const property = await Property.findById(params);

        if (!property) {

        }

        return new Response(JSON.stringify(property), {
            status: 200,
        })
    } catch (error) {
        console.log(error);
        return new Response('Somthing went wrong', { status: 500 });
    }
}