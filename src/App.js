
import './App.css';


import SideMenu from './Main/SideMenu';
import Header from './Main/header';
import Chart from './Main/chart'
import Card from './Main/Card'
import Product from './Main/Product';
import Schedule from './Main/Schedule';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';







function App() {
  useEffect(() => {
    toast.success('Click on Login button to loged In');
  }, []);
  return (
    <div className='nav'>

      <SideMenu></SideMenu>
      <div className='mk'>
        <Header ></Header>
        <Card></Card>
        <section className='navcom'>
          <Chart></Chart>
          <Schedule></Schedule>
        </section>
        <Product></Product>
      </div>
      <ToastContainer />
    </div>
    
  );
}

export default App;
