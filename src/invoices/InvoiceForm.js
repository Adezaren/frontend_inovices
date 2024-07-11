

import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

import {apiGet, apiPost, apiPut} from "../utils/api";

import InputField from "../components/InputField";
import FlashMessage from "../components/FlashMessage";
import InputSelect from "../components/InputSelect";


const InvoiceForm = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [invoices, setInvoice] = useState({
        invoiceNumber: "",
        seller: {_id: ""},
        buyer: {_id: ""},
        issued: "",
        dueDate: "",
        product: "",
        price: "",
        vat: "",
        note: "",
       
    });
    const [sentState, setSent] = useState(false);
    const [successState, setSuccess] = useState(false);
    const [errorState, setError] = useState(null);
    const [personsListState, setPersonList] = useState([])

    useEffect(() => {
        if (id) {
            apiGet("/api/invoices/" + id).then((data) => { setInvoice(data);
        });
    }
    apiGet("/api/persons").then((data) => setPersonList(data)); },[id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        (id ? apiPut("/api/invoices/" + id, invoices) : apiPost("/api/invoices", invoices))
            .then((data) => {
                setSent(true);
                setSuccess(true);
                navigate("/invoices");
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
                setSent(true);
                setSuccess(false);
            });
    };

    const sent = sentState;
    const success = successState;

    return (
        <div>
            <h1>{id ? "Upravit" : "Vytvořit"} fakturu</h1>
            <hr/>
            {errorState ? (
                <div className="alert alert-danger">{errorState}</div>
            ) : null}
            {sent && (
                <FlashMessage
                    theme={success ? "success" : ""}
                    text={success ? "Uložení faktury proběhlo úspěšně." : ""}
                />
            )}
            <form onSubmit={handleSubmit}>
                <InputField
                    required={true}
                    type="number"
                    min={"1"}
                    name="invoiceNumber"
                    label="Číslo faktury"
                    prompt="Zadejte číslo"
                    value={invoices.invoiceNumber}
                    handleChange={(e) => {
                        setInvoice({...invoices, invoiceNumber: e.target.value});
                    }}
                />

                <InputSelect
                    required={true}
                    name="seller"
                    items={personsListState}
                    label="Prodávající"
                    prompt="Vyberte jméno"
                    value={invoices.seller._id}
                    handleChange={(e) => {
                        setInvoice({...invoices, seller:{_id: e.target.value}})}}
                />

                <InputSelect
                    required={true}
                    name="buyer"
                    items={personsListState}
                    label="Kupující"
                    prompt="Vyberte jméno"
                    value={invoices.buyer._id}
                    handleChange={(e) => {
                        setInvoice({...invoices, buyer:{_id: e.target.value}})}}
                />

                <InputField
                    required={true}
                    type="date"
                    name="issued"
                    min="3"
                    label="Datum vystavení"
                    prompt="Zadejte datum vysavení faktury"
                    value={invoices.issued}
                    handleChange={(e) => {
                        setInvoice({...invoices, issued: e.target.value});
                    }}
                />

                <InputField
                    required={true}
                    type="date"
                    name="dueDate"
                    min="3"
                    label="Datum splatnosti"
                    prompt="Zadejte datum splatnosti"
                    value={invoices.dueDate}
                    handleChange={(e) => {
                        setInvoice({...invoices, dueDate: e.target.value});
                    }}
                />

                <InputField
                    required={true}
                    type="text"
                    name="product"
                    min="3"
                    label="Produkt"
                    prompt="Zadejte produkt"
                    value={invoices.product}
                    handleChange={(e) => {
                        setInvoice({...invoices, product: e.target.value});
                    }}
                />

                <InputField
                    required={true}
                    type="number"
                    name="price"
                    min="3"
                    label="Cena"
                    prompt="Zadejte cenu"
                    value={invoices.price}
                    handleChange={(e) => {
                        setInvoice({...invoices, price: e.target.value});
                    }}
                />

                <InputField
                    required={true}
                    type="number"
                    name="VAT"
                    min="3"
                    label="DPH"
                    prompt="Zadejte DPH"
                    value={invoices.vat}
                    handleChange={(e) => {
                        setInvoice({...invoices, vat: e.target.value});
                    }}
                />

                <InputField
                    required={false}
                    type="text"
                    name="note"
                    min="3"
                    label="poznámka"
                    prompt="Zadejte poznámku"
                    value={invoices.note}
                    handleChange={(e) => {
                        setInvoice({...invoices, note: e.target.value});
                    }}
                />

                
                <input type="submit" className="btn btn-primary" value="Uložit"/>
            </form>
        </div>
    );
};

export default InvoiceForm;
