export const getProducts = async () => {
    try {
        const backendUrl = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL;
        console.log("backendUrl:", backendUrl);
        console.log("process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY:", process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY);
        const response = await fetch(`${backendUrl}/store/products`, {
            method: "GET",
            mode: "cors",
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
