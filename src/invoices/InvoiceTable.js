

import React from "react";
import {Link} from "react-router-dom";

const InvoiceTable = ({label, items, deleteInvoice}) => {
    return (
        <div>
            <p>
                {label} {items.length}
            </p>

            <table className="table table-hover">
                <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>Číslo</th>
                    <th>Prodávající</th>
                    <th>Kupující</th>
                    <th>Produkt</th>
                    <th>Cena bez DPH</th>
                    <th colSpan={3} className="text-center">Akce</th>
                    
                </tr>
                </thead>
                <tbody>
                {items.map((item, index) => (
                    <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td>{item.invoiceNumber}</td>
                        <td>{item.seller.name}</td>
                        <td>{item.buyer.name}</td>
                        <td>{item.product}</td>
                        <td>{item.price} ,-Kč</td>
                        <td>
                            <div className="text-center">
                                <Link
                                    to={"/invoices/show/" + item._id}
                                    className="btn btn-sm btn-info mx-2"
                                >
                                    Zobrazit
                                </Link>
                                <Link
                                    to={"/invoices/edit/" + item._id}
                                    className="btn btn-sm btn-warning mx-2"
                                >
                                    Upravit
                                </Link>
                                <button
                                    onClick={() => deleteInvoice(item._id)}
                                    className="btn btn-sm btn-danger mx-2"
                                >
                                    Odstranit
                                </button>
                            </div>
                        </td>
                        
                    </tr>
                ))}
                </tbody>
            </table>
            <Link to={"/invoices/create"} className="btn btn-success">
                Nová faktura
            </Link>
        </div>
    );
};

export default InvoiceTable;
