export const getProducts = async () => {
    try {
        // Usamos la variable de entorno para el backend
        const backendUrl = "https://medusa-backend-production-4287.up.railway.app";
        const response = await fetch(`${backendUrl}/store/products`, {
            method: "GET",
            headers: {
                "x-publishable-api-key": process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY ?? "",
            },
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        return { products: data.products, error: null };
    } catch (error: any) {
        console.error("Error fetching products:", error);
        return { products: [], error: error.message };
    }
};
