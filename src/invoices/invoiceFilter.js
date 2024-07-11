import React from "react";
import InputField from "../components/InputField";
import InputSelect from "../components/InputSelect";

const InvoiceFilter = (props) => {

    const handleChange = (e) => {
        props.handleChange(e);
    };

    const handleSubmit = (e) => {
        props.handleSubmit(e);
    };

    const filter = props.filter;


    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col">
                        <InputSelect
                            items={props.seller}
                            name="sellerId"
                            label="Prodávající"
                            prompt="Neuveden"
                            value={filter.sellerId}
                            handleChange={handleChange}
                        />
                    </div>

                    <div className="col">
                        <InputSelect
                            items={props.buyer}
                            name="buyerId"
                            label="Kupující"
                            prompt="Neuveden"
                            value={filter.buyerId}
                            handleChange={handleChange}
                        />
                    
                    </div>
                    
                    <div className="col">
                        <InputField
                            type="text"
                            name="product"
                            min="3"
                            label="Produkt"
                            prompt="Neuveden"
                            value={filter.product}
                            handleChange={handleChange}  
                        />
                    </div>
            </div>

            <div className="row">
                <div className="col">
                    <InputField
                        type="number"
                        min="0"
                        name="minPrice"
                        label="Cena od"
                        prompt="Neuvedeno"
                        value={filter.minPrice ? filter.minPrice : ""}
                        handleChange={handleChange}
                    />                      
                </div>  

                <div className="col">
                    <InputField
                            type="number"
                            min="0"
                            name="maxPrice"
                            label="Cena do"
                            prompt="Neuvedeno"
                            value={filter.maxPrice ? filter.maxPrice : ""}
                            handleChange={handleChange}
                        />       
                </div> 

                <div className="col">
                    <InputField
                        type="number"
                        min="1"
                        name="limit"
                        label="Počet zobrazených faktur"
                        prompt="Neuvedeno"
                        value={filter.limit ? filter.limit : ""}
                        handleChange={handleChange}
                    /> 
                </div> 
                <div className="row">
                    <div className="col">
                        <button
                            type="submit"
                            className="btn btn-dark float-right mt-3"
                            value="confirm"
                        >Filtruj faktury
                        </button>
                      
                    </div>
                </div>
                   
            </div>
           
        </form>


    );


 };
export default InvoiceFilter;