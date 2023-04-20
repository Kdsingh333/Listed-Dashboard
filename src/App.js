
import './App.css';


import SideMenu from './Main/SideMenu';
import Header from './Main/header';
import Chart from './Main/chart'
import Card from './Main/Card'
import Product from './Main/Product';
import Schedule from './Main/Schedule';



function App() {
  return (
    <div className='nav'>
      <SideMenu></SideMenu>
      <div >
      <Header ></Header>
      <Card></Card>
       <section className='navcom'>
      <Chart></Chart>
      <Schedule></Schedule>
      </section>
      <Product></Product>
      </div>
      </div>

  );
}

export default App;
