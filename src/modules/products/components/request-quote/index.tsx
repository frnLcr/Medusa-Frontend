import React from 'react';
import { HttpTypes } from '@medusajs/types';
import { Button } from "@medusajs/ui"

type RequestQuoteProps = {
    product: HttpTypes.StoreProduct
}

const RequestQuote: React.FC<RequestQuoteProps> = ({ product }) => {
    const message = `Hola! Quiero solicitar información sobre el producto: ${product.title}`;
    const phoneNumber = '5493516165091'; // Número de WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;


    const handleQuotation = () => {
        window.open(url, '_blank');
    };

    return (
        <Button
            onClick={handleQuotation}
            variant="secondary"
            className="w-full"
        >
            Solicitar Cotizacion
        </Button>
    );
};


export default RequestQuote;



