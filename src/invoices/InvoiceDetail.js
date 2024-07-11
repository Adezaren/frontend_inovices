

import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {apiGet, calculate} from "../utils/api";
import dateStringFormatter from "../utils/dateStringFormatter";

const InvoiceDetail = () => {
    const {id} = useParams();
    const [invoice, setInvoice] = useState();

    const [seller, setSeller] = useState()
    const [buyer, setBuyer] = useState()
        


    useEffect(() => {
        
           apiGet("/api/invoices/" + id).then((data) => { setInvoice(data); });
           apiGet("/api/invoices/" + id).then((data) => { setSeller(data.seller); });
           apiGet("/api/invoices/" + id).then((data) => { setBuyer(data.buyer); });

    
    
    }, [id]);

    console.log(seller);


    if(!invoice || !seller || !buyer) {
        return <h1>Načítám</h1>
    }

    console.log(seller);
    return (
        <>
            <div>
                <h1>Detail faktury</h1>
                <hr/>
                <h3>{invoice.invoiceNumber}  </h3>
                <p>
                    <strong>Prodávající:</strong>
                    <br/>
                    {seller.name} ({seller.identificationNumber})
                </p>
                <p>
                    <strong>Kupující:</strong>
                    <br/>
                    {buyer.name} ({buyer.identificationNumber})
                </p>
                <p>
                    <strong>Vystaveno:</strong>
                    <br/>
                    {dateStringFormatter(invoice.issued)}
                </p>
                <p>
                    <strong>Splatnost:</strong>
                    <br/>
                    {dateStringFormatter(invoice.dueDate)}
                </p>
                <p>
                    <strong>Produkt:</strong>
                    <br/>
                    {invoice.product}
                </p>
                <p>
                    <strong>Cena:</strong>
                    <br/>
                    {invoice.price},- Kč
                </p>
                <p>
                    <strong>DPH:</strong>
                    <br/>
                    {invoice.vat} %
                </p>
                <p>
                    <strong>Cena celkem:</strong>
                    <br/>
                    <h3>{calculate(invoice.price, invoice.vat)},- Kč</h3>
                </p>
            </div>
        </>
    );
};

export default InvoiceDetail;
