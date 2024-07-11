import React from "react";

const PersonStatistic = ({label, items}) => {
    return (
        <div>
            <p>
                {label}
            </p>

            <table className="table table-sm table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Prodávající</th>
                        <th>Fakturované příjmy</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index +1}>
                            <td>{index +1}</td>
                            <td>{item.personName}</td>
                            <td>{item.revenue} ,- Kč</td>

                        </tr>


                    ))}                                


                </tbody>
            </table>
        </div>
    );
};

export default PersonStatistic;