import logo from './logo.svg';
import './App.css';
import AxiosExample from './components/axiosexample';
import CrudForm from './components/crudForm';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import CreateDataPage from "./pages/CreateDataPage";
import DeletePage from "./pages/DeletePage";
import UpdatePage from "./pages/UpdatePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/createdata" element={<CreateDataPage />} />   
          <Route path="/delete" element={<DeletePage />} />
          <Route path="/update" element={<UpdatePage />} />        
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

      {/* <h1>Create Data</h1>
      <CrudForm crud="createData"/>
      <h1>Filter Data</h1>
      <CrudForm crud="postFilterData"/>
      <h1>Get All Data</h1>
      <CrudForm crud="getAllData"/>
      <h1>Update Data</h1>
      <CrudForm crud="updateData"/>
      <h1>Delete Data</h1>
      <CrudForm crud="deleteData"/>
      <AxiosExample/> */}
    </div>
  );
}

export default App;
