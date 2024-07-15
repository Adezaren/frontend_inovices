

import React from "react";
import {Link} from "react-router-dom";

const PersonTable = ({label, items, deletePerson}) => {
    return (
        <div>
            <p>
                {label} {items.length}
            </p>

            <table className="table table-hover">
                <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>Jméno</th>
                    <th>IČ</th>
                    <th colSpan={3} className="text-center">Akce</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item, index) => (
                    <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.identificationNumber}</td>
                        <td>
                            <div className="text-center ">
                                <Link
                                    to={"/persons/show/" + item._id}
                                    className="btn btn-sm btn-info mx-2"
                                    
                                >
                                    Zobrazit
                                </Link>
                                <Link
                                    to={"/persons/edit/" + item._id}
                                    className="btn btn-sm btn-warning mx-2"
                                >
                                    Upravit
                                </Link>
                                <button
                                    onClick={() => deletePerson(item._id)}
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
            <Link to={"/persons/create"} className="btn btn-success my-5">
                Nová osoba
            </Link>
        </div>
    );
};

export default PersonTable;
