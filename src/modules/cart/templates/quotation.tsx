"use client"

import { Button, Heading } from "@medusajs/ui"
import Divider from "@modules/common/components/divider"
import { HttpTypes } from "@medusajs/types"

type QuotationProps = {
    cart: HttpTypes.StoreCart
}

const Quatition = ({ cart }: QuotationProps) => {
    const handleQuotation = () => {
        const telefono = "5493516165091";
        let mensaje = "Hola! quiero solicitar información por los productos:\n";

        cart.items?.forEach(item => {
            mensaje += `- ${item.product_title} (x${item.quantity})\n`;
        });

        const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="flex flex-col gap-y-4 bg-[#EEEEEE]">
            <Heading level="h2" className="text-[2rem] leading-[2.75rem]">
                Summary
            </Heading>

            <Divider />
            Que puedo mostrar aqui?
            <Divider />

            <Button
                className="w-full h-10"
                onClick={handleQuotation}
            >
                Solicitar Cotizacion
            </Button>

        </div>
    );
};

export default Quatition
