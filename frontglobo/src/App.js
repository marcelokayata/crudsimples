import logo from './logo.svg';
import './App.css';
import AxiosExample from './components/axiosexample';
import CrudForm from './components/crudForm';

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
      <h1>Create Data</h1>
      <CrudForm crud="createData"/>
      <h1>Filter Data</h1>
      <CrudForm crud="postFilterData"/>
      <h1>Get All Data</h1>
      <CrudForm crud="getAllData"/>
      <h1>Update Data</h1>
      <CrudForm crud="updateData"/>
      <AxiosExample/>
    </div>
  );
}

export default App;
