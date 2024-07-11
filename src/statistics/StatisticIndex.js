import React, {useEffect, useState} from "react";
import {apiGet} from "../utils/api";
import InvoiceStatistic from "./InvoiceStatitic";
import PersonStatistic from "./PersonStatistic";

const StatisticIndex = () => {
    const [statistics, setStatistic] = useState([])
    const [data, setData] = useState([])

    

useEffect(() => {
    apiGet("/api/invoices/statistics").then((data) => setStatistic(data));
    apiGet("/api/persons/statistics").then((data) => setData(data));
}, []);


if(!statistics || !data) {
    return <h1>Načítám</h1>
}

console.log(statistics)
return (
    <div>
        <h1>Statistiky</h1>
        <hr/>
        <InvoiceStatistic
                label = "Statistika faktur"
                item = {statistics}
        />
        <hr/>
                <PersonStatistic
                label = "Statistika osob"
                items = {data}
        /> 
    </div>


);
}
export default StatisticIndex;