import React from "react";

const InvoiceStatistic = ({label, item}) => {
    return (
        <div>
            <p>
                {label}
            </p>

            <table className="table table-borderless">
                <thead>
                   <tr className="text-center">
                        <th>Počet faktur</th>
                        <th>Celková suma v tomto roce</th>
                        <th>Celková suma faktur</th>
                    </tr> 
                </thead>
                <tbody>
                
                    <tr className="text-center display-5">    
                        <td>{item.invoicesCount}</td>
                        <td>{item.currentYearSum} ,- Kč</td>
                        <td>{item.allTimeSum} ,- Kč</td>
                        
                    </tr>
                   
                </tbody>

            </table>


        </div>



    );

};

export default InvoiceStatistic;