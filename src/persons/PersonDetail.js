import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {apiGet} from "../utils/api";
import Country from "./Country";
import InvoiceTable from "../invoices/InvoiceTable";


const PersonDetail = () => {
    const {id} = useParams();
    const [person, setPerson] = useState({});
    const [invoicesSale, setInvoicesSale] = useState([]);
    const [invoicesPurchase, setInvoicesPurchases] = useState([]);

    const identificationNumber = person.identificationNumber;
  

    useEffect(() => {
        apiGet("/api/persons/" + id).then((data) => setPerson(data));        
        
    }, [id]);

    useEffect(() => {
        apiGet("/api/identification/" + identificationNumber + "/sales").then((data) => setInvoicesSale(data));
        apiGet("/api/identification/" + identificationNumber + "/purchases").then((data) => setInvoicesPurchases(data));

    }, [identificationNumber]);
       
    
    const country = Country.CZECHIA === person.country ? "Česká republika" : "Slovensko";

    return (
        <>
            <div>
                <h1>Detail osoby</h1>
                <hr/>
                <h3>{person.name} ({person.identificationNumber})</h3>
                <p>
                    <strong>DIČ:</strong>
                    <br/>
                    {person.taxNumber}
                </p>
                <p>
                    <strong>Bankovní účet:</strong>
                    <br/>
                    {person.accountNumber}/{person.bankCode} ({person.iban})
                </p>
                <p>
                    <strong>Tel.:</strong>
                    <br/>
                    {person.telephone}
                </p>
                <p>
                    <strong>Mail:</strong>
                    <br/>
                    {person.mail}
                </p>
                <p>
                    <strong>Sídlo:</strong>
                    <br/>
                    {person.street}, {person.city},
                    {person.zip}, {country}
                </p>
                <p>
                    <strong>Poznámka:</strong>
                    <br/>
                    {person.note}
                </p>
            </div>

            <div>
                <div>
                    <hr/>
                </div>
                
                <InvoiceTable
                    items={invoicesSale}
                    label = "Vystavené faktury:"
                />    

                <InvoiceTable
                    items = {invoicesPurchase}
                    label = "Přijaté faktury:"
                />    
            </div>

            

            

       
        </>
    );
};

export default PersonDetail;
