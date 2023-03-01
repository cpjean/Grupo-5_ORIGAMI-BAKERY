import SideBar from './componentes/side'
import Navbar from './componentes/navBar'
import Body from './componentes/body'
import './App.css'
import ProductsTable from './componentes/productsTable'

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />
            <div className="container-fluid">
              <Body />
              <ProductsTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;