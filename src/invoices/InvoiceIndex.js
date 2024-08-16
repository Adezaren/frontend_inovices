

import React, {useEffect, useState} from "react";

import {apiDelete, apiGet} from "../utils/api";

import InvoiceTable from "./InvoiceTable";
import InvoiceFilter from "./invoiceFilter";

const InvoiceIndex = (props) => {
    const [invoices, setInvoices] = useState([]);
    const [buyerListState, setBuyerList] = useState([])
    const [sellerListState, setSellerList] = useState([])
    const [productState, setProduct] = useState([])
    const [filterState, setFilter] = useState({
        sellerId:  undefined,
        buyerId: undefined,        
        product: undefined,
        minPrice: undefined,
        maxPrice: undefined,
        limit: undefined,
    });

    const deleteInvoice = async (id) => {
        try {
            await apiDelete("/api/invoices/" + id);
        } catch (error) {
            console.log("Potvrzení smazání");
            }
        setInvoices(invoices.filter((item) => item._id !== id));
    };

    useEffect(() => {
        apiGet("/api/invoices").then((data) => setInvoices(data));
        apiGet("/api/persons").then((data) => setBuyerList(data));
        apiGet("/api/persons").then((data) => setSellerList(data));
        apiGet("/api/invoices").then((data) => setProduct(data));
        
    }, []);

    const handleChange = (e) => {
        if (e.target.value === "false" || e.target.value ==="true" || e.target.value === "") {
            setFilter(prevState => {
                return {...prevState, [e.target.name]: undefined}
            });
        } else {
            setFilter(prevState => {
                return {...prevState, [e.target.name]: e.target.value}
            });
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const params = filterState;
        const data = await apiGet("/api/invoices", params);
        setInvoices(data);
 };

    return (
        <div>
            <h1>Seznam faktur</h1>
            <hr />
            <InvoiceFilter
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                invoices = {invoices}
                buyer = {buyerListState}
                seller = {sellerListState}
                product = {productState} 
                filter = {filterState}
                confirm = "Filtruj faktury"
                            />
            <hr />

            <InvoiceTable 
                deleteInvoice={deleteInvoice} 
                items={invoices} 
                label="Počet nalezených faktur:" />
            
        </div>
    );
};
export default InvoiceIndex;
