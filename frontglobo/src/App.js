import './App.css';

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
    </div>
  );
}

export default App;
