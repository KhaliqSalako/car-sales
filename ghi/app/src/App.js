import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from './InventoryComponents/ManufacturerList';
import ManufacturerForm from './InventoryComponents/ManufacturerForm';
import ModelList from './InventoryComponents/ModelList';
import ModelForm from './InventoryComponents/ModelForm';
import AutomobileList from './InventoryComponents/AutomobileList';
import AutomobileForm from './InventoryComponents/AutomobileForm';
import SalespersonForm from './SalesComponents/SalespersonForm';
import CustomerForm from './SalesComponents/CustomerForm';
import SalesList from './SalesComponents/SalesList';
import SalesForm from './SalesComponents/SalesForm';
import SalesHistory from './SalesComponents/SalesHistory';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="manufacturers/">
          <Route index element={<ManufacturerList />} />
          <Route path="new/" element={<ManufacturerForm />} />
        </Route>
        <Route path="models/">
          <Route index element={<ModelList />} />
          <Route path="new/" element={<ModelForm />} />
        </Route>
        <Route path="automobiles/">
          <Route index element={<AutomobileList />} />
          <Route path="new/" element={<AutomobileForm />} />
        </Route>
        <Route path="employees/">
          {/* <Route index element={<EmployeesList />} /> */}
          <Route path="new/" element={<SalespersonForm />} />
        </Route>
        <Route path="customers/">
          <Route path="new/" element={<CustomerForm />} />
        </Route>
        <Route path="sales/">
          <Route index element={<SalesList />} />
          <Route path="new/" element={<SalesForm />} />
          <Route path="history/" element={<SalesHistory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
