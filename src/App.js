import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import PersonIndex from "./persons/PersonIndex";
import PersonDetail from "./persons/PersonDetail";
import PersonForm from "./persons/PersonForm";
import InvoiceIndex from "./invoices/InvoiceIndex";
import InvoiceDetail from "./invoices/InvoiceDetail";
import InvoiceForm from "./invoices/InvoiceForm";

import StatisticIndex from "./statistics/StatisticIndex";
import Home from "./home/Home";





export function App() {

  

  return (
    <Router>
      <div className="container bg-light">
        <nav className="navbar navbar-light navbar-expand-sm justify-content-between">   
          
                   
          <ul className="navbar-nav mr-auto navbar-text nav-tabs">
          <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/persons"} className="nav-link">
                Osoby
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/invoices"} className="nav-link">
                Faktury
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/statistics"} className="nav-link">
                Statistiky
              </Link>
            </li>
          </ul>
           
        </nav>
        


        <Routes>
          
            <Route index element ={<Navigate to={"/home"} />} />
            <Route path="/home/" element={<Home />} />
            <Route path="/persons/">
              <Route index element={<PersonIndex />} />
              <Route path="show/:id" element={<PersonDetail />} />
              <Route path="create" element={<PersonForm />} />
              <Route path="edit/:id" element={<PersonForm />} />
            </Route>
            <Route path="/invoices/">
              <Route index element={<InvoiceIndex />}/>
              <Route path="create" element={<InvoiceForm/>}/>
              <Route path="show/:id" element={<InvoiceDetail/>}/>
              <Route path="edit/:id" element={<InvoiceForm />} />
            </Route>
            <Route path="/statistics/">
              <Route index element={<StatisticIndex/>}/>
            </Route>
            

        
        </Routes>

        <br/>
        <footer className= "fixed-bottom text-light bg-dark footer bg-body-tertiary text-center">
          Vytvořil &copy;AdVy 2024
        </footer>
      
        
      </div>
      

    </Router>

    

    
  );
}

export default App;
